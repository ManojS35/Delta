const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationships');
}

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [{
        type : Schema.Types.ObjectId,      //datatype for object id
        ref : "Order",                     //From where am i referencing it
    }]
});

// customerSchema.pre('findOneAndDelete', async (data) => {
//     console.log(data);
// });
customerSchema.post('findOneAndDelete', async (customer) => {
    if(customer && customer.orders.length) {
        let data = await Order.deleteMany({_id : {$in : customer.orders}});
        console.log(data);
    }
});

const Order = mongoose.model('order', orderSchema);
const Customer = mongoose.model('customer', customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name : 'Ram',
//     });

//     let order1 = await Order.findOne({item : 'Chips'});
//     let order2 = await Order.findOne({item : 'Samosa'});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// } 

// addCustomer();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item : "Samosa", price : 12},
//         {item : "Chips", price : 10},
//         {item : "Pizza", price : 99},
//     ]);
//     console.log(res);
// }

// addOrders();

// const addCust = async () => {
//     let newCust = new Customer({
//         name : 'Karan Arjun'
//     });

//     let newOrder = new Order({
//         item : 'Burger',
//         price : 250,
//     });

//     newCust.orders.push(newOrder);

//     await newCust.save();
//     await newOrder.save();

//     console.log('added new customer');
// }

// addCust();

const delCust = async () => {
    let data = await Customer.findByIdAndDelete('673b0bed4d007fcb77cb0837');
    console.log(data);
}

delCust();