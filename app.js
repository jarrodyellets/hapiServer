'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = new Hapi.Server({
  port: 8000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
});

const start = async () => {

  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      console.log(request.server.app.cache);
    }
  })

  server.route({
    method: 'GET',
    path: '/about',
    handler: {
      file: 'about.html'
    }
  })

  async function start() {

    try {
      await server.start();
    }
    catch (err) {
      console.log(err);
      process.exit(1);
    }
  }

  console.log('Server started listening on %s', server.info.uri);
}

start();
