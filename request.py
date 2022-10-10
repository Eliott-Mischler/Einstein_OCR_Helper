import pycurl
import base64
import json
from io import BytesIO


def einstein_call(token, filepath):
    buffer = BytesIO()
    b64_str = ""
    with open(filepath, "rb") as pdf_file:
        b64_str = base64.b64encode(pdf_file.read())
        send = [
            ("modelId", "OCRModel"),
            ("task", "text"),
            ("sampleBase64Content", b64_str)
        ]

        curl = pycurl.Curl()
        curl.setopt(pycurl.URL, 'https://api.einstein.ai/v2/vision/ocr')
        curl.setopt(pycurl.HTTPHEADER, [f'Authorization: Bearer {token}'])
        curl.setopt(pycurl.WRITEDATA, buffer)
        curl.setopt(pycurl.HTTPPOST, send)
        curl.perform()
        print(curl.getinfo(pycurl.RESPONSE_CODE))
        print()
        return buffer.getvalue().decode('utf-8')