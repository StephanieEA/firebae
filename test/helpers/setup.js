require('babel-register')({
  presets: ['react', 'es2015']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dylbekanie</title>
  </head>
  <body>
    <div id="application"></div>
    <script src="main.bundle.js"></script>
  </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;
