from bs4 import BeautifulSoup
import requests

class_ = "title"
url = "https://www.russianfood.com/"
r = requests.get(url)

html = BeautifulSoup(r.text, "html.parser")
element = html.find(class_=class_)
if element is not None:
    t = element.text
    if t:
        print(t)
    else:
        print("False")
else:
    print("Element not found")

    