const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Todo App</title>
      <style>
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(to right, #74ebd5, #ACB6E5);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              color: #333;
          }
          .container {
              text-align: center;
              background: rgba(255, 255, 255, 0.85);
              padding: 40px;
              border-radius: 15px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          h1 {
              margin-bottom: 20px;
              color: #6a11cb;
          }
          p {
              font-size: 1.2em;
              margin-bottom: 30px;
          }
          button {
              padding: 10px 25px;
              font-size: 1em;
              color: white;
              background: #6a11cb;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: 0.3s;
          }
          button:hover {
              background: #2575fc;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Welcome to Todo App 🌟</h1>
          <p>Your productivity companion, right in your browser!</p>
          <button onclick="alert('Feature coming soon!')">Get Started</button>
      </div>
  </body>
  </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${8081}`);
});


