var $drag = $('.move').draggabilly({})

/*console.log($(this).parent().attr("class"))*/



$('#Дом_1').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '-35px' }); 
    check = true;

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_1').hide();
            $('#' + getID + ' #Дом_2').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
        }
    });
});

$('#Дом_2').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '-35px' });
    check = true;

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_2').hide();
            $('#' + getID + ' #Дом_3').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
        }
    });

});

$('#Дом_3').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '-35px' });
    check = true;

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_3').hide();
            $('#' + getID + ' #Дом_4').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
        }
    });

});

$('#Дом_4').click(function () {

    let getID = $(this).parent().attr("id");
    let check = false;

    $('.buttons').css({ 'bottom': '-35px' });
    check = true;

    $('#Отмена').click(function () {

        $('.buttons').css({ 'bottom': '-150px' });
        check = false;
    });

    $('#Улучшить').click(function () {
        if (check == true) {
            $('#' + getID + ' #Дом_4').hide();
            $('#' + getID + ' #Дом_5').show();
            $('.buttons').css({ 'bottom': '-150px' });
            check = false;
        }
    });

});



