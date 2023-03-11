$(document).ready(function(){

    $('.favorite').click(function (e) { 
        $( this ).toggleClass('fave-select');
    });

    $('.favorite').hover(function (e) { 
        $( this ).animate({
            width: "26px",
            'background-size': "25px",
            top: "17px",
            right: "20px",
        },200);
    },function (e) {
        $( this ).animate({
            width: "20px",
            'background-size': "20px",
            top: "19px",
            right: "22px",
        },200);
    });

    $('.product-btn,.checkout-btn').hover(function (e) { 
        $( this ).toggleClass(' animate__animated animate__pulse');
    });
    $('.navbar-r li,.footer-link li,.product-delete').hover(function (e) { 
        $( this ).toggleClass(' animate__animated animate__heartBeat');
    });
    $('.logo,.mailbar-btn,.login-btn,.rememberme span').hover(function (e) { 
        $( this ).toggleClass(' animate__animated animate__pulse');
    });
    $('.slide-bar .options a').hover(function (e) { 
        $( this ).toggleClass('title-select');
    });
    $('.page-btns .options').hover(function (e) { 
        $( this ).toggleClass('page-btn-select');
    });
    $('.page-arrow').hover(function (e) { 
        $( this ).toggleClass('title-select');
    });

    //hambtn
    $('.hambtn').click(function (e) { 
        $( this ).toggleClass('bx-x');
        $( '.navbar-r' ).toggleClass('nav-toggle animate__animated animate__fadeIn');
    });

});

