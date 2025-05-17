// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "https://swapi.dev",
//       changeOrigin: true,
//       secure: false,
//       onError: (err, req, res) => {
//         console.error("Proxy Error:", err);
//         res.writeHead(500, {
//           "Content-Type": "text/plain",
//         });
//         res.end(
//           "Something went wrong with the proxy. Check the dev server console."
//         );
//       },
//       onProxyReq: (proxyReq, req, res) => {
//         console.log(
//           `[Proxy] Request: ${req.method} ${req.url} -> ${proxyReq.getHeader(
//             "host"
//           )}${proxyReq.path}`
//         );
//       },
//     })
//   );
// };
