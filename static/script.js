let button = document.getElementById("draw");
let scrap = document.getElementById("scrap");
let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let next = document.getElementById("next")
let prev = document.getElementById("previous")
let text = document.getElementById("text");
let c = document.createElement('canvas');
let canvas = document.getElementById('drawings');
let $pageNo = 1
let $source = document.getElementById(`sourceimg${$pageNo}`).src
let responseData = JSON.parse(document.getElementById('resp').textContent)
let realPDFBox = JSON.parse(document.getElementById('box').textContent)
let realWidth = realPDFBox[0]
let realHeight = realPDFBox[1]
let context;
let base64 = ""
let coords = [];
let rectangles = [];
let redo_stack = [];
let max = 16;
let inner = 0;
let shapes = []
var topMap = new Image()
let magicRatio = 1.3
let image_width_fract = 0.7
let form = document.getElementById("form");
window.onload = () => {
    topMap.src = $source
    topMap.onload = () => {
        canvas.width = Math.min(image_width_fract * window.innerWidth, 1000, topMap.naturalWidth) ;
        canvas.height = (topMap.naturalHeight / topMap.naturalWidth) * canvas.width 
        context = canvas.getContext('2d')
        context.drawImage(topMap, 0, 0, canvas.width, canvas.height)
        UndoCanvas.enableUndo(context)

        c.height = topMap.naturalHeight;
        c.width = topMap.naturalWidth;
        let ctx = c.getContext('2d');
        ctx.drawImage(topMap, 0, 0, c.width, c.height)
        base64 = c.toDataURL();
        base64 = base64.substring(base64.indexOf(',')+1)

        rectangles.filter(r => r.page === $pageNo).forEach(r => {
            context.rect(...r.shape);
            context.stroke();
        })
    }
    
    

}





drawings.addEventListener("click", function(e) {

    let bounds = drawings.getBoundingClientRect();
    let left = bounds.left;
    let top = bounds.top;

    let xClick = e.pageX - left - window.scrollX;
    let yClick = e.pageY - top - window.scrollY;

    let clientWidth = drawings.clientWidth;
    let clientHeight = drawings.clientHeight;
    
    let pixelX = Math.round((xClick / clientWidth) * realWidth);
    let pixelY = Math.round((yClick / clientHeight) * realHeight); 

    if(rectangles.length < max) {

        if(coords.length < 1) {
            shapes.push(xClick, yClick)
            coords.push(pixelX, pixelY)
        } else {
            shapes.push(xClick, yClick);
            let colorHex = '#' + (Math.floor(Math.random() * 16777215)).toString(16)
            context.strokeStyle = colorHex
            context.strokeRect(Math.min(shapes[0], shapes[2]), Math.min(shapes[1], shapes[3]), Math.abs(shapes[0] - shapes[2]), Math.abs(shapes[1] - shapes[3]));
            coords.push(pixelX, pixelY);
            rectangles.push({page : $pageNo,
                shape: [Math.min(shapes[0], shapes[2]), Math.min(shapes[1], shapes[3]), Math.abs(shapes[0] - shapes[2]), Math.abs(shapes[1] - shapes[3])],
                box : [Math.min(coords[0], coords[2]),
                       Math.min(coords[1], coords[3]),
                       Math.max(coords[0], coords[2]), 
                       Math.max(coords[1], coords[3])],
                color: colorHex});
            updateForm();
            coords = []
            shapes = []
        }
        
    }
    
})

function updateForm(){

    form.innerHTML = ''
    if(rectangles) {
        form.innerHTML += `<div class="slds-form">`
        form.innerHTML += `<div class="slds-form-element slds-form-element_stacked">`
        form.innerHTML += `<label for="format-name"><abbr class="slds-required" title="required">* </abbr>Format name:</label> <br>`
        form.innerHTML += `<input name="format-name" type="text" required/> <br>`
        form.innerHTML += `<fieldset class="slds-form-element slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label" style="margin-left:48px;">
          <abbr class="slds-required" title="required">*</abbr>Generation type</legend>
        <div class="slds-form-element__control">
          <span class="slds-radio">
            <input type="radio" id="make-new" name="creation-type" checked="" />
            <label class="slds-radio__label" for="make-new">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Create new Object</span>
            </label>
          </span>
          <span class="slds-radio">
            <input type="radio" id="edit-existing" name="creation-type" />
            <label class="slds-radio__label" for="edit-existing">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Edit existing Record</span>
            </label>
          </span>
        </div>
      </fieldset>`
        // form.innerHTML += `<label for="make-new"><abbr class="slds-required" title="required">* </abbr>Create new Object</label> `
        // form.innerHTML += `<input name="creation-type" type="radio" id="make-new" required/> <br>`

        // form.innerHTML += `<label for="edit-existing"><abbr class="slds-required" title="required">* </abbr>Edit existing Record</label>`
        // form.innerHTML += `<input name="creation-type" type="radio" id="edit-existing" required/> <br>`
        form.innerHTML += `<div class="slds-form-element slds-form-element_stacked">`
        form.innerHTML += `<label class="slds-form-element__label" for="object-name"><abbr class="slds-required" title="required">* </abbr>Object API Name / Record ID:</label> <br>`
        form.innerHTML += `<div class="slds-form-element__control">
        <input name="object-name" type="text" required/> <br></div></div>`
        rectangles.forEach(
            r => {
                form.innerHTML += `<div class="slds-form-element slds-form-element_stacked">`
                form.innerHTML += `<span style="color:${r.color}">Rectangle, page ${r.page}</span> <br>`
                form.innerHTML += `<label class="slds-form-element__label" for="${r.color}-name"><abbr class="slds-required" title="required">* </abbr>Name:</label> <br>`
                form.innerHTML += `<div class="slds-form-element__control">
                <input name="${r.color}-name" type="text" required/> <br></div></div>`

                form.innerHTML += `<div class="slds-form-element slds-form-element_stacked">`
                form.innerHTML += `<label class="slds-form-element__label" for="${r.color}-targetFieldName"><abbr class="slds-required" title="required">* </abbr>Target field API name:</label> <br>`
                form.innerHTML += `<div class="slds-form-element__control">
                <input name="${r.color}-targetFieldName" type="text" required/> <br></div></div>`

                form.innerHTML += `<div class="slds-form-element slds-form-element_stacked">`
                form.innerHTML += `<label class="slds-form-element__label" for="${r.color}-priority"><abbr class="slds-required" title="required">* </abbr>Priority level:</label> <br>`
                form.innerHTML += `<div class="slds-form-element__control">
                <input name="${r.color}-priority" type="number" placeholder="0" default="0" required/> <br></div></div>`
            }
        )
        form.innerHTML += `<button class="slds-button slds-button_brand type="submit" id="gen-json">Generate JSON</button></div>`
    }
}




button.addEventListener("click", function() {
    receivedData = ""
    text.textContent = ''
    rectangles.forEach(r => {
        let matches = responseData.probabilities
        .filter(p => p.boundingBox.minX >= r.box[0]
                && p.boundingBox.minY >= r.box[1]
                && p.boundingBox.maxX <= r.box[2]
                && p.boundingBox.maxY <= r.box[3]
                && p.attributes.pageNumber == r.page)
        let builtHTML = ''
        if(matches) builtHTML += `<p style="color:${r.color}"> `
        matches.forEach(
            (res) => {
                builtHTML += res.label + ' '
            }
        )
        if(matches) builtHTML += `</p> <br>`
        if(builtHTML) text.innerHTML += builtHTML
    })
    
})
let jsonString = ''
form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let jsonResp = {
        name : form['format-name'].value,
        makeNew : form['make-new'].checked,
        objectName : form['object-name'].value,
        boxes : []
    }
    rectangles.forEach(
        r => {
            jsonResp.boxes.push({
                name : form[`${r.color}-name`].value,
                box : {
                    minX: r.box[0],
                    minY: r.box[1],
                    maxX: r.box[2],
                    maxY: r.box[3]
                },
                priority: parseInt(form[`${r.color}-priority`].value),
                targetFieldAPIName: form[`${r.color}-targetFieldName`].value,
                pageNumber : r.page
            })
        }
    )
    navigator.clipboard.writeText(JSON.stringify(jsonResp))
    document.getElementById("gen-json").textContent = "JSON Copied!"
    document.getElementById("gen-json").className = "slds-button slds-button_success"
})




scrap.addEventListener("click", function() {
    rectangles = [];
    coords = [];
    for(let i = 0; i < max; i++){
        context.undo();
        }
})

undo.addEventListener("click", function() {
    coords = [];
    redo_stack.push(rectangles.pop().box)
    context.undo()
    
})

redo.addEventListener("click", function() {
    rectangles.push(redo_stack.pop().box)
    context.redo()
    
})

next.addEventListener("click", function() {
    if(!document.getElementById(`sourceimg${$pageNo+1}`)) return;
    $pageNo++;
    $source = document.getElementById(`sourceimg${$pageNo}`).src
    topMap.src = $source
})

prev.addEventListener("click", function() {
    if(!document.getElementById(`sourceimg${$pageNo-1}`)) return;
    $pageNo--;
    $source = document.getElementById(`sourceimg${$pageNo}`).src
    topMap.src = $source
})