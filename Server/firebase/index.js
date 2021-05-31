const  admin = require("firebase-admin");

var serviceAccount = require("../firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //database
});

module.exports = admin;