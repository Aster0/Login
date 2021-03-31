// Helps to initialize the login_info.json so we can access the json file.
var fs = require('fs'); 

// Use fs.readFile() method to read the file



function loadFile()
{
    const fileData = fs.readFileSync('./packages/login/login_info.json', {encoding:'utf8', flag:'r'});
    // Read the login_info.json file synchronously so we can save it into our FileHandler class later.



    return JSON.parse(fileData);
}

module.exports = {loadFile};

