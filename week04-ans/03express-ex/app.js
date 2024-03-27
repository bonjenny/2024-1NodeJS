// ./03express-ex/app.js

const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello, express");
})

app.listen(port, hostname, (req, res)=> {
    console.log(`${port}번 포트에서 실행중`)
})