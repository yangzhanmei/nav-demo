$(function () {
   $(".list > li > a").click(function () {
       $(this).addClass("current").parent().siblings().children("a").removeClass("current");
   })
});