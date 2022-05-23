const fs = require('fs');
const path = require('path');

const fileProductsPath = path.resolve(__dirname, '../data/productsData.json'); 
const productsJSON = fs.readFileSync(fileProductsPath, 'utf-8');

const products = JSON.parse(productsJSON);

const productsController = {
    detail: (req,res) => {
        res.render('productDetail');
    },
}


module.exports = productsController;