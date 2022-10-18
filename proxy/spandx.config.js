const fs = require('fs');
const path = require('path');
const { cwd } = require('process');

/**
 * @return {String} 
 */
function generateRhFooterTemplate() {
  let example = '';
  try {
    const readme = fs.readFileSync(path.join(cwd(), 'node_modules', '@rhds', 'elements', 'elements', 'rh-footer', 'README.md'), 'utf8');
    const pattern = /`html[.|\s|\S]*?(<rh-footer[.|\s|\S]*?<\/rh-footer>)/gm;
    example = pattern.exec(readme)[1];
  } catch(e) {
    console.error(e);
  }
  return `<template id="unified-footer-template">${example}</template>`;
}

/**
 * @param {import('node:http').ClientRequest} _req
 * @param {import('node:http').ServerResponse} res
 * @param {() => void} next
 */
async function injectLocalSources(_req, res, next) {
  try {
    const { write: origWrite } = res;

    res.write = function(chunk, ...rest) {
      if (res.getHeader('Content-Type').includes('text/html')) {
        if (chunk instanceof Buffer) {
          chunk = chunk.toString();
        }

        chunk = chunk
          .replace('</head>', `
<link href="./dist/bundle.css" rel="stylesheet">
<script type="module" src="./dist/bundle.js"></script>
<script type="module" src="./proxy/entrypoint.js"></script></head>
`)
          .replace('</body>', `${generateRhFooterTemplate()}</body>`)
          .replace('_main.js', '')

        // res.setHeader('Content-Length', chunk.length);
      }
      origWrite.apply(this, [chunk, ...rest]);
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    next();
  }
}

module.exports = {
  host: {
    local: 'localhost',
  },
  port: 'auto',
  open: !true,
  startPath: '/',
  verbose: false,
  routes: {
    '/proxy/entrypoint.js': '../proxy/entrypoint.js',
    '/dist/bundle.css': '../dist/bundle.css',
    '/dist/bundle.js': '../dist/bundle.js',
    '/': {
      host: 'https://engage.redhat.com/discover-more'
    },
  },
  bs: {
    proxy: {
      // target: 'https://engage.redhat.com/discover-more',
      middleware: [
        injectLocalSources,
      ],
    },
  },
};

