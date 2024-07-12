const Product = require("../models/product");

exports.postAddUser = (req, res, next) => {
  const user = req.body;
  Product.create(user)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
