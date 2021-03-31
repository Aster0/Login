//init Commands file
require('./commands.js')
require('./commands/LoginCommand.js')
require('./events/PlayerJoin.js')
const FileHandler = require("./filemanager/FileHandler.js");

new FileHandler();