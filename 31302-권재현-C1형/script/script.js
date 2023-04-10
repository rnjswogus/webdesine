jQuery(document).ready(function(){
    //메뉴 
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    //imasl li 인덱스가 0보다 크면 숨겨
    $(".imasl li:gt(0)").hide();

    //일정간격으로 반복
    //imasl의 첫째 li를 페이드아웃
    //다음 li를 페이트인
    //마지막 요소(페이드아웃한 첫째 li)를 imasl의 막내로 집어넣어

    setInterval(function(){
        $(".imasl li:first").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".imasl>ul")

    },3000)


})