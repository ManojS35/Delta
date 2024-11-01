const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/rolldice', (req, res) => {
    let diceVal = Math.ceil(Math.random() * 6);
    res.render('rolldice', {diceVal});
})

app.get('/ig/:username', (req, res) => {
    // let followers = ['manoj', 'abc', 'xyz'];
    let {username} = req.params;
    let instaData = require('./data.json');
    let data = instaData[username];
    // console.log(data);
    if(data) {
        res.render('instagram.ejs', {data});
    } else {
        res.render('error.ejs')
    }
});