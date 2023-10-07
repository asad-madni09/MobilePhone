const mongoose = require("mongoose");

const brandDetails = require("./brands.schema");
/////////////////POST Brands///////////////////////
let createBrand = async function (req, res) {
  try {
    const data = req.body;
    data.slug = req.body.name;
    const addNames = await brandDetails.create(data);
    res
      .status(200)
      .json({ message: "Successfully Added Brand/Brands", data: addNames });
  } catch (error) {
    res.status(500).json({ message: "Failed to add Data " + error.message });
  }
};

/////////////////Get Brands///////////////////////

let getBrands = async function (req,res)
{
    const getAllBrands = await brandDetails.find()
    res.status(200).json({data:getAllBrands})
}
module.exports ={createBrand,getBrands}
