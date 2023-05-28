const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

// **** Create Category ****
exports.createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }

    const existingCategory = await categoryModel.findOne({ name });

    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }

    const category = await categoryModel({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "New Category Created Successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

// **** Update category ****
exports.updateCategoryController = async (req, res) =>{
    try {
        const {name} = req.body;
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)}, {name:true});
        res.status(200).send({
            success: true,
            message: "Category Updated successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while Updating Category",
        });
    }
}

// Get All Category
exports.categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All Category List",
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all Categories",
        });
    }
}

// Single Category
exports.singlecategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({slug: req.params.slug});
        res.status(200).send({
            success: true,
            message: "Get Single Category Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting Single Category",
            error,
        });
        
    }
}

// Delete Category
exports.DeleteCategoryController = async (req, res) => {
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting category",
            error,
        });
    }
};