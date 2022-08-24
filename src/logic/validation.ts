// import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import imageArr from '../utils/_DATA';


// function simpString(fileName:string,width:string,height:string){
    // console.log(`this is my name : ${fileName} 
    // my father name is ${middel} and my grandBa name is ${fileName}`)
function validation(ImageName:string){
const imgLocation = path.resolve('./')+ `/imges/${ImageName}.jpg` as string
const existedImgArr = imageArr.includes(ImageName);
const exists =  fs.existsSync(imgLocation)


 if(ImageName===undefined||ImageName===''){
    return "Image name is required'"
 }

 if(exists===false){
 return ("this Image doesn't exist")  ;
 }

 if(existedImgArr===false){
    return ("this Image doesn't exist");
 }

 }

 export default validation