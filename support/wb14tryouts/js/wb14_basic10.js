   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#projects-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_projects-title').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#related-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_related-title').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#team-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_team-title').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeOutSine');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("#Carousel1").on('slid.bs.carousel', function(e)
      {
         var index = $(e.relatedTarget).index();
         switch(index)
         {
            case 0:
               $('#Carousel2').bootstrapcarousel(0);
               break;
            case 1:
               $('#Carousel2').bootstrapcarousel(1);
               break;
            case 2:
               $('#Carousel2').bootstrapcarousel(2);
               break;
            case 3:
               $('#Carousel2').bootstrapcarousel(3);
               break;
         }
      });
      $("#Carousel1").bootstrapcarousel({interval:0});
      $.fn.bootstrapcarousel.Constructor.TRANSITION_DURATION = 0;
      $("#Carousel2").bootstrapcarousel({interval:0});
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
   });
