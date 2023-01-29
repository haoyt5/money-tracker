"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
app.get('/', (_req, _res) => {
    _res.send('TypeScript With express server');
});
app.listen(port, () => {
    console.log(`[express] server run on http://localhost:${port}/`);
});
