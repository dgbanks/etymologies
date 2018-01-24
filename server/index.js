const express = require('express'); // node does not have support for ES6
const app = express(); 
// inside a singe node.js project, there can be many express applications running
// calling express like a function creates a new app

app.get('/', (request, response) => {
  // watch for incoming requests (get, post, put, delete, patch) trying to access '/'
  response.send({hi: 'there' });
});

app.listen(5000); // tells node which port to listen to 

