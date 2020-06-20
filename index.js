var express = require('express')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1022593',
  key: '95ec86c745791e6b1b5f',
  secret: '96c800ea3c091b91371d',
  cluster: 'us2',
  encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.post('/comment', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

pusher.trigger('my-channel', 'my-event', {
  'message': 'hello world'
});

app.listen(3000)
