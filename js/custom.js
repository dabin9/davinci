//only js

const menuTrigger = document.querySelector('.menu');

menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('open');
});



// 제이쿼리
$(function () {
    function flex01() {
        //console.log('m01Add')
        $('.current01 .bg').addClass('on')
        $('.current01 .bg_black').addClass('on')
        $('.current01 .trans01').addClass('on')
        $('.current01 .trans02').addClass('on')
        $('.current01 .trans03').addClass('on')
        $('.current01 .trans04').addClass('on')

    }
    flex01();

    function flex02() {
        //console.log('m02Add')
        $('.current02 .bg').addClass('on')
        $('.current02 .bg_black').addClass('on')
        $('.current02 .trans01').addClass('on')
        $('.current02 .trans02').addClass('on')
        $('.current02 .trans03').addClass('on')
        $('.current02 .trans04').addClass('on')

    }
    flex02();


    function flex03() {
        //console.log('m03Add')
        $('.current03 .bg').addClass('on')
        $('.current03 .bg_black').addClass('on')
        $('.current03 .trans01').addClass('on')
        $('.current03 .trans02').addClass('on')
        $('.current03 .trans03').addClass('on')
        $('.current03 .trans04').addClass('on')

    }
    flex03();

    function flex04() {
        //console.log('m01Rem')
        $('.current01 .bg').removeClass('on')
        $('.current01 .bg_black').removeClass('on')
        $('.current01 .trans01').removeClass('on')
        $('.current01 .trans02').removeClass('on')
        $('.current01 .trans03').removeClass('on')
        $('.current01 .trans04').removeClass('on')
    }
    //flex04();


    function flex05() {
        //console.log('m02Rem')
        $('.current02 .bg').removeClass('on')
        $('.current02 .bg_black').removeClass('on')
        $('.current02 .trans01').removeClass('on')
        $('.current02 .trans02').removeClass('on')
        $('.current02 .trans03').removeClass('on')
        $('.current02 .trans04').removeClass('on')
    }
    flex05();


    function flex06() {
        //console.log('m03Rem')
        $('.current03 .bg').removeClass('on')
        $('.current03 .bg_black').removeClass('on')
        $('.current03 .trans01').removeClass('on')
        $('.current03 .trans02').removeClass('on')
        $('.current03 .trans03').removeClass('on')
        $('.current03 .trans04').removeClass('on')
    }
    flex06();


    var currentView = 1;

    $('.next').click(function () {
        if (currentView == 1) {
            $('.main_container').css('transform', 'translateX(-100vw)');
            flex02();
            flex04();
            currentView = 2;
        } else if (currentView == 2) {
            $('.main_container').css('transform', 'translateX(-200vw)');
            flex03();
            flex05();
            currentView = 3;
        }

    })

    $('.prev').click(function () {
        if (currentView == 2) {
            $('.main_container').css('transform', 'translateX(0vw)');
            flex01();
            flex05();
            currentView = 1;
        } else if (currentView == 3) {
            $('.main_container').css('transform', 'translateX(-100vw)');
            flex02();
            flex06();
            currentView = 2;
        }
    })





    function hasCurrents() {
        var num = 0;

        if (num == 0) {
            //console.log("Sd")
            flex01();
        }

    }

    hasCurrents();


    //sub-menu hover active


    //sub scrollX

    $('.menu').click(function () {
        if ($('.sub_menu').hasClass('on')) {
            $('.sub_menu').removeClass('on');
        } else {
            $('.sub_menu').addClass('on');
        }
    })


    $('.mainCurrentView01').click(function () {
        $('.main_container').css('transform', 'translateX(-0vw)');
        flex04();
        flex05();
        flex06();
        flex01();
        $('.sub_menu').removeClass('on');
        $('.menu').removeClass('open');
        currentView == 1;
    })
    $('.mainCurrentView02').click(function () {
        $('.main_container').css('transform', 'translateX(-100vw)');
        flex04();
        flex05();
        flex06();
        flex02();
        $('.sub_menu').removeClass('on');
        $('.menu').removeClass('open');
        currentView == 2;
    })
    $('.mainCurrentView03').click(function () {
        $('.main_container').css('transform', 'translateX(-200vw)');
        flex04();
        flex05();
        flex06();
        flex03();
        $('.sub_menu').removeClass('on');
        $('.menu').removeClass('open');
        currentView == 3;
    })






















































})

