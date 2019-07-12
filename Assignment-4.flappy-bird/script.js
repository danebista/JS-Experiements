
let ctx=canvas.getContext('2d');
let init=0;
junction_font.load().then(function(loaded_face) {
	document.fonts.add(loaded_face);
    ctx.font=" 80px Flappy"
}).catch(function(error) {
	return;
});

document.addEventListener('click',game);
BACKGROUND.onload=()=>{
    ctx.drawImage(BACKGROUND,0,0,288,CANVAS_HEIGHT);
}
START.onload=()=>{
    ctx.drawImage(START,50,50,184,267);
}

function game(){
  ctx.font=" 80px Flappy"
  counter=0;
  obs=[];
  let speed=0.25;
  ctx.drawImage(BACKGROUND,0,0,288,CANVAS_HEIGHT);
  document.removeEventListener('click',game);
  const bird=new Bird();
  var obstacles;
  obstacle1=new Obstacles();
  obs.push(obstacle1);
 ctx.drawImage(BASEGROUND,init,CANVAS_HEIGHT-bg,CANVAS_WIDTH,bg);
 pipeCreation=setInterval(obstacleMaker,3000);
gameloop();
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(BACKGROUND,0,0);            
    bird.drawBird();
}

function keyPress(){
    document.addEventListener('click',function(){
        if(bird.x>0 &&bird.y>0){
         
             bird.speed=-4;
             wing.play();
           }
        else if(bird.x==0 && bird.y==0){
            bird.y=CANVAS_HEIGHT-bird.height;
        }
}) 
}
keyPress(); 
setInterval(()=>{bird.motion()},16.66);

function gameloop(){
    animation=window.requestAnimationFrame(gameloop);
  clearCanvas();
  for (i=obs.length-1;i>=0;i--){
       obs[i].move();
       obs[i].draw();
       ctx.drawImage(BASEGROUND,init,CANVAS_HEIGHT-bg,CANVAS_WIDTH,bg);
       ctx.drawImage(BASEGROUND,init+bgwidth,CANVAS_HEIGHT-bg,CANVAS_WIDTH, bg);
       ctx.fillStyle="#fff"
       ctx.fillText(counter, CANVAS_WIDTH/2-(obs[0].width)/2,CANVAS_HEIGHT/4);
       init=init-speed;
       if(init<-200){
           init=0;   
       }
       obs[i].collision(bird);
       if (obs[i].x1+obs[i].width<-10){
        obs.splice(obs,1);
        point.play();
        counter++
      }
   }
 
  
}

function obstacleMaker()
{
obstacles=new Obstacles();   
obs.push(obstacles);
}
}


