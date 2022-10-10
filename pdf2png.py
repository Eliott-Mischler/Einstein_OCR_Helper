import os
from pdf2image import convert_from_path
import numpy as np
import cv2
pages = convert_from_path(os.path.join('private', 'sample.pdf'))
cv2.imshow('im', np.array(pages[1]))
cv2.waitKey()


