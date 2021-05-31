const cloudinary = require("cloudinary");

//config

cloudinary.config({
    cloud_name : "dqike0rcd",
    api_key: "391738693948461",
    api_secret: "AQUWFEYGvd19b0EObj_6WFv5gO4"
});

exports.upload = async (req, res) => {
    let result = await cloudinary.uploader.upload(req.body.image, {
        public_id: `${Date.now()}`,
        resource_type: 'auto'
    });
    res.json({
        public_id: result.public_id,
        url: result.secure_url,
    })
}

exports.remove = (req, res) => {
    let image_id = req.body.public_id;
    cloudinary.uploader.destroy(image_id, (err, reusers) => {
        if(err) return res.json({success: false, err})
        res.send("ok");
    })
}

