$(function () {

    $("tr").each(function (event) {
        const text00 = $(this).prev().children(".first").html();
        const text0 = $(this).children(".first").html();
        const text1 = $(this).next().children(".first").html();
        const text2 = $(this).next().next().children(".first").html();
        if (text0 != "" && $(this).not("item_1").not("item_2")) {
            if (text1 == "") {
                if (text2 == "") {

                    if ($(this).prev().hasClass("item_1")) {
                        $(this).addClass("item_2");
                        $(this).next().addClass("item_2 blank");
                        $(this).next().next().addClass("item_2 blank");
                    } else {
                        $(this).addClass("item_1");
                        $(this).next().addClass("item_1 blank");
                        $(this).next().next().addClass("item_1 blank");
                    }

                    $(this).children("td").not(".last").attr("rowspan", 3);
                    $(this).next().next().children("td").not(".last").remove();
                    $(this).next().children("td").not(".last").remove();



                } else {

                    if ($(this).prev().hasClass("item_1")) {
                        $(this).addClass("item_2");
                        $(this).next().addClass("item_2 blank");
                    } else {
                        $(this).addClass("item_1");
                        $(this).next().addClass("item_1 blank");
                    }

                    $(this).children("td").not(".last").attr("rowspan", 2);
                    $(this).next().children("td").not(".last").remove();

                }
            } else if (!$(this).hasClass("blank")) {

                if ($(this).prev().hasClass("item_1")) {
                    $(this).addClass("item_2");
                } else {
                    $(this).addClass("item_1");
                }
            }
        }
    });

});

$(function () {
    $(".main_contents").click(function (event) {

        console.log("item_");
        var $target = $(event.target).closest(".main_contents");

        if ($target.hasClass("close")) {
            $target.children(".item").fadeIn(200);
            $target.animate({ height: "max-content"});
            $target.addClass("open");
            $target.removeClass("close");
        }else{
            $target.children(".item").fadeOut(200);
            $target.animate({ height: "40px" });
            $target.addClass("close");
            $target.removeClass("open");
        }


    });

});