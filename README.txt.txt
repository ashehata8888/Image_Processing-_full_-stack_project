Project Title : Image Processing 


Project Description

Image processing project can retrieve an image by name and resize the image dimensions 
by entering the query parameter (width & height) in the URL of the project endpoint 
and also can cash the image after you retrieve it and can get it again 
from the cashing folder without reloading it again from scratch 


How to Install and Run the Project
1- you need to run the server to able to enter to the homeroute by writing this comend line 

npm run start:prod 

2- you need to open your browser and enter the localhost and the port number which showed in the console 

localhost:3000 

3- you will add the route of the images to able to enter the name of image for this list 
['encenadaport','fjord','icelandwaterfall','palmtunnel','santamonica']

localhost:3000/images

4- you requested to write the image name and the width and height of the image you need to resize

localhost:3000/images?name=palmtunnel&width=300&height=400

the image of the entered dimensions will show on the screen and copy of image will be store in the cashed folder named "Resized_Images" 
to be retrived from it if you called the same image with the width and height again 



validation 

if you didn't enter any name of an image the warning message will be shown on the screen as follows 

'Image name is required'

if you entered a wrong image name that isn't included in the above list the following warning message will be shown 

'this Image doesn\'t exist'



References

https://www.npmjs.com/package/express

https://www.npmjs.com/package/typescript

https://github.com/lovell/sharp

https://eslint.org/docs/latest/developer-guide/

https://prettier.io/docs/en/install.html

https://jasmine.github.io/setup/nodejs.html


for Testing please run command 

npm run test







