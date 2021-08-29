const health = require("./health");
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

routes.push(health);

module.exports = routes;