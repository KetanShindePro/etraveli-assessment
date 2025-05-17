const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // This is the prefix your client-side fetches will use.
    // Any request from your React app to /api/... will be proxied.
    createProxyMiddleware({
      target: "https://swapi.dev", // The ACTUAL backend API base URL
      changeOrigin: true, // Recommended, sets the Host header to the target's origin
      secure: false, // IMPORTANT: This allows the proxy to connect to backends with invalid SSL certs.
      // ONLY FOR DEVELOPMENT AND TRUSTED BACKENDS!
      pathRewrite: {
        "^/api": "", // Optional: Rewrites the path.
        // e.g., a request to /api/users becomes /users when forwarded to the target.
        // If your backend API already expects /api/users, you might not need pathRewrite,
        // or you'd adjust it accordingly (or your target would be https://your-api.com/api).
      },
      // Optional: Log errors from the proxy
      onError: (err, req, res) => {
        console.error("Proxy Error:", err);
        // You can also send a custom response to the client if needed
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end(
          "Something went wrong with the proxy. Check the dev server console."
        );
      },
      // Optional: Log proxied requests
      onProxyReq: (proxyReq, req, res) => {
        console.log(
          `[Proxy] Request: ${req.method} ${req.url} -> ${proxyReq.getHeader(
            "host"
          )}${proxyReq.path}`
        );
      },
    })
  );

  // You can add more proxies here for different base paths or targets
  // app.use(
  //   '/another-api',
  //   createProxyMiddleware({ /* ... other config ... */ })
  // );
};
