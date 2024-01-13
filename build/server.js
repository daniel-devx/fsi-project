"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
const returnPath = (url) => {
    return path_1.default.join(__dirname, `/public/pages/${url}.html`);
};
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app
    .get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/public/pages/index.html"));
})
    .get("/gathering", (req, res) => {
    res.sendFile(returnPath(req.url));
})
    .get("/profile", (req, res) => {
    res.sendFile(returnPath(req.url));
})
    .get("/login", (req, res) => {
    res.sendFile(returnPath(req.url));
})
    .get("/register", (req, res) => {
    res.sendFile(returnPath(req.url));
})
    .get("/investors", (req, res) => {
    res.sendFile(returnPath(req.url));
})
    .get("/transfer", (req, res) => {
    res.sendFile(returnPath("transfer"));
});
app.listen(port, () => {
    console.log(`Started server at http://localhost:${port}`);
});
