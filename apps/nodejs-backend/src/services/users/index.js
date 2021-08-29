const usersData = require("../../data/users");

const getUsers = () => {
    let result = [];

    //get from database

    usersData.map(user => {
        // if(name)
        //     if(!user.name.indexOf(name))
        //         return;
        // if(id)
        //     if(!user.id == id)
        //         return;
        
        // if(age)
        //     if(!user.age == age)
        //         return;

        result.push(user);
    });

    return result;
}

module.exports = {
    getUsers
}