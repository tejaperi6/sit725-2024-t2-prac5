const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static('public'));
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

require('./database')();
require('./Routers/routes')(app);

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
