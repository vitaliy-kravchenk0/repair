$(document).ready(function(){
    $(".price__discover-1").click(function(){
        $(".modals").css("display", "flex");
    });
    $(".close-block").click(function(){
        $(".modals").css("display", "none");
    });
});