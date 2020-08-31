   
   $(document).ready(function()
   {
      $("a[href*='#intro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#intro').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#mosaic']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#mosaic').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#details']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#details').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#contact-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact-title').offset().top }, 600, 'easeOutSine');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
   });
