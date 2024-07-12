$(()=>{
    //전체 내려오기
    $('.nav').mouseover(function(){
        
    })

    // 각각 내려오기
    $('.nav>li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown();
    })
    $('.nav>li').mouseout(function(){
        $(this).children('.submenu').stop().slideDown();
    })

    setInterval(slide,2000);
    let x = $('#imgslide>img');
    console.log(x);
    function slide(){
        y--;
        if(y == 0){
            x.fadeIn();
            y=3;
        }else{
            x.eq(y).fadeOut();
        }
       
   };
    // setInterval(function(){
    //     y--;
    //     if(y == 0){
    //         x.fadeIn();
    //         y=3;
    //     }else{
    //         x.eq(y).fadeOut();
    //     }

    // },2000);

})