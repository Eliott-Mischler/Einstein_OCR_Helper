from flask import Flask, render_template, request, jsonify
from flask_restful import Resource, Api, reqparse
from Invoice_OCR import predict

app = Flask(__name__)
api = Api(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/invoice', methods=['POST'])
def grab():
    content = request.json
    data = predict(content['image'], content['rectangles'])
    return jsonify({"data":data})



if __name__ == '__main__':
    app.run()


