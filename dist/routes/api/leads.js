"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const _DATA_1 = __importDefault(require("../../utils/_DATA"));
const fs_1 = require("fs");
const imges_routes = (0, express_1.Router)();
imges_routes.get('/', (req, res) => {
    const name = req.query.name;
    const imgLocation = path_1.default.resolve('./') + `/imges/${name}.jpg`;
    const lead = _DATA_1.default.includes(name);
    // checking if the image exist 
    if (name === undefined) {
        return res.send('Image name is required');
    }
    if (lead === undefined) {
        return res.send('this Image doesn\'t exist');
    }
    if ((0, fs_1.existsSync)(imgLocation) === false) {
        res.send('this image not found');
    }
    res.sendFile(imgLocation);
});
exports.default = imges_routes;
