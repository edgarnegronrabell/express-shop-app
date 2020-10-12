const Product = require('../models/product')

exports.getAddProductPage = (req, res, next) => {
  res.render('add-product', {
		prods: products,
		pageTitle: 'Add Product',
		path: '/admin/add-product', 
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	})
}

exports.postProduct = (req, res, next) => {
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/', 
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	})
}