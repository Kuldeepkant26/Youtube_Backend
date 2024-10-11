const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

//Routes
const videoRouter = require('./Routes/video');
const authRouter = require('./Routes/auth');

require('dotenv').config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



async function dbconnection() {
    await mongoose.connect('mongodb://127.0.0.1:27017/youtube');
}
dbconnection().then(() => {
    console.log("Connected to databse");
}).catch((err) => {
    console.log("Error in connecting to DB", err);
})


app.get('/', (req, res) => {
    res.send("Root Route");
});

app.use('/videos', videoRouter);
app.use('/auth', authRouter);


app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})