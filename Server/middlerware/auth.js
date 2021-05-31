const admin = require('../firebase/index');
const User = require("../models/user");
exports.authCheck = async(req, res, next) => {
    // res.setHeader("Content-Type", "text/html");
 

   try{
        const firebasebase = await admin.auth().verifyIdToken(req.headers.authtoken);
        console.log(req.headers.authtoken);
        req.user = firebasebase;
   } catch(err){
       console.log(err);
       res.status(401).json({
           err: "invalid or expired token",
       });
   }
   next();
   
}


exports.adminCheck = async(req, res, next) => {
    // res.setHeader("Content-Type", "text/html");
    const {email} = req.user;
  console.log(email)
    const adminUser = await User.findOne({email}).exec();

    if(adminUser.role !== 'admin'){
        res.status(403).json({
            err: "Admin resource. Access denied",
        })
    }else{
        next();
    }

};