   
   $(document).ready(function()
   {
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#home').offset().top-50 }, 600, 'easeInCubic');
      });
      $("a[href*='#banner']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner').offset().top-50 }, 600, 'easeInCubic');
      });
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top-50 }, 600, 'easeInCubic');
      });
      $("a[href*='#infoBlock2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock2').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#reviews']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#reviews').offset().top-50 }, 600, 'easeInCubic');
      });
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#newsletter').offset().top-50 }, 600, 'easeInCubic');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top-50 }, 600, 'easeInCubic');
      });
      $("#headerMenu").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'right', toggle: true});
   });
