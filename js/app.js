// hamburger menu

var bars = $(".bars");
var nav = $('.nav');
var header = $(".top");

function menuView() {
    var menu = $(".menu-btn");
    menu.on("click", function () {
        bars.toggleClass("invisible");
        var x = $(".close");
        x.toggleClass("invisible");
    })
}

function menuReset() {
    bars.removeClass("invisible");
    var closeButton = $(".close");
    closeButton.addClass("invisible");
}

function hideNav() {
    nav.addClass('hidden');
}

function showNav() {
    nav.removeClass('hidden');
    header.addClass('flex');
}

function showBtn() {
    var $btn = $('.menu-btn');
    $btn.removeClass('hidden');
    header.removeClass('flex');
}

function hideBtn() {
    var $btn = $('.menu-btn');
    $btn.addClass('hidden');
}

function btn_Menu_Init() {
    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        nav.toggleClass('hidden');
    });
}

function dropDown() {
    nav.addClass('menu-drop');
    nav.addClass("fadeIn");
}

function noDropDown() {
    nav.removeClass('menu-drop');
    nav.removeClass("fadeIn");
}


//page layout
var title = $(".title");
var content = $(".content");
var box = $(".box");

function twoCols() {
    title.addClass("title-width");
    content.addClass("content-width");
    box.addClass("box-flex");
}

function oneCol() {
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
    index++;
    if (index === background.length) index = 0;
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
