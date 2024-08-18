import jwt from 'jsonwebtoken';

async function auth(req, res, next) {


    if (!req.cookies.uuid) return res.status(401).redirect('/login');
    if (req.cookies.uuid) {
        jwt.verify(req.cookies.uuid, '@#Minimix#@', (err, decoded) => {
            if (err) return res.status(401).redirect('/login');
            req.user = decoded;
        })
    }

    next();
}

export default auth;