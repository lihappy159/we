window.onload=function(){
	$('#nav-img').click(function(){
		$('.nav-pop').toggleClass('none');
	})
	$('.nav-pop li').click(function(){
		$('.nav-pop').addClass('none');
	})
	$('.lang').click(function(){

		$('.lang-show').toggleClass('show');
		if($('.lang-show').hasClass('show')){
			$('.lang-list').show();
		}else{
			$('.lang-list').hide();
		}
	})
	$('.lang-list li').click(function(){
		$('.lang-text').text($(this).text());
		$('.lang-list').hide();
	})
}
window.onresize=function(){
	$('.nav-pop').addClass('none');
}

  