const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const port = 8080;
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, '/public')))

main().then(() => {
    console.log('Connected to DB');
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

//NEW Route
app.get('/listings', async(req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', {allListings});
});

//NEW Route
app.get('/listings/new', (req, res) => {
    res.render("listings/new.ejs");
});

//SHOW Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    // console.log(listing);
    res.render("listings/show.ejs", { listing });
});

//Create Route
app.post('/listings', async (req, res) => {
    let listing = req.body;
    const newListing = new Listing(listing);
    // console.log(newListing);
    await newListing.save();
    res.redirect('/listings');
});

//Edit Route
app.get('/listings/:id/edit', async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render('listings/edit.ejs', {listing});
});

//Update Route
app.put('/listings/:id', async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});    //destruct and create new listing
    res.redirect(`/listings/${id}`);
});

app.delete('/listings/:id', async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
})


// app.get("/listings", async (req, res) => {
//     let sampleListing = new Listing({
//         title : 'My New Villa',
//         description : 'By the Beach',
//         price : 120000,
//         location : 'Calangute, Goa',
//         country : 'India',
//     });

//     await sampleListing.save();
//     res.send(sampleListing);
// });

app.get('/', (req, res) => {
    res.send('Root');
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});