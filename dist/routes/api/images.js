"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ImgProcess_1 = __importDefault(require("../../logic/ImgProcess"));
const fs_1 = require("fs");
const validation_1 = __importDefault(require("../../logic/validation"));
const images_routes = (0, express_1.Router)();
images_routes.get('/', (req, res) => {
    const fileName = req.query.name;
    const width = req.query.width;
    const height = req.query.height;
    // simpString(fileName,width,height);
    const data = (0, ImgProcess_1.default)(fileName, width, height);
    if ((0, fs_1.existsSync)(data) === false) {
        console.log((0, fs_1.existsSync)(data));
        console.log('the image is not exisit till now and first loop started');
        for (let i = 0; i < 10; i++) {
            for (let x = 0; x < 5; x++) {
                console.log(`i value : ${i} x value ${x}`);
                const datax = (0, ImgProcess_1.default)(fileName, width, height);
                if (i === 9 && x === 4 && ((0, fs_1.existsSync)(datax)) === true) {
                    res.sendFile(datax);
                    console.log(`Image successfuly sent and status of the main function is : ${(0, fs_1.existsSync)(datax)}`);
                }
                if ((0, fs_1.existsSync)(datax) === false) {
                    res.send((0, validation_1.default)(fileName));
                }
            }
        }
    }
});
// const imgLocation = path.resolve('./') + `/imges/${name}.jpg`;
// const ResizedimgLoc =
//   path.resolve('./') + `/imges/Resized_Images/${name}_${width}_${height}.jpg`;
// const existedImg = imageArr.includes(name);
// checking if the image exist
// if (name === undefined) {
//   return res.send('Image name is required');
// }
// if (existedImg === false) {
//   return res.send("this Image doesn't exist");
// }
// if (existsSync(imgLocation) === false) {
//   return res.send("this Image doesn't exist");
// }
// if (existsSync(ResizedimgLoc)) {
//   console.log('Image Exists and was sent from Resized Images folder');
//   return res.sendFile(ResizedimgLoc);
// } else {
//   sharp(imgLocation)
//     .resize(parseInt(width), parseInt(height), {
//       position: 'center'
//     })
//     .toFile(ResizedimgLoc)
//     .then(() => {
//       return res.sendFile(ResizedimgLoc);
//     });
// }
exports.default = images_routes;
