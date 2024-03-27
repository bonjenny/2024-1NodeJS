// ./02http/http-ex.js

// node의 뜻: 기본 모듈이란 뜻
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

// 서버 생성
// 시험문제는  require, http 이런 거 빈칸문제
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain"); // 글자 그대로 text로 출력
  res.setHeader("Content-Type", "text/html"); // 태그가 적용이 되어 출력
  res.write("<h1>Hello, </h1>");
  res.end("World!\n"); // 마지막 문장은 무조건 end로 끝나야 한다. res.end()로도 가능.
  console.log("요청 발생");
});

// 서버를 실행하는 listen 메소드
server.listen(port, hostname, (req, res) => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
