const Product = require("../models/product");
const role_id = 2;
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Home Page",
        path: "/",
        role_id: role_id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
