$(function () {
  var id;
  let tables;
  let name;
  console.log("page");

  $(".category_contents").click(function (event) {
    var $target = $(event.target).closest(".category");
    var sub_height = $target.find(".category_contents").height;
    console.log("category");
    console.log(sub_height);

    $.when(
      $target.prependTo(".monster"),
      $target.animate({
        "height": sub_height,
        "width": "60%"
      })).done(function () {
        $target.find(".sub").css("display", "block");
        $target.find(".button_3").css("display", "block");
      })
    $target.addClass("selected");


    $(".category").css("padding", "0 0 10px 10px");

    $(".category").not($target).css({ "height": "max-content", "width": "30%" });
    $(".category").not($target).removeClass("selected");
    $(".category").not($target).find(".sub").css("display", "none");
    $(".category").not($target).find(".button_3").css("display", "none");

  }

  );



  $(".button_1").click(function (event) {
    var $target = $(event.target).closest(".sub");

    id = $target.attr("class").split(" ")[1];
    console.log(id);

    $.ajax({
      url: 'data.json',
      dataType: 'json',
      success: function (data) {
        tables = data[id].table;
        name = data[id].name;
      }
    }).done(function () {

      $(".main_1")
        .html(
          name +
          "<table class=\"data\" border=\"1\"><tr style=\"font-size:4;\"><th>MHP</th><th>MMP</th><th>ATK</th><th>DEF</th><th>AGL</th><th>MGC</th><th>SPR</th><th>TOTAL</th></tr></table>" +
          tables +
          "<br><button class=\"rank\">順位を表示</button>"
        )
        .css("background-color", "aquamarine")
        .css("box-shadow", "4px 4px 4px gray");

    });

  });

  $(".button_2").click(function (event) {
    var $target = $(event.target).closest(".sub");

    id = $target.attr("class").split(" ")[1];
    console.log(id);

    $.ajax({
      url: 'data.json',
      dataType: 'json',
      success: function (data) {
        tables = data[id].table;
        name = data[id].name;
      }
    }).done(function () {

      $(".main_2")
        .html(name + tables + "<br><button class=\"rank\">順位を表示</button>")
        .css("background-color", "greenyellow")
        .css("box-shadow", "4px 4px 4px gray");

    });
  });

  $(".reset").click(function (event) {
    $(".main_1")
      .html("1番目")
      .css("background-color", "gray")
      .css("box-shadow", "0 0 0");

    $(".main_2")
      .html("2番目")
      .css("background-color", "gray")
      .css("box-shadow", "0 0 0");
  });


  $(".button_3").click(function (event) {
    var $close = $(event.target).parent();
    if ($close.hasClass("category")) { console.log("ok"); }

    $close.css({ "height": "max-content", "width": "30%" });
    $close.find(".sub").css("display", "none");
    $close.find(".button_3").css("display", "none");


  });

});