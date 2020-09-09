var WebSocketServer = require('ws').Server;
var qs = require('qs');
wss = new WebSocketServer({ port: 9999 });
wss.on('connection', function (ws,req) {
    ws.on('message', function (message) {
		let id = qs.parse(req.url.split('?')[1]); 
        wss.clients.forEach(s => {
	      	s.send(JSON.stringify({id,"msg":message}));
	    });
    });
});


