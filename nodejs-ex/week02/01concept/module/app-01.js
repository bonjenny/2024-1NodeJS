// ./module/app-01.js
// 불러오기는 require로 가능
const user = require('./user'); // user.js 를 import
const hello = require('./hello'); // hello.js 를 import

hello(user);
