const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://tayyabalizaheer:IYYtvWxAw4SPMbSl@inotebook.nq3ge1m.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoUrl, ()=>{
        console.log('Mongo Connection successfully');
    });
}

module.exports = connectToMongo;