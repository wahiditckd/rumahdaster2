//event pada saat link di klik
$('.page-scroll').on ('click', function(e) {
	//console.log('ok')

	//ambil isi href
	var tujuan=$(this).attr('href');
	
	//tangkap elemen ybs
	var elemenTujuan=$(tujuan);
	//console.log($('body').scrolltop());

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top-50

	}, 10000,'easingInOutExpo');

	e.prevenDefault();
	
	});
//parallax
//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	//jumbotron

	$('.jumbotron img').css({

	'transform':'translate(0px,'+wScroll/4 +'%)'
});

	$('.jumbotron h1').css({

	'transform':'translate(0px,'+wScroll/2 +'%)'
});

	$('.jumbotron p').css({

	'transform':'translate(0px,'+wScroll/1.2 +'%)'
});

	//portfolio
	if(wScroll > $('.portfolio').offset().top - 300) {
		$('.portfolio .thumbnail').each(function(i) {
     		setTimeout(function() {
     			//$('.portfolio .thumbnail').addClass('muncul');
     			$('.portfolio .thumbnail').eq(i).addClass('muncul');
     			//console.log('ok');
     		}, 300 * (i+1));
		});
	
		//
			//setTimeout(function(){
				
				//
				}

//}, 2000);
//});
			//},2000)

			
		
		//console.log('ok');
		//$('.portfolio .thumbnail').addClass('muncul');

	
	

});
