   
   $(document).ready(function()
   {
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top }, 600, 'easeOutSine');
      });
      $("#Carousel1").bootstrapcarousel({interval:3000});
      $("a[href*='#galleryGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_galleryGrid').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#services').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#team-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_team-title').offset().top }, 600, 'easeOutSine');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[data-rel='gallery']").attr('rel', 'gallery');
      $("#gallery").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
