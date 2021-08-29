const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = 3000;
const bla = [];

routes.map(route => {
    console.log(route)
    app[route.method](route.path, route.handler);    
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})