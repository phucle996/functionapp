// Import module 'http'
const http = require('http');

// Define hostname và port
const hostname = '127.0.0.1';
const port = 3000;

// Tạo một máy chủ HTTP đơn giản
const server = http.createServer((req, res) => {
  // Ghi header response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Gửi nội dung 'Hello World' khi có request
  res.end('Hello World\n');
});

// Lắng nghe trên cổng đã xác định
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

