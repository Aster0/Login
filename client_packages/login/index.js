let browser = mp.browsers.new("package://login/ui/login.html");
mp.gui.cursor.show(true, true);


mp.events.add('loginToServer', (username, password, error) => {
    
   
    if(!error)
        mp.events.callRemote('onPlayerJoin', username, password);
    else
        mp.gui.chat.push("You can't leave blanks!");

});


mp.events.add('loginResults', (value) => {
    

    var loginResults;

    if(value == 1) 
    {
        // successful
        loginResults = "Login Successfully!";
        browser.destroy();
        mp.players.local.freezePosition(false);
    }
    else
    {
        loginResults = "Login Credentials are wrong!"
        mp.events.call('updateBrowser', value); // update the error text 
    }

    mp.gui.chat.push(loginResults);
 
  

});