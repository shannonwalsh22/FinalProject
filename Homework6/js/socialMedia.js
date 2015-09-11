$(document).ready(function(){

	$("#topDIV").animate({
		top:"-=220px"
	}, 1000);

	$("#bottomDIV").animate({
		bottom:"-=220px"
	}, 1000);

	//This will change the image from a ball to an elephant. 
	$("#link").click(function() {
	    $("#ball").fadeOut(1000, function() {
	    $("#ball").attr("src",$("#link").attr("href"));
	    }).fadeIn(1000);
	    return false;
	});

	//These divs will change color upon being clicked 
	$("#topDIV").on("click", function() {
    $(this).css("background", "black");
	})

	$("#bottomDIV").on("click", function() {
    $(this).css("background", "orange");
	})

	$("button").click(function(){
        $("#valentines").animate({
            right: '550px',
            opacity: '0.2',
            height: '150px',
            width: '220px'
        });
    });

	//Image swap from yes to no!
		      var sourceSwap = function () {
		        var $this = $(this);
		        var newSource = $this.data('alt-src');
		        $this.data('alt-src', $this.attr('src'));
		        $this.attr('src', newSource);
		    }

		    $(function() {
		        $('img[data-alt-src]').each(function() { 
		            new Image().src = $(this).data('alt-src'); 
		        }).hover(sourceSwap, sourceSwap); 
		    });


});
