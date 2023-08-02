$(function () {
  var id_1;
  var id_2;
  let tableData;
  let name;
  let rank;
  console.log("page");

  //ブロック開閉
  $(document).ready(function () {
    $(".block").click(function () {
      $(".block").not(this).removeClass("open");
      $(this).toggleClass("open");
      $(this).prependTo(".monster");
    });
  });

  //名前入力
  $(".Inputbutton_1").click(function (event) {
    var imput = $('input[name="InputName"]').val();
    var data = [];
//処理:
    $.ajax({
      type: "get",
      url: 'data.json',
      dataType: 'json',
      async: false,
    }).then(
      function (json) {
        for (var i = 0; i < json.length; i++) {
          data.push({
            name: json[i].name,
            number: json[i].number,
            table: json[i].table,
            rank: json[i].rank,
          });
          var tmp = Object.values(data[i]);
          data[i] = tmp;
        }
        var status = 0;
        var rank,name;
        for (var i = 0; i < data.length; i++) {
          if (data[i][0] == imput || data[i][1] == imput) {
            name =data[i][0];
            status = data[i][2];
            rank = data[i][3];
          }

        }
//処理:main1部分に結果を表示
if(status != 0){
      $(".main_1").html(
        name +
        "<table class=\"data\" border=\"1\"><tr style=\"font-size:4;\"><th>MHP</th><th>MMP</th><th>ATK</th><th>DEF</th><th>AGL</th><th>MGC</th><th>SPR</th><th>TOTAL</th></tr></table>" +
        status +
        rank
      )
        .css("background-color", "aquamarine")
        .css("box-shadow", "4px 4px 4px gray");

      }}

    )
  });

  //名前入力2
  $(".Inputbutton_2").click(function (event) {
    var imput = $('input[name="InputName"]').val();
    var data = [];
//処理:
    $.ajax({
      type: "get",
      url: 'data.json',
      dataType: 'json',
      async: false,
    }).then(
      function (json) {
        for (var i = 0; i < json.length; i++) {
          data.push({
            name: json[i].name,
            number: json[i].number,
            table: json[i].table,
            rank: json[i].rank,
          });
          var tmp = Object.values(data[i]);
          data[i] = tmp;
        }
        var status = 0;
        var rank,name;
        for (var i = 0; i < data.length; i++) {
          if (data[i][0] == imput || data[i][1] ==imput) {
            name=data[i][0]
            status = data[i][2];
            rank = data[i][3];
          }

        }
//処理:main2部分に結果を表示
if(status != 0){
      $(".main_2").html(
        name +
        status +
        rank
      )
        .css("background-color", "greenyellow")
        .css("box-shadow", "4px 4px 4px gray");

      }}

    )
  });

  //ボタン1

  $(".button_1").click(function (event) {
    var $target = $(event.target).closest(".sub");

    id_1 = $target.attr("class").split(" ")[1];
    console.log(id_1);

    $.ajax({
      url: 'data.json',
      dataType: 'json',
      success: function (data) {
        tableData = data[id_1].table;
        name = data[id_1].name;
        rank = data[id_1].rank;
      }
    }).done(function () {

      $(".main_1").html(
        name +
        "<table class=\"data\" border=\"1\"><tr style=\"font-size:4;\"><th>MHP</th><th>MMP</th><th>ATK</th><th>DEF</th><th>AGL</th><th>MGC</th><th>SPR</th><th>TOTAL</th></tr></table>" +
        tableData +
        rank
      )
        .css("background-color", "aquamarine")
        .css("box-shadow", "4px 4px 4px gray");
    });
  });


  $(".button_2").click(function (event) {
    var $target = $(event.target).closest(".sub");

    id_2 = $target.attr("class").split(" ")[1];
    console.log(id_2);

    $.ajax({
      url: 'data.json',
      dataType: 'json',
      success: function (data) {
        tableData = data[id_2].table;
        name = data[id_2].name;
        rank = data[id_2].rank;
      }
    }).done(function () {

      $(".main_2")
        .html(name + tableData + rank)
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

  $(".rank").click(function () {
    if($(".rank_table").css("visibility") == "visible"){
      $(".rank_table").css({
        "visibility":"hidden"
      });
    }else{
      $(".rank_table").css({
        "visibility":"visible"
      });
    }

});
})