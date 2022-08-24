"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });
app.use(index_1.default);
// app.use(supertest);
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.json({
        message: 'Express + TypeScript Running '
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
exports.default = app;
