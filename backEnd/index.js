
const express = require("express");
const mysql =require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json()); 
app.use(cors())
app.use(express.json());


const db =mysql.createConnection({
    host: "localhost",  
    port:3306,
    user: "root",
    password: 'Priyar@4',
    database: "Fitness_Meal_Planner"
})

app.get("/",(request,response)=>{
    response.send(`server is working`);
})

app.post("/login",(req,res)=>{
    console.log("Request body:", req.body);
    const { email , password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const sqlQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sqlQuery, [email, password], (err, results) => {
        console.log(results);
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).json({ message: "Internal server error." });
        }

        if (results.length > 0) {
            // Email and password match
            return res.status(200).json({ message: "Login successful" });
        } else {
            // No match found
            return res.status(401).json({ message: "Invalid email or password." });
            
        }
    });

})

app.post("/signUp", (req, res) => {
    const { Username, Email, Password } = req.body; // Match the keys sent from frontend
    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: "All fields are required: Username, Email, Password." });
    }

    const sqlInsert = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sqlInsert, [Username, Email, Password], (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            res.status(500).send("Error saving data to the database");
        } else {
            console.log("Data inserted successfully:", result);
            res.status(200).send("Data saved successfully");
        }
    });
});

app.get("/signUp", (req, res) => {
    res.send("This route only supports POST requests.");
});

db.connect(function(err) {
    if (err) throw err;
});

app.listen(3005,()=>{
    console.log(`server started`);
})
