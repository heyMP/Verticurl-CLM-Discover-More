/**
 * TODO: Figure out how to make this work with injecting overrides into proxied responses.
*/

import proxy from 'koa-proxies';
import betterProxy from 'koa-better-http-proxy';

export default {
  port: 8000,
  open: true,
  nodeResolve: true,
  middleware: [
    // betterProxy('https://images.engage.redhat.com/Web/RedHat/{a039d1c5-9917-445e-8ee6-e56ec9243e13}_main.js', {
    //   proxyReqBodyDecorator: (bodyContent, ctx) => {
    //     return 'killswitch';
    //   }
    // }),
    proxy('/', {
      target: 'https://engage.redhat.com/discover-more',
      changeOrigin: true,
    }),
  ],
};
