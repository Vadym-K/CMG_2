$(document).on('ready', function(){

	$(".hamburger-icon-menu").on('click', function(){
		var $this = $(this).parents(".icon-header_top");

		if($this.hasClass("open_hamburger-icon-menu")){
			$this.removeClass("open_hamburger-icon-menu");
			$(".icon-header_top").removeClass("open_hamburger-icon-menu");
		} else {
			$this.addClass('open_hamburger-icon-menu');
		}
	});

	$(".wrapper").click(function(event) {
		if(!$(event.target).closest('.list, .hamburger-icon-menu').length) {
			if($(".icon-header_top").hasClass('open_hamburger-icon-menu')) {
				$(".icon-header_top").removeClass('open_hamburger-icon-menu');
			}
		}
	});

	$(".dots-icon-menu").on('click', function(){
		var $this = $(this).parents(".icon-header_top");

		if($this.hasClass("open_dots-icon-menu")){
			$this.removeClass("open_dots-icon-menu");
		} else {
			$this.addClass('open_dots-icon-menu');
		}
	});

	$(".wrapper").click(function(event) {
		if(!$(event.target).closest('.sprite-menu, .dots-icon-menu').length) {
			if($(".icon-header_top").hasClass('open_dots-icon-menu')) {
				$(".icon-header_top").removeClass('open_dots-icon-menu');
			}
		}
	});

	$(".form-star").on('click', function(){
		var $this = $(this).parents(".icon-header_top");

		if($this.hasClass("open_form-star")){
			$this.removeClass("open_form-star");
		} else {
			$this.addClass('open_form-star');
		}
	});

	$(".wrapper").click(function(event) {
		if(!$(event.target).closest('.page_2_login-form, .form-star').length) {
			if($(".icon-header_top").hasClass('open_form-star')) {
				$(".icon-header_top").removeClass('open_form-star');
			}
		}
	});

	$(".avail").on('click', function(){
		var $this = $(this).parents(".btn-tb");

		if($this.hasClass("open_avail")){
			$this.removeClass("open_avail");
		} else {
			$this.addClass('open_avail');
		}
	});

	$(".wrapper").click(function(event) {
		if(!$(event.target).closest('.avail, .ava-box').length) {
			if($(".btn-tb").hasClass('open_avail')) {
				$(".btn-tb").removeClass('open_avail');
			}
		}
	});
	
	$(".rotate").on('click', function(){
		var $this = $(this).parents(".search-block");

		if($this.hasClass("open_rotate")){
			$this.removeClass("open_rotate");
		} else {
			$this.addClass('open_rotate');
		}
	});

	 $(".wrapper").on('click', function(event) {
	 	if(!$(event.target).closest('.form-group-block, .rotate').length) {
	 		if($(".search-block").hasClass('open_rotate')) {
	 			$(".search-block").removeClass('open_rotate');
	 		}
	 	}
	 });

	 $(".owl-carousel").owlCarousel({
	 	loop:true,
	 	margin: 60,
	 	nav:true,
	    autoplay:true,
	    autoplayTimeout:2000,
	    smartSpeed:1000,
	 	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	 	responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	    }
	 });

	 $(".slide_owl_block").owlCarousel({
	 	loop:true,
	 	margin: 0,
	 	 nav:true,  
	     autoplay:true,
	     autoplayTimeout:2000,
	     smartSpeed:1000,
	 	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	 	responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	    }
	 });

	             //------page_2-----------
	$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
	});
});

