

var buttons=document.getElementsByClassName('button1');
var images=document.querySelectorAll('.carousel-image-wrapper img');
var interval;
buttons[0].style.backgroundColor="black";
class Slider{
    constructor(parent,images){
    this.parent=parent;
    this.images=images;
    this.index=Object.keys(this.images);
    this.currentIndex;
    this.nextIndex; 
    this.drawArrows;
    this.anim;
    leftArrow.addEventListener('click',getarrowClick.bind(this));
    function getarrowClick(){
      clearInterval(this.anim);
      clearInterval(this.getImage);
      if(this.currentIndex!=0){
      this.nextIndex=this.currentIndex-1;
      this.anim=setInterval(this.animationtransition.bind(this),1);
        }
    }
    rightArrow.addEventListener('click',getarrowChange.bind(this));
    function getarrowChange(){
        clearInterval(this.getImage);
        clearInterval(this.anim);
        if(this.currentIndex!=(this.index.length-1)){
          this.nextIndex=this.currentIndex+1;
          this.anim=setInterval(this.animationtransition.bind(this),1);
        } 
   } 
      
} 
  
  
  getImage(){

     
    this.currentIndex=this.index[0];
   
    interval=setInterval(this.getImageCallback.bind(this), 2000);
  }
         
  getImageCallback(){

    this.parent.style.marginLeft = `${-500*this.currentIndex}px`;
  
    this.nextIndex=(this.currentIndex+1)% this.index.length;
   

    
    this.anim=setInterval(this.animationtransition.bind(this),1);
      
  }
  animationtransition(){
      this.parent.style.marginLeft=parseInt(this.parent.style.marginLeft,10)-((this.nextIndex-this.currentIndex)*500/200);
       if(parseFloat(this.parent.style.marginLeft,10)<=-this.nextIndex*500 && this.nextIndex>this.currentIndex){
         clearInterval(this.anim);
         this.currentIndex =this.nextIndex;
         removeColor();
         buttons[this.currentIndex].style.backgroundColor="black";
       }else if(this.nextIndex<this.currentIndex &&(parseFloat(this.parent.style.marginLeft,10)>=-this.nextIndex*500) ){
         clearInterval(this.anim);
         this.currentIndex =this.nextIndex;
         removeColor();
         buttons[this.currentIndex].style.backgroundColor="black";
       } 
      
      }    
     } 
        
function removeColor(){
  for (var i=0;i<buttons.length;i++){
    buttons[i].style.backgroundColor="white";
  }
}
function buttonClick(){

}        
    

var image1=new Slider(parent,images);


image1.getImage();

