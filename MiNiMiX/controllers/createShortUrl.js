import { nanoid } from 'nanoid';
import tryCatch from '../helper/tryCatch.js';
import connectDb from '../database/db.connection.js';
import Url from '../schemas/url.schema.js';


async function createShortUrl(req, res) {

    // check if the url is valid
    if (!req.body.url) return res.status(400).send('Invalid Url')

    // db connection
    tryCatch(connectDb)

    
    // generate short url
    const shortId = nanoid(8);


   // creating a new url using the Url model
    const url = new Url({
        shortid : shortId,
        originalurl : req.body.url})


    // saving the url to the database
    url.save()
    .then(data => {
        res.redirect(`/?shortid=${data.shortid}`);
    }).catch(err => res.status(500).send('Error saving to the database'));
    
    }

export default createShortUrl;

