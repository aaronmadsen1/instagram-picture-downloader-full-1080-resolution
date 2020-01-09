import urllib.request

# Paste python formatted image URL array below
image_url_array = [


]


i = 0
j = 1
for item in image_url_array:
    url = image_url_array[i]
    file_name = f'NAME - {j}'

    # create an "images" directory inside project directory
    file_path = 'images/'
    full_path = file_path + file_name + '.jpg'
    urllib.request.urlretrieve(url, full_path)
    i += 1
    j += 1
