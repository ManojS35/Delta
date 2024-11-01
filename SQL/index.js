const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'delta_app',
	password: '101835',
});

// let q = "Insert into user(id, username, email, password) values (?,?,?,?)";
// let user = ['123d', 'abcd', 'abc@d', '123d'];    // user is enough in argument

// let q = "Insert into user(id, username, email, password) values ?";
// let users = [['123b', 'abcb', 'abc@b', '123b']
//               ['123c', 'abcc', 'abc@c', '123c']];


let getUser = () => {
	return [
		faker.string.uuid(),
		faker.internet.userName(),
		faker.internet.email(),
		faker.internet.password()
	];
}

// let q = "Insert into user(id, username, email, password) values ?";
let data = [];
// for (let i = 0; i < 100; i++) {
// 	data.push(getUser());
// }

app.get("/", (req , res) => {
	let q = "SELECT count(*) from user";
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			// console.log(result[0]["count(*)"]);
			let n = result[0]["count(*)"];
			res.render("home.ejs", {n});
		});
	} catch (err) {
		console.log(err);
		res.send("Some error occured");
	}
});

app.get("/user", (req , res) => {
	let q = "SELECT * from user";
	try {
		connection.query(q, (err, users) => {
			if (err) throw err;
			res.render("show.ejs", {users});
		});
	} catch (err) {
		console.log(err);
		res.send("Some error occured");
	}
});

app.get("/user/:id/edit", (req, res) => {
	let {id} = req.params;
	let q = `SELECT * from user where id='${ id }'`;
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			// console.log(result[0].id);
			let user = result[0];
			res.render("edit.ejs", {user});
		});
	} catch (err) {
		console.log(err);
		res.send("Some error occured");
	}
	// res.render("edit.ejs");
});

app.patch("/user/:id", (req, res) => {
	let {id} = req.params;
	// console.log(req.body);
	let {password : formPass, username : newUsername} = req.body;
	let q = `SELECT * from user where id='${ id }'`;
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let user = result[0];
			if(user.password != formPass) {
				res.send("Wrong Password!");
			} else {
				let q2 = `UPDATE user SET username = '${newUsername}' where id = '${id}'`;
				connection.query(q2, (err, result) => {
					if(err) throw err;
					res.redirect('/user')
				})
			}
			// res.send(user);
		});
	} catch (err) {
		console.log(err);
		res.send("Some error occured");
	}
});

app.listen(port, (req, res) => {
	console.log(`Server is listening on port ${port}`);
});


// try {
// 	connection.query(q, [data], (err, results) => {
// 		if (err) throw err;
// 		console.log(results);
// 		// console.log(results.length);
// 	});
// } catch (err) {
// 	console.log(err);
// }
// connection.end();

// let createRandomUser = () => {
	//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// console.log(createRandomqUser());