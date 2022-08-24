// import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import imageArr from '../utils/_DATA';
import sharp from 'sharp';



// function ImgExist(fileName:string,width:string,height:string)  {
// const imgLocation = path.resolve('./')+ `imges/${fileName}.jpg` as string
// const ResizedimgLoc =
// path.resolve('./') + `/imges/Resized_Images/${fileName}_${width}_${height}.jpg`;
// const existedImgArr = imageArr.includes(fileName);
// const exists =  fs.existsSync(imgLocation)

//  try{
//  if(exists===false){

// return ("this Image doesn't exist")  ;
//  }
//  if(existedImgArr===false){
//     return ("this Image doesn't exist");
//  }
//  if(fileName===undefined){
//     return "Image name is required'"
//  }

//   if (fs.existsSync(ResizedimgLoc)){
//     console.log('Image Exists and was sent from Resized Images folder');
//     console.log(ResizedimgLoc);
//      return ResizedimgLoc;
//   }else{
//     sharp(imgLocation)
//       .resize(parseInt(width), parseInt(height), {
//         position: 'center'
//       })
//       .toFile(imgLocation)
//       .then(() => {
//         console.log(imgLocation);
//       });

// }
//  }catch(e){
//     console.log(e) 
//  }

//    }

function simpString(fileName:string,width:string,height:string){
    // console.log(`this is my name : ${fileName} 
    // my father name is ${middel} and my grandBa name is ${fileName}`)

const imgLocation = path.resolve('./')+ `/imges/${fileName}.jpg` as string
const ResizedimgLoc =
path.resolve('./') + `/imges/Resized_Images/${fileName}_${width}_${height}.jpg`;
const existedImgArr = imageArr.includes(fileName);
const exists =  fs.existsSync(imgLocation)




 if(exists===false){
 return ("this Image doesn't exist")  ;
 }

 if(existedImgArr===false){
    return ("this Image doesn't exist");
 }

 if(fileName===undefined){
    return "Image name is required'"
 }

  if (fs.existsSync(ResizedimgLoc)){
    console.log('Image Exists and was sent from Resized Images folder');
     return ResizedimgLoc;
  }else{
    sharp(imgLocation)
      .resize(parseInt(width), parseInt(height), {
        position: 'center'
      }).toFile(ResizedimgLoc)
    }
   
}
// .then(()=>{return ResizedimgLoc})
 

   export default simpString;











