const express = require('express')
const app = express()
const port = 8080
const morgan = require('morgan')


// bring in routes
const {getPost}  = require('./routes/post')

// Middleware
const myOwnMiddleware= (req, res, next) =>{
    console.log("Middleware Applied !!!");
    next();

}

app.use(morgan("dev"));
app.use(myOwnMiddleware);


app.get('/', getPost);

app.listen(port, () => {
  console.log(`Server Connected at http://localhost:${port}`)

})
