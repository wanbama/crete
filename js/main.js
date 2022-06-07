$(function() {
    $('.tabList li:eq(0) a').addClass('current');
    $('.tabBox:eq(0)').show();
    let tabIdx = 0;
    $('.tabList a').click(function() {
        tabIdx = $(this).closest('li').index();
        $('.tabList a').removeClass('current');
        $(this).addClass('current');
        $('.tabBox').hide();
        $('.tabBox').eq(tabIdx).fadeIn();
    });

    let tabText = $('.tabList a').clone();
    $('.tabList').after('<div class="mTabList"><a href="javascript:;" class="mainText">All</a><div class="mTabBox"></div></div>');
    $('.mTabBox').append(tabText);
    $('.mainText').click(function() {
        $(this).next('.mTabBox').fadeToggle();
    })

    $('.mTabBox a').click(function() {
        tabIdx = $(this).index();
        $('.tabList a').removeClass('current');
        $('.tabList a').eq(tabIdx).addClass('current');
        $('.tabBox').hide();
        $('.tabBox').eq(tabIdx).fadeIn();
        $('.mTabBox').fadeOut();
        return false;
    });

    $('.openPopForm').click(function() {
        $('.popFormBox').fadeIn();
    })

    $('.popFormBox .buttonClose').click(function() {
        $('.popFormBox').fadeOut();
    });

    // $('.wrapBox').append('<div class="mobileMenuBox"><div class="wrap"></div></div><div class="menuMask"></div>');
    // let $menu = $('header .menu ul').clone().addClass('mMenu');
    // let $social = $('header .social').clone().removeClass('social').addClass('mSocial');
    // $('.mobileMenuBox .wrap').append($menu, $social);
    // $('.mMenu li').each(function () {
    // 	if ($(this).find('.subMenu').length > 0) {
    // 		$(this).find('.link').addClass('mDropDown');
    // 	}
    // })

    $('.mDropDown').click(function(e) {
        e.preventDefault();
        $(this).next('.subMenu').slideToggle();
    })

    $('.mobileMenuButton').click(function() {
        $('.menu').toggleClass('open');
        $(this).toggleClass('open');
        $('.mobileMenuBox').fadeToggle();
    })

    $('.menuMask').click(function() {
        $('.mobileMenuBox, .mobileMenuButton').toggleClass('open');
        $(this).fadeToggle();
    });

    $('.menu li').each(function() {
        if ($(this).find('.subMenu').length > 0) {
            $(this).addClass('dropDown');
        }
    });
    $('.menu .dropDown .link').click(function(e) {
        if (window.innerWidth < 961) {
            e.preventDefault();
            $(this).next('.subMenu').slideToggle();
            $(this).closest('li').toggleClass('open');
        }
    });

    // $('body').append('<div id="rwdViewBox"></div>');

    $(window).resize(function() {
        let vw = window.innerWidth;
        // let vh = window.innerHeight;
        // $('#rwdViewBox').text(vw + ' x ' + vh);
        if (vw >= 960) {
            $('.headerInfo').prependTo('header .topBox .wrap');
        } else {
            $('.headerInfo').appendTo('.menu .wrap');
        }
    }).resize();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

        let sw = screen.width;
        if (sw >= 767) {
            if ($(this).scrollTop() > 50) {
                $('header>.topBox').fadeOut();
            } else {
                $('header>.topBox').fadeIn();
            }
        }

    });

    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    $('.dropDownBox .main').click(function() {
        $(this).next().toggleClass('show');
    });
    $('.openSearch').click(function() {
        $(this).parent().toggleClass('show');
    });

    $("a").each(function(index) {
        let href = $(this).attr('href');
        if (href !== undefined && href.includes("http") && !href.includes(location.host)) {
            $(this).attr('target', '_blank');
        }
    });

    $(".textEditor table").each(function(index) {
        let sw = screen.width;
        if (sw <= 640) {
            $(this).css('width', '100%')
        }
    });

})