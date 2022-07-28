const express = require('express');
const connectToMongo = require('./db');
const multer = require('multer');
var forms = multer();
const app = express();
const port = 3001;

connectToMongo();

//Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(forms.array());
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/note', require('./routes/note'));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} and link http://localhost:${port}`);
})