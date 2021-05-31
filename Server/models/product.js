const mongooose = require('mongoose')

const {ObjectId} = mongooose.Schema;

const productSchema = new mongooose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxlength:32,
        text: true,
    },
    slug:{
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    description:{
        type: String,
        required: true,
        maxlength:200,
        text: true,
    },
    price:{
        type: Number,
        required: true,
        maxlength:32,
        trim: true,
    },
    category:{
        type: ObjectId,
        ref:"Category",
    },
    subs:[{
        type: ObjectId,
        ref:"Sub",
    }],
    quantity:{
        type:Number
    },
    sold:{
        type:Number,
        default: 0,
    },
    images: {
        type: Array
    },
    shipping:{
        type: String,
        enum: ['YES', "NO"],

    },
    color:{
        type: String,
        enum: ["Black", "Brown", "White", "Blue"],
        
    
    },
    brand:{
        type: String,
        enum: ["Apple", "sumsung", "microsoft", "ASUS"],

    },
    rating: [
        {
            star: Number,
            postedBy: {
                type: ObjectId, ref: "User"
            },
        }

    ]
},{
    timestamps: true
});


module.exports = mongooose.model("Product", productSchema);