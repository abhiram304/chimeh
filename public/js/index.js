(function(){
 
	
	
	$("#unavailable, #unavailable-2").click(function() {
		$("#coming-soon-msg").css("display", "none");
		$("#unavailable-msg").slideDown(100);
	});
	
	$("#coming-soon").click(function() {
		$("#unavailable-msg").css("display", "none");
		$("#coming-soon-msg").slideDown(100);
	});
	
	$(".closeAlert").click(function() {
		$("#unavailable-msg, #coming-soon-msg").fadeOut("fast");
	});
	
  $('dd').filter(':nth-child(n+4)').addClass('hide');

  $('dl').on('click', 'dt', function() {
      $(this).next().slideToggle(200);
    });
  
  $('button').on('click',function(e) {
	    if ($(this).hasClass('grid')) {
	        $('#container ul').removeClass('list').addClass('grid');
	    }
	    else if($(this).hasClass('list')) {
	        $('#container ul').removeClass('grid').addClass('list');
	    }
	});
 })();

