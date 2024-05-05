//1 require express

const express = require ("express");

//2 create instance
const app = express();

//5 require dotenv & configure

require("dotenv").config();




//3 create port
const PORT = process.env.PORT;

// 4 create server 
app.listen(PORT, err => {
    err 
    ? console.error[`failed to connect to the server ${err}`]
    : console.log(`server is running on port ${PORT}`);

});