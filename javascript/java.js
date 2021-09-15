//For toggling on WHAT WE DO
$(document).ready(function() {
    $(".pendo1").click(function() {
        $("#njoga1").slideToggle();
        $("#click").hide();
    });
    $(".pendo2").click(function() {
        $("#njoga2").slideToggle();
        $("#click2").hide(fast);
    });
    $(".pendo3").click(function() {
        $("#njoga3").slideToggle();
        $("#click3").hide(fast);
    });
    //Howver effect on portfolio images
    $(".PORTFOLIO img").hover(function() {
        $(".col-3 p-4 img").addclass("picture");
        $(".pendo9").show();
    });
});

 
