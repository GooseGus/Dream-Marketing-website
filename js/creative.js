

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
  


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    //corrects logo color depending on page scroll position
	
    $( "#mydiv" ).hasClass( "foo" )

    $(window).scroll(function (event) {
        if($(window).width() > 768)
        {
            checkAffix()
        }
    });

    $( window ).resize(function() {
        if($(window).width() <= 768){
            $("#logoDMIalt").css("display", "block");
            $("#logoDMI").css("display", "none");
        }else{
            checkAffix()
        }
    });

    




})(jQuery); // End of use strict


function checkAffix() {
    if($('.navbar-default').hasClass( "affix")) {
        $("#logoDMIalt").css("display", "block");
        $("#logoDMI").css("display", "none");


    }else{
        $("#logoDMIalt").css("display", "none");
        $("#logoDMI").css("display", "block");
    }             // Function returns the product of a and b
  }