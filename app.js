const Hapi = require('hapi');

const server = new Hapi.Server({
  port: 8000,
  host: 'localhost'
});

server.start((err) => {
  if(err){
    throw err;
  }
})

server.events.on('start', () => {
  console.log(`Server started at: ${server.info.uri}`);
});