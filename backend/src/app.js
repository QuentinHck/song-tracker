"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combine'));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} Your user was registered`,
    });
});
app.listen(process.env.PORT || 5000);
