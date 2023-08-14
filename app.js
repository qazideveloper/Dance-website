const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
// mongoose 
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ContactDance');
    console.log("connected")
}
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    emailID: String,
    address: String,
    concern: String
});
const Contact = mongoose.model('Contact', contactSchema);
//   using body parser
app.use(bodyparser.json());


// mmEXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PmUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//m ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("item saved to database")
    }).catch(() => {
        res.status(400).send("item not save to database")
    })
});

//     const con = "This is the best content on the internet so far so use it wisely"
//     const params = { }
//     res.status(200).render('contact.pug', params);
// })

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
