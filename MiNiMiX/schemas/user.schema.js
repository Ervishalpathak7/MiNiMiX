import mongoose from "mongoose";


// schema for user
const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    }

})

// model using userSchema
const User = mongoose.model('User', userSchema);


export default User;