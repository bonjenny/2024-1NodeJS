// ./02http/server-5-routing.js
// 라우팅

const http = require("http");
const server = http.createServer((req, res) => {
  const { method } = req;

  // 메소드가 GET이냐 POST냐
  // &&: 논리곱
  // ===: 데이터 형식까지 동일한지
  if (method === "GET") {
  }
});
