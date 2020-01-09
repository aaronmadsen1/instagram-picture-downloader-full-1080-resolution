import urllib.request

# 1) Change FILENAME to whatever you want
# 2) Create an "images" directory inside your project directory
# 3) Paste copied formattedString list created by scrape4.js into array below

image_url_array = [


]

i = 0
j = 1
for item in image_url_array:
    url = image_url_array[i]
    file_name = f'FILENAME - {j}'
    file_path = 'images/'
    full_path = file_path + file_name + '.jpg'
    urllib.request.urlretrieve(url, full_path)
    i += 1
    j += 1
