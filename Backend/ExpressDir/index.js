const express = require('express');
const app = express();

let port = 3000;

// console.dir(app);
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request recieved");
//     res.send({name:'mango', color:'green'});
// });

app.get('/', (req, res) => {
    res.send('hello, I am root');
});
// app.get('/search', (req, res) => {
//     res.send('search');
// });
// app.get('/about', (req, res) => {
//     res.send('about');
// });
// app.get('*', (req, res) => {
//     res.send('Error 404 : Page does not exist');
// });

// app.get('/:username/:id', (req, res) => {
//     let username = req.params;
//     res.send(`This account belongs to @${username.username}`);
// });

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send('No Search query');
    }
    res.send(`Search Query : ${q}`);
});


