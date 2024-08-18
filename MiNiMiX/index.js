import express, { urlencoded } from 'express'
import router from './routes/router.js'
import path from 'path'
import cookieParser from 'cookie-parser'
import env from 'dotenv'




env.config()
const app = express()


// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views' , path.resolve('./views'))



// middleware
app.use(urlencoded({ extended: false }))
app.use(cookieParser())


// routes
app.use('/', router )



// listen on port 3000
app.listen( process.env.PORT , () => { 
    console.log( `Server is running on port ${process.env.PORT}` )
})

