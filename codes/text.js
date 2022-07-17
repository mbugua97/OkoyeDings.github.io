
    var menu= document.getElementById("menu");
    var click= document.getElementById("click");
    click.onclick = function(){

    if(menu.className=="open"){
        menu.className="";
        click.innerHTML="<i class='fas fa-navicon fa-2x'></i>"
    }else{
        menu.className ="open";
        click.innerHTML ="<i class='fas fa-xmark fa-3x'></i>"
        click.style.color ="white";
    }
   }

    $(".hide").on("click" , function(){
    $(".messages").slideToggle()

    });


    //CHANGING QUOTE

    var allQ = $("blockquote");
    var currentQ = 0;

    function changeQ(){

        $(allQ[currentQ]).fadeOut(800 , function(){

            if(currentQ === (allQ.lenght = 2)){
                currentQ  = 0;
            }else{
                currentQ++;
            }
            $(allQ[currentQ]).fadeIn(800);

        })
     
    }
    var qTimer = setInterval(changeQ , 3000);  

    //slide down
var item =$(".acc-log-a");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})
var item =$(".acc-log-b");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})
var item =$(".acc-log-c");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})