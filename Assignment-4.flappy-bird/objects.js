function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}


class Bird{
    constructor(){
        this.x=10;
        this.width=25;
        this.height=23.375;
        this.y=CANVAS_HEIGHT/2-this.height;
        this.index = 0;
        this.speed=0;
        setInterval(() => {
            this.index ++;
            this.index %= 8;
        }, 100);
    }
    drawBird(){
        ctx.drawImage(BIRD, 0, this.index * 24.5, 25, 24.5, this.x, this.y, this.width, this.height);
    }
    motion(){
        this.speed+=0.2;
        this.y+=this.speed;
    }
}
class Obstacles{
    constructor(){
        this.x1=700;
        this.y1=0; 
        this.height1=getRandom(50,245);
        this.y2=this.height1+100;
        this.height2=CANVAS_HEIGHT-this.y2;
        this.width=40;

        this.draw();
    }
    draw(){
        ctx.drawImage(PIPEUP, this.x1,this.y1,this.width,this.height1);
        ctx.drawImage(PIPEDOWN,this.x1,this.y2,this.width,this.height2);

    }
    move(){
        this.x1-=1.1;
    }
    collision(bird){
        
        if(bird.x+bird.width>=this.x1+2 && bird.x<=this.x1+this.width && (bird.y+3<=this.y1+this.height1||bird.y+bird.height>=this.y2+2)||bird.y+bird.height-4>=CANVAS_HEIGHT-bg){
             
            gameOver();
        }
    }
}