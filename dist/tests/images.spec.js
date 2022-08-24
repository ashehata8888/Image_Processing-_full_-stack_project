"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const images_1 = __importDefault(require("../routes/api/images"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const name = 'Imagesample';
const imgLocation = path_1.default.resolve('./') + `/imges/${name}.jpg`;
const request = (0, supertest_1.default)(images_1.default);
describe('Test the Images endpoint', () => {
    it('get the (/) endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
    it('it test if there is no image name enter corectlly will return warning message', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        if ((0, fs_1.existsSync)(imgLocation) === false) {
            expect(response.body).toEqual("this Image doesn't exist");
        }
    }));
});
