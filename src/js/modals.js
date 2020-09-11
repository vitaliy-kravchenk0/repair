$(document).ready(function(){
    $(".price__discover-1").click(function(){
        $(".modals").addClass("modals__dblock");
    });
    $(".close-block").click(function(){
        $(".modals").removeClass("modals__dblock");
    });
});