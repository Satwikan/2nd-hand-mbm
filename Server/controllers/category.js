const Category = require("../models/category");
const Sub = require("../models/sub");
const slugify = require('slugify');
// const { ObjectId } = require("bson");
const Product = require("../models/product")
exports.create = async(req, res) => {
    try{
        const {name} = req.body;
        console.log(name);
        const category = await new Category({name, slug : slugify(name) }).save();
        res.json(category);
    }catch(err){
        res.status(400).send("Create category failed");
    }
    
}

exports.list = async(req, res) => {
    const up = await Category.find({}).sort({ createdAt: -1}).exec();
    res.json(up);
}
// exports.read = async(req, res) => {
//     let category = await Category.findOne({slug: req.params.slug}).exec()
//     // res.json(category);
//     const products = Product.find({category}).populate('category').exec();
//     res.json({
//         category,
//         products
//     })
// }

exports.read = async (req, res) => {
    let category = await Category.findOne({ slug: req.params.slug }).exec();
    // res.json(category);
    const products = await Product.find({ category }).populate("category").exec();
  
    res.json({
      category,
      products,
    });
  };

exports.update = async (req, res) => {
    const {name} = req.body;
    try{
        const updated = await Category.findOneAndUpdate({slug: req.params.slug}, {name, slug : slugify(name)},{new: true}
        )
        res.json(updated);
    }catch(err){
        res.status(400).send("update category failed");
    }
}
exports.remove = async(req, res) => {
    try{
        const deleted = await Category.findOneAndDelete({slug: req.params.slug});
        res.json(deleted);
    }catch(err){
        res.status(400).send("delete category failed");
    }
}

exports.getSubss = (req, res) => {
    Sub.find({ parent: req.params._id }).exec((err, subs) => {
      if (err) console.log(err);
      res.json(subs);
    });
  };
  

