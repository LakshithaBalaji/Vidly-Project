const express = require('express');
const winston = require('winston');

const app = express(); // Define app here

require('./startup/logging')(); // Initialize logging after defining app
require('./startup/routes')(app); // Pass app to routes after it's defined
require('./startup/db')();
//
//require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
