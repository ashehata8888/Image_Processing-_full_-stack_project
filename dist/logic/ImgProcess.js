"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fse from 'fs-extra';
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const _DATA_1 = __importDefault(require("../utils/_DATA"));
const sharp_1 = __importDefault(require("sharp"));
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
function simpString(fileName, width, height) {
    // console.log(`this is my name : ${fileName} 
    // my father name is ${middel} and my grandBa name is ${fileName}`)
    const imgLocation = path_1.default.resolve('./') + `/imges/${fileName}.jpg`;
    const ResizedimgLoc = path_1.default.resolve('./') + `/imges/Resized_Images/${fileName}_${width}_${height}.jpg`;
    const existedImgArr = _DATA_1.default.includes(fileName);
    const exists = fs_1.default.existsSync(imgLocation);
    if (exists === false) {
        return ("this Image doesn't exist");
    }
    if (existedImgArr === false) {
        return ("this Image doesn't exist");
    }
    if (fileName === undefined) {
        return "Image name is required'";
    }
    if (fs_1.default.existsSync(ResizedimgLoc)) {
        console.log('Image Exists and was sent from Resized Images folder');
        return ResizedimgLoc;
    }
    else {
        (0, sharp_1.default)(imgLocation)
            .resize(parseInt(width), parseInt(height), {
            position: 'center'
        }).toFile(ResizedimgLoc);
    }
}
// .then(()=>{return ResizedimgLoc})
exports.default = simpString;
