   
   $(document).ready(function()
   {
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#service_container']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#service_container').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#portfolio1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio1').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#reviews-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#reviews-title').offset().top-60 }, 600, 'easeInCubic');
      });
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#newsletter').offset().top-60 }, 600, 'easeInCubic');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeInCubic');
      });
      $("#wb_ResponsiveMenu1 ul li a").click(function(event)
      {
         $("#wb_ResponsiveMenu1 input").prop("checked", false);
      });
   });
