const health = require("./health");
const users = require("./users");

const routes = [];

const defaultHandler = (req, res) => {
    res.send(`
        <html>
        <head>
            <style>
                h1 {
                    font-family: sans-serif                    
                }
            </style>
        </head>
        <body>  
            <div style="text-align:center">
                <h1>
                    You're at the root, how it feels?
                </h1>
            </div>
        </body>
        </html>
    `);
};

routes.push({
    path: "/",
    method: "get",
    handler: defaultHandler
});

health.map(route => routes.push(route));
users.map(route => routes.push(route));

module.exports = routes;