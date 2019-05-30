$(function(){

    $(".notic-getout").click(function(){
        $(".login-notic").slideUp([300]);//slideUp向上滑动隐藏

    });

//轮播图
    var index=0;
    var timer = setInterval(autoplay,2000);
    function autoplay(){
    index++;
    $(".chart-img > img").eq(index).fadeIn(500).siblings().fadeOut(500);
    $(".chart-tip ul > li").eq(index).addClass("active").siblings().removeClass("active");
    if(index == $(".chart-img > img").length-1){
        index = -1;
    }
}

})


