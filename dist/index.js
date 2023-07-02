"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
const port = process.env.PORT || 8080;
app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
});
app.get("/", (_req, res) => {
    return res.send({
        name: "samuel",
        age: 27,
    });
});
app.get("/ping", (_req, res) => {
    return res.send({
        name: "john",
        age: 23,
    });
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map