/*
 * jQuery Overlay Plugin for WYSIWYG Web Builder 14
 * Copyright Pablo Software solutions 2018
 * http://www.wysiwygwebbuilder.com/
 */

(function($)
{
   $.fn.overlay = function(options) 
   {
      return this.each(function() 
      {   
         $.overlay(this, options);
      });
   };

   $.overlay = function(obj, options) 
   {
      var data = 
      {
         hideTransition: false
      };

      $overlay = $(obj);
      $overlay.appendTo(document.body);
	
      if (options)
         data = $.extend(data, options);

      data.overflow = $(document.body).css('overflow');
      data.transitionsEventName = 'transitionend';
      data.transitionsSupported = false;
      if ('transition' in document.documentElement.style)
      {
         data.transitionsSupported = true;
      }
      else
      if ('WebkitTransition' in document.documentElement.style)
      {
         data.transitionsSupported = true;
   	 data.transitionsEventName = 'webkitTransitionEnd';
      }

      $overlay.data('overlay', data);

      $overlay.find('.close-button').on('click', function(e)
      {
         $.overlay.hide($overlay);
         return false;
      });

      $overlay.find('a').on('click', function(e)
      {
         var href = $(this).attr('href');
 	 if (href != '#')
	 { 
            $.overlay.hide($overlay);
         }
      });
    
      $(document).bind('keyup', function(e) 
      {
         if (e.type == "keyup" && e.keyCode != 27) 
         {
            return;
         }
         if ($overlay.is(':visible')) 
         {
	    $.overlay.hide($overlay);
	 }
      });
   };

   $.overlay.show = function($overlay)
   {
      var data = $overlay.data('overlay');
     
      $(document.body).css('overflow' ,'hidden');
      $overlay.addClass('show');
      $overlay.css('z-index', '9999');
   };

   $.overlay.hide = function($overlay)
   {
      var data = $overlay.data('overlay');

      function onEndTransition(e)
      {
         if (data.transitionsSupported)
         {
            $overlay.off(data.transitionsEventName, onEndTransition);
         }
         $overlay.removeClass('hide');
         setTimeout(function(){ $overlay.css('z-index', '-1'); }, 1000);
      };
      
      $(document.body).css('overflow', data.overflow);
      $overlay.removeClass('show');

      if (data.hideTransition)
      {
         $overlay.addClass('hide');
         if (data.transitionsSupported)
         {
            $overlay.on(data.transitionsEventName, onEndTransition);
         }
         else 
         {
            onEndTransition();
         }
      }
   };   
})(jQuery);