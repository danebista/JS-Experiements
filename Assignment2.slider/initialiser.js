var parent=document.querySelector('#c1');
var carousel=document.querySelector('.carousel-container');
var leftArrow=document.createElement('div');
var rightArrow=document.createElement('div');
leftArrow.classList.add('left-arrow');
rightArrow.classList.add('right-arrow');
var leftImage;
var rightImage;
var path1= `./images/left.png`;
var path2=`./images/right.png`;
var buttonCreate;

function setcarouselProperties(carousel){
 carousel.style.position='relative'; 
 carousel.style.overflow='hidden';
 carousel.style.height=500+'px';
 carousel.style.width=500+'px';
}
setcarouselProperties(carousel);

function setParentProperties(parent){
 parent.style.width=2000+'px';
 parent.style.position="absolute";
 parent.style.top=0+'px';
}
setParentProperties(parent);

function arrowMaker(el,child){
  el.appendChild(child);
  child.style.position='absolute';
  child.style.width=50+'px';
  child.style.height=50+'px';
  child.style.top=50 +"%";
  child.style.backgroundColor="gray";
  child.style.opacity=0.8;
}
rightArrow.style.left=90+'%';

arrowMaker(carousel,leftArrow);
arrowMaker(carousel,rightArrow);

function arrowPropertyAssigner(el,child,path){
  child= document.createElement("img");
  child.setAttribute("src",path);
  child.setAttribute("width", "30");
  child.setAttribute("alt", "arrow"); 
  child.style.height=100+"%";
  child.style.width=100+"%";
  el.appendChild(child);
}

arrowPropertyAssigner(leftArrow,leftImage,path1);
arrowPropertyAssigner(rightArrow,rightImage,path2);

function hoversetter(el){
el.addEventListener('mouseenter',function(e){
    e.target.style.backgroundColor="white";
})
el.addEventListener('mouseleave',function(e){
    e.target.style.backgroundColor="gray";
})
}
hoversetter(leftArrow);
hoversetter(rightArrow);

var button=document.createElement("div");
button.classList.add('button');
carousel.appendChild(button);
button.style.position='absolute';
button.style.top=450+'px';
button.style.left=220+'px';

function createButton(button){
    
    buttonCreate = document.createElement("button");
    buttonCreate.classList.add('button1')
    buttonCreate.innerHTML=".";
    buttonCreate.style.borderRadius=50+"%";
    buttonCreate.style.backgroundColor="white";
    button.appendChild(buttonCreate);
    return buttonCreate;

}
button1=createButton(button);
button2=createButton(button);
button3=createButton(button);
