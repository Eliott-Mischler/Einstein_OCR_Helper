# OCR_Helper
Simple Flask application aiming to assist users of Salesforce's Einstein OCR API, by letting them upload a PDF, to then draw rectangle areas on the different pages of the file, to build a Format for any similar format files which would require text extraction.

These areas will determine which text from the OCR API Response will be kept, along with letting the user preview the extracted text from each rectangle, while generating a form input for each element.

The form lets the user configure a CREATE or UPDATE statement, in a sense, you may choose a target object for the entire API call, and then choose whether to create a new one, along with which rectangle should go in which field.

You can then submit the form, which will paste a JSON String corresponding to your OCR filtering "Format". I have implemented this, but as of now I haven't been cleared to share this "confidential" code.

However, looking at the JSON, you can implement your own Apex deserialization, which you then put into custom objects, and adding a Flow to the Format object, you may perform OCR on any file of the given format.
