const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
    mongoose.connect(mongoUrl, ()=>{
        console.log('Mongo Connection successfully');
    });
}

module.exports = connectToMongo;