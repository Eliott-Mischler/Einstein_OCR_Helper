
let button = document.getElementById("draw");
let scrap = document.getElementById("scrap");
let text = document.getElementById("text");
let c = document.createElement('canvas');
let canvas = document.getElementById('drawings');
let container = document.getElementById('canvas-holder')
let context;
let base64 = ""
let coords = [];
let rectangles = [];
let max = 16;
let inner = 0;
let shapes = []
var topMap = new Image()
window.onload = () => {
    
    topMap.src = "/static/img1.png"
    topMap.onload = () => {
        canvas.width = 0.3 * window.innerWidth;
        canvas.height = (topMap.naturalHeight / topMap.naturalWidth) * canvas.width 
        context = canvas.getContext('2d')
        context.drawImage(topMap, 0, 0, canvas.width, canvas.height)

        c.height = topMap.naturalHeight;
        c.width = topMap.naturalWidth;
        let ctx = c.getContext('2d');
        ctx.drawImage(topMap, 0, 0, c.width, c.height)
        base64 = c.toDataURL();
        base64 = base64.substring(base64.indexOf(',')+1)
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

    let imageWidth = topMap.naturalWidth;
    let imageHeight = topMap.naturalHeight;
    
    let pixelX = Math.round((xClick / clientWidth) * imageWidth);
    let pixelY = Math.round((yClick / clientHeight) * imageHeight); 

    if(rectangles.length < max) {

        if(coords.length < 1) {
            shapes.push(xClick, yClick)
            coords.push(pixelX, pixelY)
        } else {
            shapes.push(xClick, yClick)
            context.rect(Math.min(shapes[0], shapes[2]), Math.min(shapes[1], shapes[3]), Math.abs(shapes[0] - shapes[2]), Math.abs(shapes[1] - shapes[3]));
            context.stroke()
            coords.push(pixelX, pixelY)
            rectangles.push(coords)
            coords = []
            shapes = []
        }
        
    }
    
})

button.addEventListener("click", function() {
    receivedData = ""

    let dataToSend = {
        image : base64,
        rectangles : rectangles
    }

    console.log(dataToSend)
    dataToSend = JSON.stringify(dataToSend)

    let url = "http://127.0.0.1:5000/api/invoice"
    fetch(url, {
        credentials: "same-origin",
        mode: "same-origin",
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: dataToSend
    })
        .then(resp => {
            if (resp.status === 200) return resp.json()

            console.log(`Status : ${resp.status}`)
            return Promise.reject("bad status")
        })
        .then(jsonData => {
            console.log(jsonData)
            receivedData = jsonData;
            let str = "";
            receivedData['data'].forEach(element => {
                str += '\n' +  element;
            });
            text.innerText = str;
            
        })
        .catch(err => {
            if(err === "bad stats") return
            console.log(err)
        })
    
})

scrap.addEventListener("click", function() {
    rectangles = [];
    shapes = [];
    context.clearRect(0, 0, canvas.width, canvas.height);
})