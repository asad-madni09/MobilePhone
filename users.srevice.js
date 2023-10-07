const mongoose = require("mongoose");
const Users = require("./users.schema");
const Order = require("./order.Schema");

///////////ADD USER DETAILS///////////////////

const addUserDetails = async function (req, res) {
  let data = req.body;
  try {
    let addData = await Users.create(data);
    res.status(200).json({
      message: "User Added Successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `failed to add User due to ${error.message}` });
  }
};
/////////////GET ALL USERS////////////////////////

const getUsers = async function (req, res) {
  let getUserData = await Users.find();
  res.status(200).json({ data: getUserData });
}
//////////////GET DETAILS OF PRODUCT BY USERID AND ORDERID//////////

const getDetailsById = async function (req, res) {
  let userId = req.params.userId; 
  let orderId = req.params.orderId
  const userDetails = await Users.findById(userId);
  const orderDetails = await Order.findById(orderId);

  res.status(200).json({ data: userDetails, orderDetails });
};

module.exports = { addUserDetails, getUsers, getDetailsById };
