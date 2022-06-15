import os
from pdf2image import convert_from_path


for i, filename in enumerate(os.listdir('private')):
    filepath = os.path.join('private', filename)
    pages = convert_from_path(filepath, poppler_path=r'C:\Users\eliott.mischler\Documents\poppler-22.04.0\Library\bin')
    for j, page in enumerate(pages):
        page.save(os.path.join('converted', f'pdf{i+1}_page{j+1}.png'), 'PNG')

    
    

