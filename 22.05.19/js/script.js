// var picture=document.querySelector(".picture");



// picture.addEventListener("click",function(ev){
//     // console.log(ev.pageX+" "+ev.pageY)
//     var span=document.createElement("span");
//     span.style.top=ev.pageY-7.5 +"px";

//     span.style.left=ev.pageX-7.5+"px";
//     this.appendChild(span);
// })


// var test = document.querySelector("#test");


// test=document.addEventListener("click",function(ev){
//     console.log(ev.target)
// })

// document.body.addEventListener("click",function(ev){

//     if(ev.target.nodeName=="LI")
//     ev.target.style.border="1px solid red";

// })
// var circle = document.querySelector("#circle");
// var circle2 = document.querySelector("#circle2");
// document.body.addEventListener("mousemove", function (ev) {
//     circle.style.top = ev.pageY + "px";
//     circle.style.left = ev.pageX + "px";
//     circle2.style.top = ev.pageY+ 30 + "px";
//     circle2.style.left = ev.pageX + 30 + "px";

//     console.log(ev)

// })


//tapsiriq 1

var small = document.querySelector(".small");
var big = document.querySelector(".big");
var top_p = 0;
var left_p = 0;
document.body.addEventListener("keyup", function (ev) {

    //sol
    
        
    if (ev.which == 37 && left_p>0 ) {
        left_p-=10;
    

    }
    //yuxari
    if(ev.which == 38 && top_p<370) {
        top_p+=10;

    }

    //sag
    if (ev.which == 39 && left_p<370) {
        left_p += 10;

    }

    //asagi
    if (ev.which == 40 && top_p>0) {
        top_p-=10;

    }

    small.style.left = left_p + "px";
    small.style.top = top_p + "px"
})



//slider tamamlaya bilmedim

var slider=document.querySelector("#slider");
var right=document.querySelector(".right");
var left=document.querySelector(".left");


right.addEventListener("click",function(){
    // console.log(slider.children[0])
    var active=document.querySelector(".active");
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add("active");
    active.classList.remove("active");
    }else{
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }
    })






left.addEventListener("click",function(){
    // console.log(slider.children[0])
    var active=document.querySelector(".active");
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add("active");
    active.classList.remove("active");
    }else{
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }

   
   
    
   
})


slider.addEventListener("keydown",function(ev){
    if(ev.which==39){
        
right.addEventListener("click",function(){
    // console.log(slider.children[0])
    var active=document.querySelector(".active");
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add("active");
    active.classList.remove("active");
    }else{
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }
    })
    }
})