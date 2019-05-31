$(function(){
    // 搜索框
    $(".txt").focus(function(){
        $(".ad").css("display","none");
        $("form").css("border","1px solid #ff6700")
        $(".txt").css("border-right","1px solid #ff6700");
        $(".keyword").css("display","block");
    })
    $(".txt").blur(function(){
        if($(".txt").val() == "")
        $(".ad").css("display","block")
        $("form").css("border","1px solid #ccc")
        $(".txt").css("border-right","1px solid #ccc");
        $(".keyword").css("display","none");
    })
    /* 搜索框弹出 */
    var code=-1
    $(document).keyup(function(e){
        if(e.keyCode == 40){
            code++;
            $(".keyword-log >li").eq(code).css("background",'#eeeeee').siblings().css("background","#fff");
            if(code >= 9){
                code = 9;
            }
            $(".txt").val($(".keyword-log >li").eq(code).children("a").text())
        }if(e.keyCode == 38){
            if(code == -1){
                return;
            }
            code--;
            if(code <=0){
                code = 0;
            }
            $(".keyword-log >li").eq(code).css("background",'#eeeeee').siblings().css("background","#fff");
            $(".txt").val($(".keyword-log >li").eq(code).children("a").text())
        }
    })
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
    // 主导航二维码
    $("#code").mouseover(function(){
        $(".code").css("display","block")
    })
    $("#code").mouseout(function(){
        $(".code").css("display","none")
    })
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
    })
    // 主要内容移入效果
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
        $(".hot-list > ul >li >a").removeClass("hot-active");
        $(this).addClass("hot-active");
    })
    // 主要内容移入弹出评论
    $(".parti > ul >li").mouseover(function(){
        $(this).children(".comment").stop().slideDown(200)
    })
    $(".parti > ul >li").mouseout(function(){
        $(this).children(".comment").stop().slideUp(200)
    })
})
