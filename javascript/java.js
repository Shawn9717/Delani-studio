//For toggling on WHAT WE DO
$(document).ready(function() {
    $(".pendo1").click(function() {
        $("#click1").toggle();
        $("#njoga1").toggle();
    });
    $(".pendo2").click(function() {
        $("#njoga2").toggle();
        $("#click2").toggle();
    });
    $(".pendo3").click(function() {
        $("#njoga3").toggle();
        $("#click3").toggle();
    });
});

// For hover effect on PORTFOLIO


var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal 
btn.onclick = function(event) {
    // Validate form for entry
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Name not entered");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Email not entered");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("You have no message to send");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("span#outputName").append(person1Input);

    $('.toast').toast('show');
    event.preventDefault();
}

