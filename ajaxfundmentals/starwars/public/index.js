const express = require ('express');
const	app = express();
const http = require ('http').Server (app);

app. use(express.static(_dirname + 'public'))

app.get('/', function (req, res){
	res.sendFile(_dirname + '/index.html');
})

http:listen(3000, function(){
	console.log ('listening on 3000');
})