function gameOver(){
    hit.play();
    highScore=JSON.parse(localStorage.getItem('highScores')) || 0;
    if (counter>=highScore){
       localStorage.setItem('highScores',JSON.stringify(counter));
       highScore=counter;
    }

    clearInterval(pipeCreation);
    cancelAnimationFrame(animation);
    setTimeout(gameEnd,1000);
    
    
}
function gameEnd(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(BACKGROUND,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(RESTART,50,180,192,42);
    ctx.drawImage(SCOREBOARD,40,280,225,114);
    if (counter%10<=5){
    ctx.drawImage(BRONZE,67,325,40,40);
    }
    else if(counter%10>=5 && counter%10<=10){
    ctx.drawImage(SILVER,67,325,40,40);
    }
    else {
    ctx.drawImage(GOLD,67,320,40,40);
    }
    ctx.font="30px Arial"
    ctx.fillStyle="#fca048"
    ctx.fillText(counter,215,335);
    ctx.fillText(highScore,215,380);
    ctx.font="32px Flappy";
    ctx.fillStyle="#fff";
    ctx.fillText(`Click on the Screen`,50,100);
    ctx.fillText('to play again',80,130);
    document.addEventListener('click',game);
    }