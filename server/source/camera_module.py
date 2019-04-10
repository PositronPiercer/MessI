import cv2
import numpy as np 
import time
from sender import send_image

def do_your_fucking_job():
	cap = cv2.VideoCapture(0)
	while(True):
		print('Capturing send_image')
		ret, frame = cap.read()
		#save the frame
		cv2.imwrite("../data/crowd.jpg",frame)
		print('image saved')
		send_image('http://localhost:3000/image')
		print('Image Sent')
		time.sleep(20)
		if cv2.waitKey(1) & 0xFF == ord('q'):
			break

	cap.release()
	cv2.destroyAllWindows()


if __name__=="__main__":
	do_your_fucking_job()