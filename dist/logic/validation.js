"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fse from 'fs-extra';
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const _DATA_1 = __importDefault(require("../utils/_DATA"));
// function simpString(fileName:string,width:string,height:string){
// console.log(`this is my name : ${fileName} 
// my father name is ${middel} and my grandBa name is ${fileName}`)
function validation(ImageName) {
    const imgLocation = path_1.default.resolve('./') + `/imges/${ImageName}.jpg`;
    const existedImgArr = _DATA_1.default.includes(ImageName);
    const exists = fs_1.default.existsSync(imgLocation);
    if (ImageName === undefined || ImageName === '') {
        return "Image name is required'";
    }
    if (exists === false) {
        return ("this Image doesn't exist");
    }
    if (existedImgArr === false) {
        return ("this Image doesn't exist");
    }
}
exports.default = validation;
