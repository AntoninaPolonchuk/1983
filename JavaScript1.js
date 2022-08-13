var $drag = $('.move').draggabilly({})

/*console.log($(this).parent().attr("class"))*/

/*Домики, которые строятся с поля*/

$('#Поле').click(function () {

    let getID = $(this).parent().attr("id");
    /*проверка для того, чтобы не строились все домики, на которые был клик*/
    let check = false;
    let check2 = false;

    $('.buttons2').css({ 'bottom': '50px' });
    check = true;
    forbidClick();

    /*прозрачный домик до выбора*/
    check2 = true;
    $('#' + getID + ' #Поле').hide();
    $('#' + getID + ' #Дом_1').show().css({ 'fill-opacity': '0.5' });


    $('#Отмена2').click(function () {

        $('.buttons2').css({ 'bottom': '-150px' });

        /*убираем прозначный домик*/
        if (check2 == true & check == true) {
            $('#' + getID + ' #Поле').show();
            $('#' + getID + ' #Дом_1').hide();
            check2 == false;
        }
        check = false;
        allowClick();
    });

    $('#Построить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Поле').hide();
            $('#' + getID + ' #Дом_1').show().css({ 'fill-opacity': '1' });
            $('.buttons2').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
            check2 = false;
        }
    });
});


$('#Дом_1').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '50px' }); 
    check = true;
    forbidClick();


    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
        allowClick();
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_1').hide();
            $('#' + getID + ' #Дом_2').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
        }
    });
});

/*Домики, которые со старта*/
$('#Дом_1a').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '50px' });
    check = true;
    forbidClick();

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
        allowClick();
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_1').hide();
            $('#' + getID + ' #Дом_2').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
        }
    });
});


$('#Дом_2').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '50px' });
    check = true;
    forbidClick();

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
        allowClick();
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_2').hide();
            $('#' + getID + ' #Дом_3').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
        }
    });

});

$('#Дом_3').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '50px' });
    check = true;
    forbidClick();

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
        allowClick();
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_3').hide();
            $('#' + getID + ' #Дом_4').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
        }
    });

});

$('#Дом_4').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '50px' });
    check = true;
    forbidClick();

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
        allowClick();
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_4').hide();
            $('#' + getID + ' #Дом_5').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
            allowClick();
        }
    });
});


/*Убираем возможность повторного клика на домик*/
function forbidClick() {
    $('#Поле').css({ 'pointer-events': 'none' })
    $('#Дом_1a').css({ 'pointer-events': 'none' })
    $('#Дом_1').css({ 'pointer-events': 'none' })
    $('#Дом_2').css({ 'pointer-events': 'none' })
    $('#Дом_3').css({ 'pointer-events': 'none' })
    $('#Дом_4').css({ 'pointer-events': 'none' })
    $('#Дом_5').css({ 'pointer-events': 'none' })
}

function allowClick() {
    $('#Поле').css({ 'pointer-events': 'auto' })
    $('#Дом_1a').css({ 'pointer-events': 'auto' })
    $('#Дом_1').css({ 'pointer-events': 'auto' })
    $('#Дом_2').css({ 'pointer-events': 'auto' })
    $('#Дом_3').css({ 'pointer-events': 'auto' })
    $('#Дом_4').css({ 'pointer-events': 'auto' })
    $('#Дом_5').css({ 'pointer-events': 'auto' })
}
