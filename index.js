window.onscroll = function () {onScrollFunction()};

function onScrollFunction(){
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        document.getElementById("header-shadow").style.boxShadow = "0 2px green"
    }else{
        document.getElementById("header-shadow").style.boxShadow = "none"
        
    }
}