$(document).ready(function(){
	
	// foundation js
	$(document).foundation();

	// slider asli zire header
	$('.js__main-slider').slick({
		rtl: true,
		autoplay: true,
		arrows: false
	});

	  // slider gooshte goosfandi
	$('.js__slider-a').slick({
	  	rtl: true,
	  	autoplay: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]	
	});

	  // slider gooshte morghi
	$('.js__slider-b').slick({
		rtl: true,
		// autoplay: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
	});


	  // slider alayeshi
	$('.js__slider-c').slick({
		rtl: true,
		// autoplay: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
	});


	// slider alayeshi
	$('.js__slider-d').slick({
		rtl: true,
		autoplay: true,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 4024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


	// slider alayeshi
	$('.js__slider-e').slick({
	  	rtl: true,
	  	// autoplay: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});


	$('.js__slider-f').slick({
	  	rtl: true,
	  	autoplay: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
	});
	
	$('.js__slider-g').slick({
	  	rtl: true,
	  	autoplay: true,
	  	arrows: false,
		responsive: [
		    {
		      breakpoint: 4024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
	});


  	// tabhaye pishnahe vije
	$('.js__offer-list a').on('click', function(e){
		e.preventDefault();
		$('.js__offer-list a').removeClass('active');
		$(this).addClass('active');
		var eachOfferHref = $(this).attr('href');

		$('.special-offer-tab-wrapper').removeClass('active');
		$('#'+eachOfferHref).addClass('active');
	});

	// remove item cart from box
	$('.js__item-remover').on('click' , function(){
		$(this).parents('.js__shopping-cart-out-wrapper').fadeOut();
	});


	// add remove item cart header
	$('.js__arrow-top').on('click' , function(){
		var eachNumber = parseInt($(this).parent().find('.js__count-number-text').html());
		eachNumber = eachNumber + 1;
		$(this).parent().find('.js__count-number-text').html(eachNumber);
	});

	$('.js__arrow-down').on('click' , function(){
		var eachNumber = parseInt($(this).parent().find('.js__count-number-text').html());
		eachNumber = eachNumber - 1;
		if( eachNumber < 0) {
			parseInt($(this).parent().find('.js__count-number-text').html('0'));
		} else {
			$(this).parent().find('.js__count-number-text').html(eachNumber);
		}
	});


	// compare list remover
	$('.js__compare-list-remover').on('click' , function(){
		$(this).parent().fadeOut();
	})


	// list sort
	$('.js__more-sort-activator').on('click' , function(){
		$('.js__sort-more-item-wrapper').addClass('active');
	});


	// filter exist
	// $('#tinySwitch').on('click' , function(){
	// 	$('.js__not-exist-item').hide();
	// });
});