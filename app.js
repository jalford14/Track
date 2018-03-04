const express = require('express');
const app = express();

var path = require('path')

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'))
app.use('/static', express.static(__dirname + 'public'));

app.listen(3000, () => console.log('Example'));

app.get('/', function (req, res) {
    res.render('index');
})