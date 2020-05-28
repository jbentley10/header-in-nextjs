// next.config.js
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
module.exports = withCSS(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) // Only enable PurgeCSS for client-side production builds
  })
)

// next.config.js