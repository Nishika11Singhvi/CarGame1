class Form {
constructor(){
    this.input= createInput('name');
    this.button = createButton('PLAY');
    this.greeting=createElement('h3');
}
display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(600,100);

    
    this.input.position(600,250);
    
this.button.position(600,350);

this.button.mousePressed(()=>{

    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount = playerCount+1;
    player.index=playerCount;

player.update();
player.updateCount(playerCount);

this.greeting.html("Hello "+player.name);
this.greeting.position(600,250);

})




}


}