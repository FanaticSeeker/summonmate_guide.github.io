$(function () {

    $("tr").each(function (event) {
        const text0 = $(this).children(".first").html();
        const text1 = $(this).next().children(".first").html();
        const text2 = $(this).next().next().children(".first").html();

if(text0 == ""){
    if ($(this).prev().hasClass("item_1")) {
        $(this).addClass("item_2");
    } else {
        $(this).addClass("item_1");
    }

}

    });
});