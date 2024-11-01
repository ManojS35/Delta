const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override')

const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(() => {
    console.log("connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from : 'Jack',
//     to : 'Tom',
//     msg : 'Hi Tom!!',
//     createdAt : new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

//Index Route
app.get('/chats', async(req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render('index.ejs', {chats});
});

//New Route
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

//Create Route
app.post('/chats', (req, res) => {
    let {from, msg, to} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        createdAt : new Date()
    });
    newChat.save()
    .then((res) => {   //save is a asycnchronous process -> so make it async or if then is there means also okay
        console.log('new chat saved');
    }).catch((err) => {
        console.log(err);
    });
    res.redirect('/chats');
});

//Edit Route
app.get('/chats/:id/edit', async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render('edit.ejs', {chat})
});

//Update Route
app.put('/chats/:id', async (req, res) => {
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let upadtedChat = await Chat.findByIdAndUpdate(id, {msg : newMsg}, {runValidators : true, new : true});
    console.log(upadtedChat);
    res.redirect('/chats');
});

//Destroy Route
app.delete('/chats/:id', async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})

app.get("/", (req, res) => {
    res.send("root is working!");
});

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
});