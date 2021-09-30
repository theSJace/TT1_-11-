import express from "express"
import mongoose from "mongoose"
import Cors from "cors"
import Product from "./products.js"
import User from "./users.js"

//App config
const app = express();
const port = process.env.PORT || 8001

const connection_url ="mongodb+srv://admin:1234@cluster0.srur7.mongodb.net/shopping?retryWrites=true&w=majority"

//Middleware
app.use(express.json())
app.use(Cors())

//DB configs
mongoose.connect(connection_url)

//API endpoint
app.get('/', (req, res)=> res.status(200).send("Hello all"));

app.post('/products', (req, res)=> {
    const dbProduct = req.body;
    Product.create(dbProduct, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/products', (req, res)=> {
    Product.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

// edit this user to add auth

app.post('/users', (req, res)=> {
    const dbUser = req.body;
    User.create(dbUser, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/users', (req, res)=> {
    User.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, ()=> console.log("listening on localhost: " + port))