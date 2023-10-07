const mongoose = require("mongoose");
const modelDetails = require("./models.schema");


const createModel = async function (req, res) {
  try {
    const data = req.body;
    const addModels = await modelDetails.create(data);
    res.status(200).json({
      message: "Successfully Added Models",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add phone's models " + error.message });
  }
};




let getModelsByBrandId = async function(req,res)
{

    const searchById = req.params._id
    
    const getModelById = await modelDetails.find({brandId:searchById}).populate('brandId')
    res.status(200).json({data:getModelById})
}

module.exports={createModel,getModelsByBrandId}