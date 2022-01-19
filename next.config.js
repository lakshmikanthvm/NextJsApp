const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' https://www.volvocars.com http://localhost:3000 'unsafe-eval' 'unsafe-inline'; img-src data: https://www.volvocars.com http://localhost:3000"
  }
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
};