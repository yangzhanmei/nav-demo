$(function () {
    $(".liList").hide();
    $(".list > li > a").click(function () {
        $(this).addClass("current").siblings().show().parent().siblings().children("a").removeClass("current").next().hide();
    });
    $("span:hidden").click(function () {
      $(this).parent().hide();
    });
});