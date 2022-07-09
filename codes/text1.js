var menu= document.getElementById("menu");
var click= document.getElementById("click");

click.onclick=function(){

    if(menu.className=="open"){
        menu.className="";
        
    }else{
        menu.className="open";

    }

}