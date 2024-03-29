var ScrollReveal = require('scrollreveal');
var Typed = require('typed.js');
var fonts = require('google-fonts');


fonts.add({
     'Source Sans Pro': ['300','400','700']
});


$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


 //Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


// Scrolls to the selected menu item on the page  a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])
$(function() {
    $('#to-top').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }


    });
});


$('.scroll').click(function() {
    var href = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(href).offset().top
     }, 1000);
});

//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});


// typed

$(function() {
    var typed = new Typed('.print', {
        stringsElement: '#typed-strings',
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 2500,
        // backspacing speed
        backSpeed: 30,
        loop: true,
        loopCount: false,

        // time before backspacing
        backDelay: 2000
    });
});

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.myinfo', {
    duration: 2000
});
sr.reveal('.project', {
    duration: 2000
});

$(document).ready(function() {
    $("body").css("visibility", "visible");
});


(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-62104350-3', 'auto');
ga('send', 'pageview');
