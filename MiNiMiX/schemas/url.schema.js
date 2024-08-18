import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortid : {
        type : String ,
        required : true,
        unique : true
    },
    originalurl : {
        type : String,
        required : true
    }
})

const Url = mongoose.model("Url", urlSchema);

export default Url;
