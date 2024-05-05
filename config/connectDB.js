// 1 - require
const mongoose = require ("mongoose");

// 2 - connectDB

const connectDB =async {} => {
    try {
        // step 1 
        await mongoose.connect(process.env.DB_URI)
        //step2
        console.log("database is connected")
    } catch (error) {
        console.log("database is not connected",error);
    }
};
// 3 - exportmodule
module.exports = connectDB;
