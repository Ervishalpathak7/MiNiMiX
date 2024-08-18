import tryCatch from '../helper/tryCatch.js';
import connectDb from '../database/db.connection.js';
import User from '../schemas/user.schema.js';
import jwt from 'jsonwebtoken';



async function loginUser(req, res) {
    // db connection
    tryCatch(connectDb)

    
    // find user
    const user = await User.findOne({ email: req.body.email })


    // check if user exist
    if (!user) return res.send('Ivalid credential')

    // check if password is correct
    if (user.password === req.body.password) {
    const token = jwt.sign({ _id: user._id , email : user.email }, process.env.JWT_SECRET) 
    return res.cookie("uuid" , token).status(200).redirect('/') 

    
    }
    else res.send('Wrong password')

}

export default loginUser;