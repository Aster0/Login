mp.events.addCommand('hp', (player) => {
    player.health = 100;
    console.log("asad");
 
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});