const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
//by default its usuing root ROUTE, which is "/"
app.use('/', express.static("public"));  

app.get('/', (req, res) => res.send('Hello World!'))












app.listen(port, () => console.log(`Example app listening on port ${port}!`))