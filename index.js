// console.log("hello how are you");

//===================== First figure=====================
let y=document.querySelector("figure")
// console.log(y);
y.addEventListener("mouseover",hide);
y.addEventListener("mouseleave",show);


function hide()
{
    let k=document.querySelector(".btn1");
    k.style.background="#ffff";
    k.style.color="#1abc9c";
    k.style.height="52px";
    k.style.width="194px";
    k.style.scroll="smooth";
   
}

function show(){
    let k=document.querySelector(".btn1")
    k.style.background="#1abc9c";
    k.style.color="#ffff";
    k.style.height="47px";
}



// ===========Second figure==================
let u=document.querySelector(".second_fig")
// console.log(u);
u.addEventListener("mouseover",hide_two);
u.addEventListener("mouseleave",show_two)

function hide_two()
{

    let k=document.querySelector(".color");
    k.style.background="#ffff";
    k.style.color="#1abc9c";
    k.style.height="52px";
    k.style.width="194px";
    k.style.scroll="smooth";
}

function show_two()
{
    let k=document.querySelector(".color");
    k.style.background="#1abc9c";
    k.style.color="#ffff";
    k.style.height="47px";

}



//========================Third Figure=========================
let h=document.querySelector(".third_fig");
h.addEventListener("mouseover",hide_three);
h.addEventListener("mouseleave",show_three);

function hide_three()
{
    let k=document.querySelector(".color_two");
    k.style.background="#ffff";
    k.style.color="#1abc9c";
    k.style.height="52px";
    k.style.width="194px";
    k.style.scroll="smooth";
}

function show_three()
{
    let k=document.querySelector(".color_two");
    k.style.background="#1abc9c";
    k.style.color="#ffff";
    k.style.height="47px";
}