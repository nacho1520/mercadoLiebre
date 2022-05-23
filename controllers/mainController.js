const fs = require('fs');
const path = require('path');

const fileProductsPath = path.resolve(__dirname, '../data/productsData.json'); 
const productsJSON = fs.readFileSync(fileProductsPath, 'utf-8');

const products = JSON.parse(productsJSON);


const mainController = {
    home: (req,res) => {
        res.render('index', {products});
    },
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    },
    search: (req,res) => {
        let searched = req.query.query;
        
        let searchedProducts = []; 

        products.forEach(product => {
            if(product.description.includes(searched)){
                searchedProducts.push(product);
            }
        });

        console.log(searched);

        res.render('products', {products: searchedProducts});
    }
};

module.exports = mainController;