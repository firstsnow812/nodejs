'use strict';

const express = require('express');
const config = require('./config');
const app = express();
const api = require("./api");
const router = express.Router();

async function startServer() {
    app.listen(process.env.PORT, err => {
        if(err){ // 추가로 LOG 를 남겨야 됨
            console.log("error");
            process.exit(1); // 비정상 종료
            return ;
        }
        console.log("3000 port server on");
    });
}

// http://localhost:3000/status
app.get('/status', (req, res) => {
    res.status(200).send("ssHello");
});

// api의 test함수 실행
app.get("/test/", api.test);



startServer();