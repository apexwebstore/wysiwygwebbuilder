   
   var playerYouTube1;
   function onYouTubeIframeAPIReady() {
      playerYouTube1 = new YT.Player('YouTube1', {
         events: {
         }
      });
   }
   
   $(document).ready(function()
   {
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#newsletter').offset().top-60 }, 600, 'easeInCubic');
      });
      $('#MegaMenu1 .submenu ul li h2 a').addClass('ui-widget-header');
      $('#MegaMenu1 .submenu ul li a').hover(function()
      {
         $(this).addClass('ui-state-hover');
      }, function()
      {
         $(this).removeClass('ui-state-hover');
      });
      $('.ui-state-default').hover(function()
      {
         $(this).addClass('ui-state-hover');
      }, function()
      {
         $(this).removeClass('ui-state-hover');
      });
      $('#MegaMenu1 li').hover(function()
      {
         var top = $(this).find('.button').outerHeight();
         $(this).find('.submenu').css( {'top': top });
         $(this).find('.submenu').show();
         var maxWidth = 0;
         $(this).find('ul').each(function()
         {
            $(this).find('li').each(function()
            {
               $(this).css('width', 'auto');
               if ($(this).width() > maxWidth)
                  maxWidth = $(this).width();
            });
         });
         $(this).find('ul').each(function()
         {
            $(this).find('li').width(maxWidth);
            $(this).css({'width' : maxWidth+4});
         });
         if ($(this).find('.row').length > 0 )
         {
            var maxRowWidth = 0;
            $(this).find('.row').each(function()
            {
               var width = 0;
               $(this).find('ul').each(function()
               {
                  width += $(this).width();
               });
               if (width > maxRowWidth)
               {
                  maxRowWidth = width;
               }
            });
            $(this).find('.submenu').css({'width' : maxRowWidth});
            $(this).find('.row:last').css({'margin': '0'});
         }
         else
         {
            var width = 0;
            $(this).find('ul').each(function()
            {
               width += $(this).width();
            });
            $(this).find('.submenu').css({'width' : width});
         }
         $(this).find('.submenu').slideDown();
      }, function()
      {
         $(this).find('.submenu').hide();
      })
      $('#MegaMenu1 li .submenu').hide();
      $('#MegaMenu1-nav').click(function()
      {
         $('#wb_MegaMenu1').removeClass('open');
      });
      $('#MegaMenu1-hamburger').click(function()
      {
         $('#wb_MegaMenu1').addClass('open');
      });
   });
