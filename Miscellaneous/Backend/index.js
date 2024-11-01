const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/register', (req, res) => {
    let {user, password} = req.query;
    console.log(req.query);
    res.send(`accepted GET request. Welcome ${user}`);
})

app.post('/register', (req, res) => {
    let {user, password} = req.body;
    console.log(req.body);
    res.send(`accepted POST request. Welcome ${user}`);
})
app.listen(port, (req, res) => {
    console.log(`app is listening on port ${port}`);
})
