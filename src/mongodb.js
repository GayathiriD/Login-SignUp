const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(() => {
    console.log("Error connecting to MongoDB!");
 });

 const LogInSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true   
    },
    password: {
        type: String,
        required: true
    }
 })

 const collection = new mongoose.model("LoginCollection", LogInSchema);

 module.exports = collection;