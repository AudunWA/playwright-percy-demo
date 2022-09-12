/*
 * ScrollToFixed
 * https://github.com/bigspotteddog/ScrollToFixed
 *
 * Copyright (c) 2011 Joseph Cava-Lynch
 * MIT license
 */
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var m=this;m.$el=a(d);m.el=d;m.$el.data("ScrollToFixed",m);var c=false;var H=m.$el;var I;var F;var k;var e;var z;var E=0;var r=0;var j=-1;var f=-1;var u=null;var A;var g;function v(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");f=-1;E=H.offset().top;r=H.offset().left;if(m.options.offsets){r+=(H.offset().left-H.position().left)}if(j==-1){j=r}I=H.css("position");c=true;if(m.options.bottom!=-1){H.trigger("preFixed.ScrollToFixed");x();H.trigger("fixed.ScrollToFixed")}}function o(){var J=m.options.limit;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function q(){return I==="fixed"}function y(){return I==="absolute"}function h(){return !(q()||y())}function x(){if(!q()){var J=H[0].getBoundingClientRect();u.css({display:H.css("display"),width:J.width,height:J.height,"float":H.css("float")});cssOptions={"z-index":m.options.zIndex,position:"fixed",top:m.options.bottom==-1?t():"",bottom:m.options.bottom==-1?"":m.options.bottom,"margin-left":"0px"};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);H.addClass(m.options.baseClassName);if(m.options.className){H.addClass(m.options.className)}I="fixed"}}function b(){var K=o();var J=r;if(m.options.removeOffsets){J="";K=K-E}cssOptions={position:"absolute",top:K,left:J,"margin-left":"0px",bottom:""};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);I="absolute"}function l(){if(!h()){f=-1;u.css("display","none");H.css({"z-index":z,width:"",position:F,left:"",top:e,"margin-left":""});H.removeClass("scroll-to-fixed-fixed");if(m.options.className){H.removeClass(m.options.className)}I=null}}function w(J){if(J!=f){H.css("left",r-J);f=J}}function t(){var J=m.options.marginTop;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function B(){if(!a.isScrollToFixed(H)||H.is(":hidden")){return}var M=c;var L=h();if(!c){v()}else{if(h()){E=H.offset().top;r=H.offset().left}}var J=a(window).scrollLeft();var N=a(window).scrollTop();var K=o();if(m.options.minWidth&&a(window).width()<m.options.minWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.maxWidth&&a(window).width()>m.options.maxWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.bottom==-1){if(K>0&&N>=K-t()){if(!L&&(!y()||!M)){p();H.trigger("preAbsolute.ScrollToFixed");b();H.trigger("unfixed.ScrollToFixed")}}else{if(N>=E-t()){if(!q()||!M){p();H.trigger("preFixed.ScrollToFixed");x();f=-1;H.trigger("fixed.ScrollToFixed")}w(J)}else{if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}}}else{if(K>0){if(N+a(window).height()-H.outerHeight(true)>=K-(t()||-n())){if(q()){p();H.trigger("preUnfixed.ScrollToFixed");if(F==="absolute"){b()}else{l()}H.trigger("unfixed.ScrollToFixed")}}else{if(!q()){p();H.trigger("preFixed.ScrollToFixed");x()}w(J);H.trigger("fixed.ScrollToFixed")}}else{w(J)}}}}}function n(){if(!m.options.bottom){return 0}return m.options.bottom}function p(){var J=H.css("position");if(J=="absolute"){H.trigger("postAbsolute.ScrollToFixed")}else{if(J=="fixed"){H.trigger("postFixed.ScrollToFixed")}else{H.trigger("postUnfixed.ScrollToFixed")}}}var D=function(J){if(H.is(":visible")){c=false;B()}else{l()}};var G=function(J){(!!window.requestAnimationFrame)?requestAnimationFrame(B):B()};var C=function(){var K=document.body;if(document.createElement&&K&&K.appendChild&&K.removeChild){var M=document.createElement("div");if(!M.getBoundingClientRect){return null}M.innerHTML="x";M.style.cssText="position:fixed;top:100px;";K.appendChild(M);var N=K.style.height,O=K.scrollTop;K.style.height="3000px";K.scrollTop=500;var J=M.getBoundingClientRect().top;K.style.height=N;var L=(J===100);K.removeChild(M);K.scrollTop=O;return L}return null};var s=function(J){J=J||window.event;if(J.preventDefault){J.preventDefault()}J.returnValue=false};m.init=function(){m.options=a.extend({},a.ScrollToFixed.defaultOptions,i);z=H.css("z-index");m.$el.css("z-index",m.options.zIndex);u=a("<div />");I=H.css("position");F=H.css("position");k=H.css("float");e=H.css("top");if(h()){m.$el.after(u)}a(window).bind("resize.ScrollToFixed",D);a(window).bind("scroll.ScrollToFixed",G);if("ontouchmove" in window){a(window).bind("touchmove.ScrollToFixed",B)}if(m.options.preFixed){H.bind("preFixed.ScrollToFixed",m.options.preFixed)}if(m.options.postFixed){H.bind("postFixed.ScrollToFixed",m.options.postFixed)}if(m.options.preUnfixed){H.bind("preUnfixed.ScrollToFixed",m.options.preUnfixed)}if(m.options.postUnfixed){H.bind("postUnfixed.ScrollToFixed",m.options.postUnfixed)}if(m.options.preAbsolute){H.bind("preAbsolute.ScrollToFixed",m.options.preAbsolute)}if(m.options.postAbsolute){H.bind("postAbsolute.ScrollToFixed",m.options.postAbsolute)}if(m.options.fixed){H.bind("fixed.ScrollToFixed",m.options.fixed)}if(m.options.unfixed){H.bind("unfixed.ScrollToFixed",m.options.unfixed)}if(m.options.spacerClass){u.addClass(m.options.spacerClass)}H.bind("resize.ScrollToFixed",function(){u.height(H.height())});H.bind("scroll.ScrollToFixed",function(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");B()});H.bind("detach.ScrollToFixed",function(J){s(J);H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",D);a(window).unbind("scroll.ScrollToFixed",G);H.unbind(".ScrollToFixed");u.remove();m.$el.removeData("ScrollToFixed")});D()};m.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);

/**
 * Custom Scripts
 */
jQuery(document).ready(function($){
    // Menutoggle on mobile
 	$(".menu-toggle").click(function(){
	    $(".menu-expand").slideToggle(300, 'swing');
	});
	
	// Change aria-values on menu toggle
	$('.menu-toggle').on('click', function() {
		var id = $(this).attr('aria-controls');
		
	    if ($(this).attr('aria-expanded') === 'true') { // region is collapsed
	        $(this).attr('aria-expanded', 'false');
	    }
	    else { 
		    $('.menu-toggle').each(function(){
		    	$(this).attr('aria-expanded', 'false');
	    	});
	        
	        $(this).attr('aria-expanded', 'true');
	    } 
    });

    // init Masonry
    var $grid = $('.masonry-grid').masonry({
        // options
        itemSelector: '.grid-item'
    });
    
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    /*
    // Make Facet WP Select responsive according to the span lenght of the corresponding select on window ready
    $(document).on('ready', function(){
        var option_selected_event = $('.facetwp-facet-alle_arrangementer option:selected').text();
        var option_selected_city = $('.facetwp-facet-hele_landet option:selected').text();

        // We need to check if the event exists otherwise there will be JS Error
        if(option_selected_event){
            $("#compute_select_event").html(option_selected_event);
            var span_width_event = $("#compute_select_event").width();

            $(".facetwp-facet-alle_arrangementer select").width(span_width_event);
        }

        // We need to check if the city exists otherwise there will be JS Error
        if(option_selected_city){
            $("#compute_select_city").html(option_selected_city);
            var span_width_city = $("#compute_select_city").width();

            $('.facetwp-facet-hele_landet select').width(span_width_city);
        }
    });

    // Make Facet WP Select responsive according to the span lenght of the corresponding select on select change
    $(document).on('change', '.facetwp-facet-alle_arrangementer select', function(){
        var selected_option_event = $(this).find('option:selected').text();
        $("#compute_select_event").html(selected_option_event);

        span_width_event = $("#compute_select_event").width();
        $(this).width(span_width_event); 

        // Beacuse FacetWP reloads every select we need to check the City width is greater than 0 and set a timeout of minimun treshold of 665 ms otherwise it will not work if lesser
        var span_width_city = $("#compute_select_city").width();
        if(span_width_city > 0){
            setTimeout(
                function(){  
                    $('.facetwp-facet-hele_landet select').width(span_width_city);
                }, 
                665
            );
        }
    });

    // Make Facet WP Select responsive according to the span lenght of the corresponding select on select change
    $(document).on('change', '.facetwp-facet-hele_landet select', function(){
        var selected_option_city = $(this).find('option:selected').text();
        $("#compute_select_city").html(selected_option_city); 
        
        span_width_city = $("#compute_select_city").width();
        $(this).width(span_width_city);

        // Beacuse FacetWP reloads every select we need to check the Event width is greater than 0 and set a timeout of minimun treshold of 665 ms otherwise it will not work if lesser
        var span_width_event = $("#compute_select_event").width();
        if(span_width_event > 0){
            setTimeout(
                function(){  
                    $('.facetwp-facet-alle_arrangementer select').width(span_width_event);
                }, 
                665
            );
        }
    });*/

    // Make it possible to scroll to elemnts when there is a calss of scroll-to-link present
    $(document).on('click', '.scroll-to-link', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-scroll');
        
       $('html, body').animate({
            scrollTop: $("#" + id).offset().top - 95
        }, 'slow');
        
        return false;
    });
	
    // Make Load More button on WordPress Archives bind with the website to work properly dynamically when clicked on to get more posts
    $(document).on('click', '.load-more-button', function(e){
        e.preventDefault();

        var button = $('.load-more-button');
        var button_text = button.children().html();
        var page = button.attr('data-page');
        var max_pages = button.attr('data-max-pages');
        var posts_per_page = button.attr('data-posts-per-page');
        var total_posts = button.attr('data-total-posts');
        var meta_key = button.attr('data-meta-key');
        var type = button.attr('data-type');
        var term_slug = button.attr('data-term-slug');
        var orderby = button.attr('data-orderby');

        button.children().html('Laster...');
        button.attr("disabled","disabled");

        if(parseInt(page) <= parseInt(max_pages)){
            $.ajaxSetup({ cache: false });

            var data = { 
                'action': 'dnd_load_more_button_ajax', 
                'paged': page,
                'posts_per_page': posts_per_page,
                'meta_key': meta_key,
                'type': type,
                'term_slug': term_slug,
                'orderby': orderby,
            };

            $.post(loc.ajax_url, data, function(posts){
                button.children().html(button_text);
                button.attr('data-page', parseInt(page) + 1);
                button.removeAttr('disabled');

                $('#posts-load-more-content').append(posts);

                if(parseInt(page) + 1 > max_pages){
                    button.hide();
                }
            });
        }
        else{
            button.hide();
        }
	});
	
    // Make event sidebar and header fixed on scroll to a certain limit hit > 1020px
    function dnd_fix_elements_on_scroll(){
		// Reinitiate the viewport dynamically;
        viewport = updateViewportDimensions();

        // We need to declare the footer object
        var footer = $('.single-arrangement footer');

        // We need to check the footer object if it exists to avoid errors
        if(footer.length){
            if(viewport.width < 620){
                $('#cta').trigger('detach.ScrollToFixed');
                $('#cta').scrollToFixed({ 
                    marginTop: function(){
                        return 0;
                    },
                    limit: function(){
                        return footer.offset().top;
                    },
                    zIndex: 99999,
                }); 
            } else {
                $('#event-meta').trigger('detach.ScrollToFixed');
                $('#event-meta').scrollToFixed({ 
                    marginTop: function(){
                        return 0;
                    },
                    limit: function(){
                        return footer.offset().top;
                    },
                    zIndex: 99999,
                });
            }
        }
    }

    // Initiate the fixing of elements on scroll
    dnd_fix_elements_on_scroll();

    // Now make fixing of elements also work with resizing of the window
	window.onresize = function(){
		dnd_fix_elements_on_scroll();
	};
});



/**************************
	Sticky menu script
 ************************/

// Sticky Menu JQUery

var el = jQuery("main");
var menu = jQuery("#masthead");
var menuItems = jQuery(".main-navigation > a");
var pos = el.offset().top;
didScroll = false;

jQuery(window).on("scroll", function() {
  didScroll = true;
});

// http://ejohn.org/blog/learning-from-twitter/#postcomment
setInterval(function() {
  if(didScroll) {
    didScroll = false;
      var scrollPos = jQuery(window).scrollTop();
  
  if (scrollPos > (pos - 100)) { //Adjust menu opening
    menu.addClass('sticky');
  } 
  else { 
    menu.removeClass('sticky');
  }; 
  jQuery('.inview').each(function(){
  var itemOffset = Math.abs(jQuery(this).offset().top);
    if (itemOffset > 0 && itemOffset < scrollPos) {
      var menuElm = jQuery(this).attr('id');
      console.log(menuElm);
      menuItems.removeClass("active");
      jQuery("." + menuElm).addClass("active");
    }
  });     
  }
}, 250);