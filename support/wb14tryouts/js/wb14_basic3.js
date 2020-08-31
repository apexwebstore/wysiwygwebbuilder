   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#header').offset().top }, 600, 'easeOutQuint');
      });
      $("a[href*='#jumbotron']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#jumbotron').offset().top }, 600, 'easeOutQuart');
      });
      $("a[href*='#product']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#product').offset().top }, 600, 'easeOutQuart');
      });
      $("a[href*='#work-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#work-title').offset().top }, 600, 'easeOutQuart');
      });
      $("a[href*='#awards-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#awards-title').offset().top }, 600, 'easeOutQuart');
      });
      $("a[href*='#footer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#footer').offset().top }, 600, 'easeOutQuart');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
   });
