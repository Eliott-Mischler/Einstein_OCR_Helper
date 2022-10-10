from base64 import b64encode
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pdf2image
import PyPDF2
from flask_restful import Resource, Api, reqparse
from Invoice_OCR import predict
from pdf2image import convert_from_path
from werkzeug.utils import secure_filename
from request import einstein_call
from os import path, remove
from io import BytesIO

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/invoice', methods=['POST'])
def grab():
    content = request.json
    data = predict(content['image'], content['rectangles'])
    return jsonify({"data":data})

@app.route('/upload', methods = ['POST'])
def upload_file():
    token = request.form['api-key']
    file = request.files['file']
    filepath = path.join('uploads', secure_filename(file.filename))
    file.save(filepath)
    rd = PyPDF2.PdfReader(filepath)
    box = [int(rd.pages[0].mediabox.getWidth()),
           int(rd.pages[0].mediabox.getHeight())]
    images = pdf2image.convert_from_path(filepath)
    b64images = []
    for img in images:
        buffer = BytesIO()
        img.save(buffer, format="PNG")
        b64images.append(b64encode(buffer.getvalue()).decode('utf-8'))
    resp = einstein_call(token, filepath)
    remove(filepath)
    print(resp)
    return editor(b64images, resp, box)

@app.route('/editor', methods = ['GET'])
def editor(images, resp, box):
    return render_template('editor.html', images=images, resp = resp, box=box)


if __name__ == '__main__':
    app.run()


