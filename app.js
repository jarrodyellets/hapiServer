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

  await server.start();

  console.log('Server started listening on %s', server.info.uri);
}

start();
