// hamburger menu


function menuView() {
    var menuBtn = $('.menu-btn');
    menuBtn.on("click", function () {
        var bars = $(".bars");
        var closeBtn = $(".close");
        bars.toggleClass("invisible");
        closeBtn.toggleClass("invisible");
    })
}

function menuReset() {
    var bars = $(".bars");
    var closeBtn = $(".close");
    bars.removeClass("invisible");
    closeBtn.addClass("invisible");
}

function hideNav() {
    var nav = $('.nav');
    nav.addClass('hidden');
}

function showNav() {
    var nav = $('.nav');
    nav.removeClass('hidden');
    var header = $(".top");
    header.addClass('flex');
}

function showBtn() {
    var menuBtn = $('.menu-btn');
    var header = $(".top");
    menuBtn.removeClass('hidden');
    header.removeClass('flex');
}

function hideBtn() {
    var menuBtn = $('.menu-btn');
     menuBtn.addClass('hidden');
}

function btn_Menu_Init() {
    var menuBtn = $('.menu-btn');
    menuBtn.on('click', function (e) {
        var nav = $('.nav');
        e.preventDefault();
        nav.toggleClass('hidden');
    });
}

function dropDown() {
    var nav = $('.nav');
    nav.addClass('menu-drop');
    nav.addClass("fadeIn");
}

function noDropDown() {
    var nav = $('.nav');
    nav.removeClass('menu-drop');
    nav.removeClass("fadeIn");
}


//page layout

function twoCols() {
    var title = $(".title");
    var content = $(".content");
    var box = $(".box");
    title.addClass("title-width");
    content.addClass("content-width");
    box.addClass("box-flex");
}

function oneCol() {
    var title = $(".title");
    var content = $(".content");
    var box = $(".box");
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
        } else {
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
        var $target = $(this.hash);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
        });
        var mq = window.matchMedia("(max-width: 767px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
        // media query change
        function WidthChange(mediaQuery) {
            if (mediaQuery.matches) {
                hideNav();
                menuReset();
            }
        }
    });
}
//scroll animation

function animate() {
    $(window).scroll(function () {
        var newSection = $("#new");
        var yorkSection = $("#york");
        var citySection = $("#city");
        var newX = newSection.offset();
        var yorkX = yorkSection.offset();
        var cityX = citySection.offset();
//       console.log("Top: " + newX.top);
//       console.log("Top: " + yorkX.top);
//       console.log("Top: " + cityX.top);

        var position = $(window).scrollTop();
        // console.log(position);
        if ((position * 1.4) > newX.top) {
            newSection.find(".title").addClass("right");
            newSection.find(".content").addClass("left");
        }

        var yorkSectionTitle = yorkSection.find(".title");
        var yorkSectionContent = yorkSection.find(".content");
        if ((position * 1.4) > yorkX.top) {
            yorkSectionTitle.addClass("right");
            yorkSectionContent.addClass("left");
        }

        var citySectionTitle = citySection.find(".title");
        var citySectionContent = citySection.find(".content");
        if ((position * 1.4) > cityX.top) {
            citySectionTitle.addClass("right");
            citySectionContent.addClass("left");
        }

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
            yorkSectionTitle.addClass("right");
            yorkSectionContent.addClass("left");
            citySectionTitle.addClass("right");
            citySectionContent.addClass("left");
        }
    })

}


//changing background

var index = 0;
var background = [
    "images/topcc.jpg",
    "images/top2cc.jpg",
    "images/top3cc.jpg",
    "images/top4cc.jpg",
    "images/top5cc.jpg"
];

function bgchange() {
    var header = $(".top");
    index++;
    if (index === background.length) {
    index = 0
    };
    header.css("background-image", "url('" + background[index] + "')");
}

setInterval(bgchange, 7000);


$(document).ready(function () {
    btn_Menu_Init();
    test_match_media_with_listener();
    menuView();
    scroll();
    animate();
    bgchange();
});
