const server = require('./api/server');

const port = 3000;

server.listen(port, () => {
    console.log(`listening to server on http://localhost:${port}`);
});