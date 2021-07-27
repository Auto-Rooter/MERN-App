const express = require('express');
const app = express();
require('dotenv/config');
const api = process.env.API_URI

// Middleware
app.use(express.json());

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: '1',
        name: 'some thing',
        image: 'some_url'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const product = req.body;
    res.send(product);
});

app.listen(3000, ()=>{
    console.log('[*] Server is running on http://localhost:3000');
})