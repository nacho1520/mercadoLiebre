//******** Require's ********
const path = require('path');
const express = require('express');

//******** express() ********
const app = express();

//******** Public path ********
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//******** Template Engine ********
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

//******** System routes ********
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
app.use('/', mainRouter);
app.use('/products', productsRouter);

//******** Port setting & Server listen ********
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server up & running on port "+port));



