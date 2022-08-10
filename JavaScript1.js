var $drag = $('.move').draggabilly({})

/*console.log($(this).parent().attr("class"))*/


$('#Дом_1').click(function () {

    let getID = $(this).parent().attr("id")

    $('#' + getID + ' #Дом_1').hide();
    $('#' + getID + ' #Дом_2').show();

});

$('#Дом_2').click(function () {

    let getID = $(this).parent().attr("id")

    $('#' + getID + ' #Дом_2').hide();
    $('#' + getID + ' #Дом_3').show();

});

$('#Дом_3').click(function () {

    let getID = $(this).parent().attr("id")

    $('#' + getID + ' #Дом_3').hide();
    $('#' + getID + ' #Дом_4').show();

});

$('#Дом_4').click(function () {

    let getID = $(this).parent().attr("id")

    $('#' + getID + ' #Дом_4').hide();
    $('#' + getID + ' #Дом_5').show();

});



