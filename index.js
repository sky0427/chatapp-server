const { createServer } = require('http');
const app = require('./app');
const { Server } = require('socket.io');
require('dotenv').config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

require('./Utils/io')(io);

httpServer.listen(process.env.PORT, () => {
	console.log('server is listening on port', process.env.PORT);
});
