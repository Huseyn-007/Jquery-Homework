$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("border", "3px solid #0085ff");
     $(this).css("transition", "0.5s");
  });

  $("input").blur(function () {
    $(this).css("border", "2px solid grey");
    $(this).css("transition", "0.5s");
  });

  $('#password').on('keyup', function(){
    var password = $(this).val();
    var strength = 0;

    
    if (password.length >= 4) {
        strength += 5;
    }
    else if (password.length >= 8) {
        strength += 10;
    }
    else if (password.length >= 10) {
        strength += 20;
    }

    var strengthClass;
    switch (strength) {
        case 0:
        case 1:
            strengthClass = "very-weak";
            break;
        case 2:
            strengthClass = "weak";
            break;
        case 3:
            strengthClass = "medium";
            break;
        case 4:
            strengthClass = "strong";
            break;
        case 5:
            strengthClass = "very-strong";
            break;
    }
    $('#passChecker').html(`<hr class='${strengthClass}'>`);
});



});
