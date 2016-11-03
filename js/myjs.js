window.onload = function(){

};

$(window).scroll(function () {
    SpyScroll();
})

function SpyScroll() {//监听屏幕滚动
    var scrollTop = getScrollTop();
    var windowHeight = window.screen.height;
    var secHeightArr = getSecHeightArr();
    //var liArr = document.getElementById("mainNav").getElementsByTagName("li");
    console.log(windowHeight+"  "+scrollTop+"  "+secHeightArr[0]);
    //console.log(secHeightArr);
    if(scrollTop-secHeightArr[5]>0-windowHeight/4){
        setActive(6);
        setAnimate("footer_wrapper");
    }else if(scrollTop-secHeightArr[4]>0-windowHeight/4){
        setActive(5);
        setAnimate("team");
    }else if(scrollTop-secHeightArr[3]>0-windowHeight/4){
        setActive(4);
        setAnimate("clients");
    }else if(scrollTop-secHeightArr[2]>0-windowHeight/4){
        setActive(3);
        setAnimate("Portfolio");
    }else if(scrollTop-secHeightArr[1]>0-windowHeight/4){
        setActive(2);
        setAnimate("aboutUs");
    }else if(scrollTop-secHeightArr[0]>0-windowHeight/4){
        setActive(1);
        setAnimate("services");
    }else {
        setActive(0);
        setAnimate("hero_section");
    }

}

function setAnimate(id) {

    $("#"+id).find(".animate").css("-webkit-animation-play-state","running");
}

 function setActive(num) {
    var liArr = document.getElementById("mainNav").getElementsByTagName("li");
    for(var i=0;i<liArr.length;i++){
        liArr[i].className = "";
    }
    liArr[num].className = "actives";
 }

function getSecHeightArr() {//获取section数组
    var secArr = document.getElementById("body").children;
    var secHeightArr = [];
    for (var i = 0; i<8; i++){
        secHeightArr[i] = secArr[i].offsetHeight;
        // console.log(secHeightArr[i]);
    }
    secHeightArr.shift();
    for(var i = 1;i<secHeightArr.length;i++){
        secHeightArr[i]+=secHeightArr[i-1];
    }
    return secHeightArr;
}


function getScrollTop(){//获取窗口滚动高度
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

function hi(){
    alert("hello");
    alert("hello");
}