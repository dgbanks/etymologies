const express = require('express'); // node does not have support for ES6
const app = express();
// inside a singe node.js project, there can be many express applications running
// calling express like a function creates a new app

app.get('/', (request, response) => {
  // watch for incoming requests (get, post, put, delete, patch) trying to access '/'
  response.send({hi: 'there' });
});

const PORT = process.env.PORT || 5000;
// heroku can inject environment variables set in the node runtime
// find the port in the underying environment

app.listen(PORT); // tells node which port to listen to
// heroku will tell us what port our app will use, so we must listen to the right one
// specify the node version we are using
