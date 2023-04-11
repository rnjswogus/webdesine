jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    $("imgslide li gt:0").hiden();

    // $("imgslide li:first").appendTo("imgslide>ul")
})