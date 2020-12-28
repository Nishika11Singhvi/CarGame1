class gs
{
    constructor()
    {
        
    }
    getState(){
        var gameStateRef=database.ref('gamestate');
        gameStateRef.on("value",function readData(data) {
            gamestate=data.val();
        })
    }
    update(state){
        database.ref('/').update({gamestate: state});
    }
    async start(){
        if(gamestate==0){
        
        player = new Player();
        var playerCountRef=await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();
        }
        
        form= new Form();
        form.display();
        }
    }

    play()
    {
        form.hide();
        text("Game Start", 400, 50);
        Player.getPlayerInfo();
        if(allplayers!==undefined){
        var p=150;
        for(var plr in allplayers){
            text(allplayers[plr].name+": "+allplayers[plr].distance,350, p);
            p=p+50;
        }
        if(keyDown(UP_ARROW)){
            player.distance = player.distance+50;
            player.update();
        }


    }
    }
} 