import tryCatch from "../helper/tryCatch.js";
import connectDb from "../database/db.connection.js";
import Url from "../schemas/url.schema.js";


const RedirectUrl = async (req, res) => {


    // Connect to the database 
     tryCatch(connectDb)


    // find the original url from the short url
    const entry = await Url.findOne(
                { shortid: req.params.shortId })


    // redirect to the original url
    if(!entry) {
        return  res.status(404).json({ message: 'Url not found' })}



    // redirect to the original url
    res.redirect(entry.originalurl)

    
}


export default RedirectUrl;