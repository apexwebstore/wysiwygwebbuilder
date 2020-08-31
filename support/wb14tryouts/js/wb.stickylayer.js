/*
 * jQuery Sticky Layer Plugin for WYSIWYG Web Builder 10
 * Copyright Pablo Software solutions 2014
 * http://www.wysiwygwebbuilder.com/
 */

(function($)
{
   $.fn.stickylayer = function(options) 
   {
      return this.each(function() 
      {   
         $.stickylayer(this, options);
      });
   };

   $.stickylayer = function(obj, options) 
   {
      var settings = 
      {
	orientation: 1,
	position: [0, 0],
        delay: 0,
        keepOriginalPos: false
      };

      $obj = $(obj);
	
      if (options)
         settings = $.extend(settings, options);

      settings.top = $obj.offset().top;
      settings.left = $obj.offset().left;
 
      if (settings.delay == 0 && settings.orientation < 5 && !settings.keepOriginalPos)
      {
         $obj.css('position', 'fixed');
        
         switch(settings.orientation)
         {
            case 1:
               $obj.css('left', settings.position[0]);
               $obj.css('top', settings.position[1]);
               break;

            case 2:
               $obj.css('left', 'auto');
               $obj.css('right', settings.position[0]);
               $obj.css('top', settings.position[1]);
               break;

            case 3:
               $obj.css('left', 'auto');
               $obj.css('top', 'auto');
               $obj.css('right', settings.position[0]);
               $obj.css('bottom', settings.position[1]);
               break;

            case 4:
               $obj.css('top', 'auto');
               $obj.css('left', settings.position[0]);
               $obj.css('bottom', settings.position[1]);
               break;
          }
      }
      else
      {
         $obj.css('position', 'absolute');
 
         $.stickylayer.updatePosition($obj, settings);

         var event = 'scroll.' + $obj.attr('id') + ' resize.' + $obj.attr('id');
         settings.id = $obj.attr('id');

         jQuery(window).bind(event, settings, function()
         {
            $obj = $('#' + settings.id);
            $.stickylayer.updatePosition($obj, settings);
         })
      }
   };

   $.stickylayer.updatePosition = function($obj, settings)
   {
      if (settings.delay > 0)
      {
         $obj.stop();
      }

      var $window = jQuery(window);

      var x = $window.scrollLeft();
      var y = $window.scrollTop();

      switch (settings.orientation)
      {
         case 1:
            x = x + settings.position[0];
            y = y + settings.position[1];
            break;

         case 2:
            x = x + $window.width() - $obj.outerWidth() - settings.position[0];
            y = y + settings.position[1];
            break;

         case 3:
            x = x + $window.width() - $obj.outerWidth() - settings.position[0];
            y = y + $window.height() - $obj.outerHeight() - settings.position[1];
            break;

         case 4:
            x = x + settings.position[0];
            y = y + $window.height() - $obj.outerHeight() - settings.position[1];
            break;

         case 5:
            x = x + ($window.width() - $obj.outerWidth())/2 + settings.position[0];
            y = y + settings.position[1];
            break;

         case 6:
            x = x + $window.width() - $obj.outerWidth() - settings.position[0];
            y = y + ($window.height() - $obj.outerHeight())/2 + settings.position[1];
            break;

         case 7:
            x = x + ($window.width() - $obj.outerWidth())/2 + settings.position[0];
            y = y + $window.height() - $obj.outerHeight() - settings.position[1];
            break;

         case 8:
            x = x + settings.position[0];
            y = y + ($window.height() - $obj.outerHeight())/2 + settings.position[1];
            break;

         case 9:
            x = x + ($window.width() - $obj.outerWidth())/2 + settings.position[0];
            y = y + ($window.height() - $obj.outerHeight())/2 + settings.position[1];
            break;
      }

      if (settings.keepOriginalPos && settings.left > x) 
      {
          x = settings.left;
      }

      if (settings.keepOriginalPos && settings.top > y) 
      {
          y = settings.top;
      }

      if (settings.delay > 0)
      {
         $obj.animate({left:x, top:y}, settings.delay);   
      }
      else
      {
         $obj.css({left:x+'px', top:y+'px'});
      }
   };
})(jQuery);