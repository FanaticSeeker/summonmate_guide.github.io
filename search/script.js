$(function () {
    $(".start").click(function (event) {
        var data = [];
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function (jsonData) {
                const qty = Object.keys(jsonData).length;
                for (var i = 0; i < qty; i++) {
                    data.push({
                        word: jsonData[i].word,
                        info: jsonData[i].info
                    });
                }

                const inputWord = document.getElementById("word").value;
                const res = $.grep(data,function(n){ return n.word == inputWord});
                if(res[0] != null){

                    console.log(res[0].info);
                    $(".result").prepend("<div class=\"resultBox\"><p><span style=\"font-size:26px\">"+res[0].word+"</span>"+res[0].info+"</p></div><br>");
                    $(".resultBox:hidden").slideToggle();

                }else{
                    console.log("not found");
                }

            }
        });




    });

});