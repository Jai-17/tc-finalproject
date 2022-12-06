const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
require('dotenv').config();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(
    session({
        secret : 'mainhoondon',
        cookie : {
            maxAge : 60000 * 60 * 24
        },
        saveUninitialized : true,
        resave : false
    })
)

//db connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//routes
app.use('/auth', authRoute);
app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`);
})