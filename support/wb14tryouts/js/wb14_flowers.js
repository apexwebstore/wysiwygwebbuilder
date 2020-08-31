   
   $(document).ready(function()
   {
      $('#wb_service-text').addClass('visibility-hidden');
      $('#contact-text').addClass('visibility-hidden');
      $('#wb_flowerIcon').addClass('visibility-hidden');
      $('#wb_flowerHeading1').addClass('visibility-hidden');
      $('#wb_flowerHeading2').addClass('visibility-hidden');
      $('#wb_portfolio-image1').addClass('visibility-hidden');
      $('#wb_portfolio-image2').addClass('visibility-hidden');
      $('#wb_portfolio-image3').addClass('visibility-hidden');
      $('#wb_portfolio-image4').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.headerMenu-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#tips']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_tips').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      function servicesScroll()
      {
         var $obj = $("#wb_services");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      servicesScroll();
      $(window).scroll(function(event)
      {
         servicesScroll();
      });
      $("a[href*='#gallery']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_gallery').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCirc');
      });
      function contactScroll()
      {
         var $obj = $("#wb_contact");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('contact-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      contactScroll();
      $(window).scroll(function(event)
      {
         contactScroll();
      });
      $("a[href*='#faq']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_faq').offset().top }, 600, 'easeOutCirc');
      });
      function flowerBookmarkScroll()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_flowerIcon', 'puff-in', 0, 500);
            AnimateCss('wb_flowerHeading1', 'animate-fade-in-up', 500, 500);
            AnimateCss('wb_flowerHeading2', 'animate-fade-in-up', 1000, 500);
         }
      }
      flowerBookmarkScroll();
      $(window).scroll(function(event)
      {
         flowerBookmarkScroll();
      });
      $("#faqAccordion").accordion(
      {
         event: 'click',
         animate: 'linear',
         header: 'h3',
         heightStyle: 'content'
      });
      function Bookmark1Scroll()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_portfolio-image1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_portfolio-image2', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_portfolio-image3', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_portfolio-image4', 'animate-fade-in-up', 1500, 1000);
         }
      }
      Bookmark1Scroll();
      $(window).scroll(function(event)
      {
         Bookmark1Scroll();
      });
      SetStyle('Card1', 'initially-hidden');
      SetStyle('Card2', 'initially-hidden');
      SetStyle('Card3', 'initially-hidden');
      SetStyle('Card4', 'initially-hidden');
      SetStyle('Card5', 'initially-hidden');
      SetStyle('Card6', 'initially-hidden');
      SetStyle('wb_portfolio-image1', 'initially-hidden');
      SetStyle('wb_portfolio-image2', 'initially-hidden');
      SetStyle('about-text', 'initially-hidden');
      SetStyle('contact-text', 'initially-hidden');
      SetStyle('location-text', 'initially-hidden');
      SetStyle('wb_service-text', 'initially-hidden');
      SetStyle('location-icon1', 'initially-hidden');
      SetStyle('location-icon2', 'initially-hidden');
      SetStyle('location-icon3', 'initially-hidden');
      SetStyle('location-icon4', 'initially-hidden');
      SetStyle('location-icon5', 'initially-hidden');
      SetStyle('JavaScript1', 'initially-hidden');
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_services,#wb_flowerGrid,#wb_contact').css('background-attachment', 'scroll');
      }
   $("a[data-rel^='lightbox-magnificpopup']").magnificPopup({ type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
