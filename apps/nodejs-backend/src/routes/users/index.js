const usersService = require("../../services/users");

const getUsersHandler = (req, res) => {    
    let data = usersService.getUsers();
    res.status(200).send(data)
};

module.exports = [
    {
        path: "/v1/users",
        method: "get",
        handler: getUsersHandler
    }
]