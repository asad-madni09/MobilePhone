

const mongoose = require("mongoose");
const Order = require("./order.Schema");

const addOrder = async function (req, res) {
  try {
    let data = req.body;
    let totalAmount = data.price * data.quantity;
    data.totalAmount = totalAmount;
    let addOrderDetail = await Order.create(data);
    res.status(200).json({ data: addOrderDetail });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while adding Order Details ${error.message}` });
  }
};

const getOrder = async function (req, res) {
  let getOrderHistory = await Order.find();
  res.status(200).json({ data: getOrderHistory });
};

module.exports = { addOrder, getOrder };
