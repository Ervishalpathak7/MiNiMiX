import { Router } from 'express';
import createUser from '../controllers/createUser.js';
import createShortUrl from '../controllers/createShortUrl.js';
import RedirectUrl from '../controllers/redirecturl.js';
import loginUser from '../controllers/loginuser.js';
import auth from '../controllers/testing.js';

const router = Router();




// Shorten url route

router.get('/', auth ,  (req, res) => {

    if(req.query.shortid) res.render('urlgenerated' , {shortid : req.query.shortid})
    else return res.render('urlshortner')
    
})





router.post('/' ,createShortUrl)




//signup route
router.route('/signup')
    .get((req , res) => res.render('signup'))
    .post(createUser);


// Login route

router.route('/login')  
    .get((req , res) => res.render('login'))
    .post(loginUser)


// testing route
router.get('/test', (req , res) => res.render('urlgenerated' , {shortid : 12345}) )



// 



    // Redirect to original url route
router.get('/:shortId', RedirectUrl )
    

export default router;