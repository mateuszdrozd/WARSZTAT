
// hamburger menu 

function menuView () {
    var menu=$(".menu-btn");
    menu.on("click", function () {
      var bars=$(".fa-bars");
      bars.toggleClass("invisible");
      var x=$(".fa-times");
      x.toggleClass("invisible");
    })
}

function menuReset () {
      var bars=$(".fa-bars");
      bars.removeClass("invisible");
      var x=$(".fa-times");
      x.addClass("invisible");
}

function hideNav() {
    var $nav=$('.nav');
    $nav.addClass('hidden');
}

function showNav() {
    var $nav=$('.nav');
    $nav.removeClass('hidden');
    var header=$(".top");
    header.addClass('flex');
}

function showBtn() {
    var $btn=$('.menu-btn');
    $btn.removeClass('hidden');
    var header=$(".top");
    header.removeClass('flex');
} 

function hideBtn() {
    var $btn=$('.menu-btn');
    $btn.addClass('hidden');
} 

function btn_Menu_Init () {
    var $nav=$('.nav');
    $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $nav.toggleClass('hidden');
    });
}

function dropDown () {
    var $nav=$('.nav');
    $nav.addClass('menu-drop');
    $nav.addClass("fadeIn");
}

function noDropDown () {
    var $nav=$('.nav');
    $nav.removeClass('menu-drop');
    $nav.removeClass("fadeIn");
}


//page layout

function twoCols () {
    var title=$(".title");
    var content=$(".content");
    var box=$(".box");
    
    title.addClass("title-width");
    content.addClass("content-width");
    box.addClass("box-flex");
}

function oneCol () {
    var title=$(".title");
    var content=$(".content");
    var box=$(".box");
    
    title.removeClass("title-width");
    content.removeClass("content-width");
    box.removeClass("box-flex");
}

//checking mediaquery

function test_match_media_with_listener() {
    var mq = window.matchMedia("(max-width: 767px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    // media query change
    function WidthChange(mediaQuery) {
        if (mediaQuery.matches) {
            
            hideNav();
            showBtn();
            dropDown();
            oneCol();
         }
        
        else {
            showNav();
            hideBtn();
            noDropDown();
            twoCols();
            menuReset();
        }
    }
}

//scroll

function scroll() {
    var link = $('a[href^="#"]');
    link.on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
        var mq = window.matchMedia("(max-width: 767px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
        // media query change
        function WidthChange(mediaQuery) {
          if (mediaQuery.matches) {
            hideNav()
            menuReset();
          }
        }
    });
}
//scroll animation

function animate () {
    $(window).scroll(function () {
       var newX = $("#new").offset();
       var yorkX= $("#york").offset();
       var cityX= $("#city").offset();
//       console.log("Top: " + newX.top);
//       console.log("Top: " + yorkX.top);
//       console.log("Top: " + cityX.top);
           
       var position = $(window).scrollTop();
//       console.log(position);
       if ( (position*1.5)>newX.top) {
          $("#new").find(".title").addClass("right");
          $("#new").find(".content").addClass("left");  
       }  
        
      if ( (position*1.5)>yorkX.top) {
         $("#york").find(".title").addClass("right");
         $("#york").find(".content").addClass("left");
      } 
        
     if ( (position*1.5)>cityX.top) {
        $("#city").find(".title").addClass("right");
        $("#city").find(".content").addClass("left");        
     }
        
  })

}


//changing background
var index = 0;
var background = [
  "images/top.jpg",
  "images/top2.jpg",
  "images/top3.jpeg"
];

function bgchange (){
  var top= $(".top");
  index++;
  
  if (index===background.length) {
      index=0
  }
    
  top.css("background-image","url('"+ background[index] +"')");
}

setInterval(bgchange, 7000);

$(document).ready(function() {
    btn_Menu_Init ();
    test_match_media_with_listener();
    menuView();
    scroll();
    animate();
    bgchange ();
});
