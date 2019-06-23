const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const keys = require('./keys');
const User = require('./models/User');
const api = require('./routes/api')

//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true}).then(()=> console.log("Mongo DB Connected"));

app.use(bodyParser.json());
//by default its usuing root ROUTE, which is "/"

app.use('/', express.static("public"));  

app.use("/api", api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))