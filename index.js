const express = require('express');
const app = express();

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