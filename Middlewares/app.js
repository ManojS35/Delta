const express = require('express');
const app = express();
const ExpressError = require('./ExpressError')

const port = 8080;

// app.use((req, res, next) => {
//     console.log('Time : ', Date.now());
//     next();
// });
// app.use((req, res, next) => {
//     console.log('2nd middleware');
//     res.send('Middleware finished!');
//     // next();
// });

// app.use((req, res, next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.responseTime);
//     next();
// });

// //404
// app.use((req, res) => {
//     res.status(404).send('Page not found!')
// });

//Authentication
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token == 'giveaccess') {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get('/api', checkToken, (req, res) => {
    res.send('data');
});


//Error handling
app.get('/err', (req, res) => {
    abcd = abcd;
});
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(err.status).send(err.message);
});



app.get('/', (req, res, next) => {
    res.send('Root');
});
app.get('/random', (req, res) => {
    res.send('Random Page');
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})