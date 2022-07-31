console.log=("hello")
var allQ =$("blockquote");
var currentQ=0;

function changeQ(){
    $(allQ[currentQ]).fadeOut(800,function(){
        if(currentQ===(allQ.lenght=2)){
            currentQ=0
        }else{
            currentQ++;
        }
        $(allQ[currentQ]).fadeIn(800)
    })
}
var qTimer = setInterval(changeQ , 3000);  


// navigation menu
var menu=document.querySelector(" nav #flex");
var click=document.querySelector("#click");



click.onclick=function(){

    if(menu.className==="open"){
        menu.className="";
        click.innerHTML="<i class='fas fa-navicon fa-2x'></i>"
    }else{
        menu.className ="open";
        click.innerHTML ="<i class='fas fa-xmark fa-3x'></i>"
        click.style.color ="white";
    }

}

