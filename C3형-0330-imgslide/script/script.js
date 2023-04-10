jQuery(document).ready(function(){

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })



    setInterval(function(){
        $(".imglen").delay(2000);
        $(".imglen").animate({marginLeft:-800},1000,
            function(){
                $(".imglen li:first").appendTo(".imglen>ul")
                $(".imglen").css({marginLeft:0})
                
            }
        )
        
    })

    //일정 간격으로 반복해
    //img len 2초간 딜레이시켜
    

})