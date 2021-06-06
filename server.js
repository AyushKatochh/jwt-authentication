const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();

const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());


const posts = [
    {
        username: "Ayush",
        title: "Post 1"
    },
    {

            username: "Katoch",
            title: "Post 2"
        
    }
]

app.get("/posts", authenticateToken, (req, res) => {
     res.json(posts.filter(post => post.username === req.user.name));
});

// We have to crate and send jwt token via post request
app.post("/login", (req, res) => {
    //Authenticate User

    const username = request.body.username 

    const user = {name: username}

   const accessKey =  jwt.sign(user, process.env.SECRET_KEY); // Sign takes our payload which we want to initialize
   res.json({accessKey: accessKey})
   // The access key has user information inside of it 
})

//Introducing Middleware to verify correct username and token
function auhenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
   // Bearer TOKEN

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (err) return res.sendStatus(403) // 403 for not valid token
        req.user = user
        
        next(); // For exiting middleware
    })
}



app.listen(300);