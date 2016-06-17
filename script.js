$(document).ready(function(){
	$("#newQuote").click(function()
	{

		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) 
		{
			$("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
		});

	});
    $("p").on({
        mouseenter: function(){
            $(this).css("color", "red");
        },
        mouseleave: function(){
            $(this).css("color", "black");
        },
        click: function(){
            $(this).hide();
        }
    });

	
});