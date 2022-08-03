var $drag = $('.move').draggabilly({ handle: '.GroundMove' });

$("#Дом_1").click(function () {

    $("#Дом_1").css("transform", "scale(0.5, 0.9)");

    console.log($(this).parent().attr("class"))

    setTimeout(function () {
        $("#Дом_1").hide();
        $("#Дом_2").show();
    } , 1000);
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

