def send_image(url):
	import requests
	t=requests.get(url)
	print(t)
	files = {'file': open('../data/crowd.jpg', 'rb')}
	r = requests.post(url, files = files)
	print(r)