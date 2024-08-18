import connectDb from '../database/db.connection.js';
import tryCatch from '../helper/tryCatch.js';
import User from '../schemas/user.schema.js';
import jwt from 'jsonwebtoken';

async function createUser(req, res) {




    // connecting to Db
    tryCatch(connectDb)


    const mail = await User.findOne({ email: req.body.email })

     if (mail) return res.status(400).send('Email already exists')



    // creating user
    const user = new User({
        name: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    })

    // generating token
    const token = jwt.sign({ _id: user._id , email : user.email }, process.env.JWT_SECRET)


    // saving user
    await user.save()
        .then((data) => res.cookie("uuid",  token).status(302).redirect('/'))
        .catch((err) => res.send('User Saving Issue'))

}

export default createUser;