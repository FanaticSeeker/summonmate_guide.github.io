$(function () {


    $(".main_contents").click(function (event) {

        var $target = $(event.target).closest(".main_contents");
        if ($target.css("height") == "700px") {
            $target.children(".monster").fadeOut(300, function () {
                $target.animate({ height: "80px", width: "200px" }, 30, "linear");
            });


        } else {
            $target.animate({ height: "700px", width: "630px" }, 30, "linear", function () {

                $target.children(".monster").fadeIn(700);
            });
        }
    });

});