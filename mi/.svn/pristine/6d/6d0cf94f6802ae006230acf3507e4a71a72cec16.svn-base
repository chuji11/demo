$(function(){
    // 轮播图开始
    var index = 0;
    // 创建定时器
    var timer = setInterval(autoPlay,2000);
    function autoPlay(){
        index++;
        $(".ban-dot > span").eq(index).addClass("dot").siblings().removeClass("dot");
        $(".ban > img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        if(index == 4){
            index = -1;
        }
    }
    // 鼠标移入小圆点事件
    $(".ban-dot > span").mouseover(function(){
        $(".ban-dot > span").removeClass("dot");
        $(this).addClass("dot");
        index = $(this).index();
        $(".ban > img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
    // 鼠标移入banner图
    $(".ban > img").mouseover(function(){
        clearInterval(timer);
    })
    // 鼠标移除banner图
    $(".ban > img").mouseout(function(){
        timer = setInterval(autoPlay,2000)
    })
    // 鼠标点击左右按钮
    $(".bLeft").click(function(){
        if(index == 0){
            index = 4;
        }else{
            index--;
        }
        $(".ban-dot > span").eq(index).addClass("dot").siblings().removeClass("dot");
        $(".ban > img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        //console.log(index)
    })
    $(".bRight").click(function(){
        if(index == 4){
            index = 0;
        }else{
            index++;
        }
        $(".ban-dot > span").eq(index).addClass("dot").siblings().removeClass("dot");
        $(".ban > img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    $(".main-c > ul").mouseover(function(){
        $(".submenu").stop().slideDown(200)
    });
    $(".main-c > ul").mouseout(function(){
        $(".submenu").stop().slideUp(200)
    })
    // 轮播图结束

    // banner图隐藏菜单
    $(".ban-menu > ul").mouseover(function(){
       $(" .ban-menu-sub").css("display","block")
    })
    $(".ban-menu > ul").mouseout(function(){
        $(" .ban-menu-sub").css("display","none")
     })
    //  右侧固定栏鼠标移入
     $(".scoll > li").mouseover(function(){
         if($(this).index() == 0){
             $(".fix-bot").css("display","block")
         }
        $(this).children("div").children("img").eq(0).css("display","none");
        $(this).children("div").children("img").eq(1).css("display","block");
        $(this).css("color","#ff6700")
     })
     $(".scoll > li").mouseout(function(){
         $(".fix-bot").css("display","none")
       $(this).children("div").children("img").eq(0).css("display","block");
       $(this).children("div").children("img").eq(1).css("display","none");
       $(this).css("color","#757575")
       console.log($(this).children("div"))
    })
    $(".back").mouseover(function(){
        $(this).css("color","#ff6700");
        $(this).children("a").children("div").children("img").eq(0).css("display","none");
        $(this).children("a").children("div").children("img").eq(1).css("display","block");
    })
    $(".back").mouseout(function(){
        $(this).css("color","#757575");
        $(this).children("a").children("div").children("img").eq(0).css("display","block");
        $(this).children("a").children("div").children("img").eq(1).css("display","none");
    })
    $(".hot-list > ul >li >a").mouseover(function(){
        console.log(this)
        $(".hot-list > ul >li >a").removeClass("hot-active");
        $(this).addClass("hot-active");
    })
})
