const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => {
    console.log("connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

const allChats = [
    {
        from : 'Jack',
        to : 'Tom',
        msg : 'Hi Tom!!',
        createdAt : new Date(), 
    },
    {
        from : 'Arun',
        to : 'Tom',
        msg : 'Hey, Arun here!!',
        createdAt : new Date(), 
    },
    {
        from : 'Kingslayer',
        to : 'Bran',
        msg : 'The things I do for love',
        createdAt : new Date(), 
    },
    {
        from : 'Ygritte',
        to : 'Jon',
        msg : 'You know nothing Jon Snow ):',
        createdAt : new Date(), 
    },
    {
        from : 'Yamal',
        to : 'Vinicius',
        msg : "I'm not in danger, I'm the danger",
        createdAt : new Date(), 
    },
];

Chat.insertMany(allChats);