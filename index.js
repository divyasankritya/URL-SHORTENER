const express = require('express');
const { coonectToMongoDB } = require('./connect');
const URL = require("./models/url");
const urlRoutes = require('./routes/url'); 

//Application Create
const app = express();
const PORT = 8001;

coonectToMongoDB("mongodb://localhost:27017/url-shortener")
.then( () => { console.log("MONGO DB CONNECTED!!" ) } );


app.use(express.json());

app.use('/url', urlRoutes);
// app.get('/:shortId', async(req, res) => {
//     const shortId = req.params.shortId;
//     const entry = await URL.findOneAndUpdate({
//         shortId
//     }, {
//         $push: {
//             visitHistory: {
//                 timestamp: Date.now(),
//             },
//         }
//     });
//     res.redirect(entry.redirectURL);
// })

app.listen(PORT, () => {
    console.log(`SERVER STARTED! ${PORT}`);
})
