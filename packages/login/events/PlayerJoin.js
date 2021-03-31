// Contains all the needed action when a player joins the server.

const FileHandler = require("../filemanager/FileHandler");

mp.events.add('playerJoin', (player) => {

    player.outputChatBox(`You need to login first! Use /login (username) (password)`);

   
});

mp.events.add('onPlayerJoin', (player, username, password) => {



    console.log(FileHandler.userDetails[username]); 
    console.log(username);
    console.log(password);

    if(FileHandler.userDetails[username] == undefined)
    {
      
        console.log(0); 
        player.call("loginResults", [0]); // 0 = login unsuccessful - passes back to client to handle the browser
    }
    else
    {

        console.log(FileHandler.userDetails[username].getPassword());
        console.log("^^");
        if(FileHandler.userDetails[username].getPassword().toString() == password.toString())  // check password
        {
            console.log("YES!"); 
            player.call("loginResults", [1]); // 1 = login successful - passes back to client to handle the browser

            return;
        }

        player.call("loginResults", [0]); // 0 = login unsuccessful - passes back to client to handle the browser - wrong password
      
    }


   
});
