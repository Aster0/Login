var fm = require("./FileManager.js")
const User = require("./user/User.js")



class FileHandler 
{

    static userDetails = new Map(); // username as key and password as value.

    getUserDetails() 
    {
        return FileHandler.userDetails;
    }

    constructor() // constructor
    {
        var loginJson = fm.loadFile();

        

        for(var i in loginJson)
        {

            var username = i;
            var password = loginJson[i];

            var user = new User(username, password); // declare a new User object to save the user details.

            FileHandler.userDetails[username] = user; // save the user object into the map, identified as the username as the key.

            
        }

       
    }

}

module.exports = FileHandler;
