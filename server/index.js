// Dependencies ====>
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Running the Server 
app.listen(3002 , ()=> {
    console.log('Server is running on port 3002')
})

// Creating Database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'plantDb',
});


//Creating a route to the server to register a User
app.post('/register', (req,res) => {
    // Getting a variable from the User
    const sentEmail= req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // Insert User Details to Database Table 'User'
    const SQL = 'INSERT INTO users (email,username,password) VALUES (?,?,?)';
    //Values
    const Values = [sentEmail,sentUserName,sentPassword];

    //Query to execute the sql statement stated above 
    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the user.' });
        } else {
            console.log("User Inserted Successfully");
            res.json({ message: 'User added!' }); // Sending a JSON response
        }
    });
});

app.post('/login', (req,res) => {
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    // Insert User Details to Database Table 'User'
    const SQL = 'SELECT * FROM users WHERE username=? && password=?';
    //Values
    const Values = [sentLoginUserName, sentLoginPassword];

    //Query to execute the sql statement stated above 
    db.query(SQL, Values, (err, results) => {
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
            console.log("Successfull Entry");
        }else{
            res.send({message:'Credentials dont match'})
            console.log("Credentials failed");
        }
        console.log(results)
    });

})
