   
   $(document).ready(function()
   {
      $('#wb_tipIcon').addClass('visibility-hidden');
      $('#wb_tipHeading1').addClass('visibility-hidden');
      $('#wb_tipHeading2').addClass('visibility-hidden');
      $('#wb_reviewsText').addClass('visibility-hidden');
      $("#intro").bootstrapcarousel({interval:3000});
      $("a[href*='#reviews']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#reviews').offset().top-60 }, 600, 'easeInCubic');
      });
      $("a[href*='#newtitles1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_newtitles1').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#favorites']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_favorites').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#newsletter').offset().top-60 }, 600, 'easeOutCirc');
      });
      var $overlaymenu = $('#OverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#OverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      function tipBookmarkScroll()
      {
         var $obj = $("#wb_tipBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_tipIcon', 'puff-in', 0, 500);
            AnimateCss('wb_tipHeading1', 'animate-fade-in-up', 500, 500);
            AnimateCss('wb_tipHeading2', 'animate-fade-in-up', 1000, 500);
         }
      }
      tipBookmarkScroll();
      $(window).scroll(function(event)
      {
         tipBookmarkScroll();
      });
      function reviewsBookmarkScroll()
      {
         var $obj = $("#wb_reviewsBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_reviewsText', 'animate-fade-in-up', 0, 800);
         }
      }
      reviewsBookmarkScroll();
      $(window).scroll(function(event)
      {
         reviewsBookmarkScroll();
      });
   });
   
   $(document).ready(function()
   {
      $('.carousel').each(function () 
      {
           var $carousel = $(this);
           var hammertime = new Hammer(this, 
           {
               recognizers: [
                   [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
               ]
           });
           hammertime.on('swipeleft', function () 
           {
               $carousel.bootstrapcarousel('next');
           });
           hammertime.on('swiperight', function () 
           {
               $carousel.bootstrapcarousel('prev');
           });
       });
   });
   
   $(document).ready(function()
   {
     $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 600: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
   });
