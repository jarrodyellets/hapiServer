const Hapi = require('hapi');

const server = new Hapi.Server({
  port: 8000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return '<h1>Hello</h1>';
  }
})

server.start((err) => {
  if(err){
    throw err;
  }
})

server.events.on('start', () => {
  console.log(`Server started at: ${server.info.uri}`);
});