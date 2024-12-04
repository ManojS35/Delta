const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationships');
}

const userSchema = new Schema({
    username : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : [{
        type : Schema.Types.ObjectId,      //datatype for object id
        ref : "User",                     //From where am i referencing it
    }]
});

let User = mongoose.model('User', userSchema);
let Post = mongoose.model('Post', postSchema);

const addUser = async () => {
    // let user1 = new User({
    //     username : "ram",
    //     email : 'ram@gmail.com',
    // });
    let user = await User.findOne({username : "ram"});

    let post1 = new Post({
        content : 'Champions League',
        likes : 549867,
    });

    post1.user = user;

    // let u = await user1.save();
    let p = await post1.save();

    // console.log(u);
    console.log(p);
}

addUser();