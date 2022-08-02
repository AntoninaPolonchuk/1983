var $drag = $('.move').draggabilly({})

let house;

//$(document).ready(function () {
//    $("#Дом_2").hide();
//    $("#Дом_3").hide();
//    $("#Дом_4").hide();
//    $("#Дом_5").hide();
//    house = 1;
//});


    $("#Дом_1").click(function () {
        $("#Дом_1").hide();
        $("#Дом_2").show();

    });

$("#Дом_2").click(function () {
    $("#Дом_2").hide();
    $("#Дом_3").show();

});

$("#Дом_3").click(function () {
    $("#Дом_3").hide();
    $("#Дом_4").show();

});

$("#Дом_4").click(function () {
    $("#Дом_4").hide();
    $("#Дом_5").show();

});

