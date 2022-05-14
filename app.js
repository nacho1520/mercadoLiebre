const path = require('path');
const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');

const publicPath = path.resolve(__dirname, './public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => console.log("Server up & running on port "+port));

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, './views'));

app.use('/', mainRouter);