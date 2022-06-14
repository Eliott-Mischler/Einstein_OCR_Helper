from ast import Bytes
import math
from re import sub
import pytesseract
from pdf2image import convert_from_path
from PIL import Image
from io import BytesIO
import base64

def predict(b64_image, crop_array):
    img_bytes = base64.b64decode(b64_image)
    img_file = BytesIO(img_bytes)
    img = Image.open(img_file)
    predictions = []
    for crop in crop_array:
        box = [min(crop[0], crop[2]), min(crop[1],crop[3]), max(crop[0], crop[2]), max(crop[1],crop[3])]
        sub_img = img.crop(box)
        predictions.append(pytesseract.image_to_string(sub_img))
    print(predictions)
    return predictions