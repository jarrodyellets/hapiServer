'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
  port: 8000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
});

const init = async () => {

  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file('index.html');
    }
  })

  server.route({
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return h.file('about.html');
    }
  })

  try {
    await server.start()
    console.log('Server started listening on %s', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

init();