const Product = require("../models/product");
const slugify = require('slugify');
const User = require("../models/user");



exports.create = async(req, res) => {
    try{
        
        req.body.slug = slugify(req.body.title);
        const newProduct = await new Product(req.body).save();
        
        res.json(newProduct);
    }catch(err){
        res.status(400).json({
            err: err.message,
        })
    }
    
}


exports.listAll = async(req, res) => {
    try{
        
        
        const Products = await Product.find({}).limit(parseInt(req.params.count)).populate('category').populate('subs').sort([['craetedAt', 'desc']]).exec()

        
        res.json(Products);
    }catch(err){
        res.status(400).json({
            err: err.message,
        })
    }
    
}


// exports.removes = async (req, res) => {
//     try{
//         console.log(req.params.slug)
//         const deleted = await Product.findOneAndRemove({slug: req.params.slug}).exec();
//         res.json(deleted);
//         console.log(deleted)
//     }catch(err){
//        console.log(err);
//        return res.status(400).send("Product delete failed");
//     }
// }


exports.removes = async (req, res) => {
    try {
        console.log(req.params.slug)
      const deleted = await Product.findOneAndRemove({
        slug: req.params.slug,
      },{
        useFindAndModify: false
      }).exec();
      res.json(deleted);
      console.log(deleted)
    } catch (err) {
      console.log(err);
      return res.staus(400).send("Product delete failed");
    }
  };


  // exports.list = async (req, res) => {
  //   try{
  //     // created at 
  //     const {sort, order, limit} = req.body;
  //     const product = await Product.find({}).populate("category").populate('subs').sort([[sort, order]]).limit(limit).exec();
  //     res.json(product);
  //   }catch{
  //     console.log(err);
  //   }
  // }


  // without pagination
  exports.list = async (req, res) => {
    try{
      // created at 
      const {sort, order, page} = req.body;

      const currentPage = page || 1;

      const perpage = 3;


      const product = await Product.find({}).
      skip((currentPage-1)*perpage).populate("category").populate('subs').sort([[sort, order]]).limit(perpage).exec();
      res.json(product);
    }catch{
      console.log(err);
    }
  }

  exports.productcount = async(req, res) => {
    let total = await Product.find({}).estimatedDocumentCount().exec()
    res.json(total);
  }

  exports.reads = async(req, res) => {
    console.log(req.params.slug);
    let singleproduct = await Product.findOne({slug: req.params.slug}).populate("category").populate("subs").exec()
    res.json(singleproduct);
  }


  // exports.productStar = async(res, req) => {
  //   const product = await Product.findById(req.params.productId).exec();
  //   const user = await User.findOne({email: req.user.email}).exec();

  //   const {star} = req.body;

  //   let existingratingObject = product.rating.find((ele) => (
  //     ele.postedBy == user._id
  //   ));

  //   // if user left rating yet, push it 

  //     if(existingratingObject === undefined){
  //         let ratingAdded = await Product.findByIdAndUpdate(product._id, {
  //           $push: {

  //             ratings : {
  //               star:star,
  //               postedBy: user._id,
  //             }
  //           }
  //         }, {new: true}
  //         ).exec();
  //         console.log(ratingAdded)
  //     }else{
  //       // if user found
  //       const ratingUpdated = await Product.updateOne(
  //         {
  //           ratings: {
  //             $elemMatch: 
  //           }
  //         }
  //       )
  //     }





  // };


  exports.listRelated = async(req, res) => {
    const product = await Product.findById(req.params.productId).exec();
    

    const related = await Product.find({
      _id: {
        $ne: product._id
      },
      category: product.category,
    }).limit(3).populate("category").populate("subs").exec();

    res.json(related);
    
  }