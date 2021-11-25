$(function(){
    $('.hamburger').on('click',function(){
        hamburger();
    });

    $('#nav a').on('click',function(){
        hamburger();
    });

    $('.left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
          // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass('slide-left');
        }
    });
      // BBBが選ばれる理由（スライド右）
    $('.right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
          // 要素が表示されたらslide-rightクラスを追加
          $(this).stop().addClass('slide-right');
        }
    });

    $('#voice').find('.content').on('inview', function(event, isInView, visiblePartX, visiblePartY){
        if(isInView){
            $(this).stop().addClass('balloon');
        }
    });

    function newFunction() {
        $('.left').on('inview', function () {
            $(this).stop().addClass('slide-left');
        });
        $('.right').on('inview', function () {
            $(this).stop().addClass('slide-right');
        });
    }
});

function hamburger(){
    $('.hamburger').toggleClass('active');

    if($('.hamburger').hasClass('active')){
        $('#nav').addClass('active')
    } else {
        $('#nav').removeClass('active');
    }
};