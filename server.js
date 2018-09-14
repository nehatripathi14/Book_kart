const express = require('express')
const app = express()
// app.get('/', (req, res) => res.send('data'))app.use(express.static("./"));
app.get("/", function(req, res) {
    //res.sendFile("./index.html"); //index.html file of your angularjs application
    res.sendFile(__dirname + '/index.html'); 
});
app.use("/", express.static(__dirname + '/public/js/') );
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/public/imgs", express.static(__dirname + '/public/imgs'));
app.use("/public/imgCard", express.static(__dirname + '/public/imgCard'));
app.use("/fonts", express.static(__dirname + '/public/fonts') );
app.use("/partials",express.static(__dirname + '/partials/') );
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.listen(3300, () => console.log('Example app listening on port 3300!'))