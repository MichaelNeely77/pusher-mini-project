var express = require('express')
var app = express()



var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1022593',
  key: '95ec86c745791e6b1b5f',
  secret: '96c800ea3c091b91371d',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  'message': 'hello world'
});

app.get('/', function(req,res) {
    res.send('Hello World2')
})

app.listen(3000)
