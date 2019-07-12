
player1=new Car('player')
var counter=0;
var init=0
updatecar.push(player1);

var gameCreate=setInterval(creation,2000)
function creation(){
  car=new Car()
  updatecar.push(car);
}
var gameFrame=setInterval(setter,16.66)
function setter(){
  clearCanvas();

  updatecar.forEach((value,index)=>{
    value.moveCar(counter);
    value.drawCar();
    if (index!=0){
      if(value.y>=HEIGHT){ 
        updatecar.splice(index,1) 
        counter++;
        point.play();
      }
      value.carCollision(player1);
       
    }                                                

})  

  
  if(counter<=10){
      backgroundSpeed-=3;
  }
  else{
    backgroundSpeed-=7;
  }
}
function initialiser(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="black";
  ctx.drawImage(BACK,0,init,canvas.width,canvas.height);
  ctx.drawImage(BACK,0,init-500,canvas.width,canvas.height);
  button.style.display="none";
}

function clearCanvas(){
    ctx.fillStyle="black";
    ctx.drawImage(BACK,0,init,canvas.width,canvas.height);
    ctx.drawImage(BACK,0,init-500,canvas.width,canvas.height);
    if(init>=500){
      init=0;
    }
    init+=3;
    
    ctx.font = "25px Arial";
    ctx.fillText(`SCORE:   ${counter}`, 10, 50);
}
function gameOver(){
  clearInterval(gameFrame);
  clearInterval(gameCreate);
  highScore=JSON.parse(localStorage.getItem('highScores1')) || 0;
  if (counter>=highScore){
     localStorage.setItem('highScores1',JSON.stringify(counter));
     highScore=counter;
  }
drawGameOverScreen();
}
function drawGameOverScreen(){
 
  updatecar.splice(1);
  setTimeout(()=>{
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font = "50px Arial";
    ctx.fillStyle="Red";
    ctx.fillText(`GAMEOVER`,10, 100);
    ctx.font="40px Arial"
    ctx.fillStyle="white"
    ctx.fillText("Your Score",42,200);
    ctx.fillStyle="#fca048"
    ctx.fillText(counter,130,275);
    ctx.font="40px Arial"
    ctx.fillStyle="white"
    ctx.fillText("HighScore",42,350);
    ctx.fillStyle="#fca048"
    ctx.fillText(highScore,130,425);
    ctx.font="15px Arial";
    ctx.fillStyle="white";
    ctx.fillText("Press R to play again",70,460);
   
    counter=0;
  },1000);

}
 

  document.addEventListener('keydown',e=>{
    if(e.keyCode==82){
      initialiser();
      gameFrame=setInterval(setter,16.66);
      gameCreate=setInterval(creation,2500);
    }
  })


function keyPress(){
document.addEventListener('keydown',e=>{
   if(e.keyCode==37 && player1.position!=1){
     player1.position--;

      }
   if(e.keyCode==39 && player1.position!=3){
     player1.position++;
   }
 
});
}
keyPress();
