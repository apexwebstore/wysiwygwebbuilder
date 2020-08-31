/*
 * jQuery Panel Plugin for WYSIWYG Web Builder 11
 * Copyright Pablo Software solutions 2016
 * http://www.wysiwygwebbuilder.com/
 */

(function($)
{
   $.fn.panel = function(options) 
   {
      return this.each(function() 
      {   
         $.panel(this, options);
      });
   };

   $.panel = function(obj, options) 
   {
      var settings = 
      {
         animate: true,
         animationDuration: 200,
         animationEasing: 'swing',
         dismissible: true,
         display: 'push',
         overlay: false,
	 position: 'left',
         toggle: false
      };

      $obj = $(obj);
	
      if (options)
         settings = $.extend(settings, options);

      settings.id = $obj.attr('id');

      var id = settings.id + '_panel';
      var content = $obj.attr('href');
      if (!content)
      {
         content = '#' + $obj.attr('id');
      }

      var $container = $('#container');
      if ($container.length == 0 && settings.display != 'overlay')
      {
         $('body').wrapInner('<div id="container" style="position:relative;margin:0" />');
      }

      var $panel = $('<div />');
      $panel.attr('id', id);
      $panel.css('display', 'none');
      $panel.data('panel', settings);

      if (settings.overlay == true)
      {
         var $overlay = $('<div />');
         $overlay.attr('id', $obj.attr('id') + '_overlay');
         $overlay.attr('class', 'panel_overlay');
         $('body').append($overlay);
         $overlay.click(function(e) { $.panel.hide($panel); });  
      }

      $(content).appendTo($panel).show();

      $('body').append($panel);

      if (settings.toggle)
      {
         $obj.click(function(e) 
         {
            e.preventDefault();
            e.stopPropagation();
            
            if (!$panel.is(':visible')) 
            { 
               $.panel.show($panel);
            } 
            else 
            {                 
               $.panel.hide($panel);
            }       
         });    
      }

      $(document).bind('click keyup', function(e) 
      {
         if (e.type == "keyup" && e.keyCode != 27) 
         {
            return;
         }
         if ($panel.is(':visible') && $panel.data('panel').dismissible) 
         {
	    $.panel.hide($panel);
	 }
      });

      $panel.click(function(e) 
      {
         e.stopPropagation();
      });
   };

   $.panel.show = function($panel)
   {
      var settings = $panel.data('panel');
      var panelWidth = $panel.outerWidth(true);
      var panelHeight = $panel.outerHeight(true);
      var cssBody = {};
      var cssPanel = {};
       
      if ($panel.is(':visible') || settings.isBusy) 
      {
         return;	        
      }      
      settings.isBusy = true;

      $('#' + settings.id).addClass('open');

      if (settings.overlay)
      {
         $('.panel_overlay').fadeIn();
      }

      if (settings.position == 'left') 
      {
         $panel.css({ left: '-' + panelWidth + 'px', right: 'auto' });
         cssBody['margin-left'] = '+=' + panelWidth;
         cssPanel['left'] = '+=' + panelWidth;
      }
      else
      if (settings.position == 'top') 
      {
         $panel.css({ top: '-' + panelHeight + 'px', bottom: 'auto' });
         cssBody['margin-top'] = '+=' + panelHeight;
         cssPanel['top'] = '+=' + panelHeight;
      }
      else
      if (settings.position == 'bottom') 
      {
         $panel.css({ top: 'auto', bottom: '-' + panelHeight + 'px' });
         cssBody['margin-top'] = '-=' + panelHeight;
         cssPanel['bottom'] = '+=' + panelHeight;
      }
      else
      {
         $panel.css({ left: 'auto', right: '-' + panelWidth + 'px' });
         cssBody['margin-left'] = '-=' + panelWidth;
         cssPanel['right'] = '+=' + panelWidth;
      }
      if (settings.animate)
      {
         if (settings.display != 'overlay')
         {
            $('body').animate(cssBody, settings.animationDuration, settings.animationEasing);
         }
         $panel.show().animate(cssPanel, settings.animationDuration, settings.animationEasing, function() 
         {
            settings.isBusy = false;
         });
      }
      else
      {
         if (settings.display != 'overlay')
         {
             $('body').css(cssBody);
         }
         $panel.show().css(cssPanel);
         settings.isBusy = false;
      }
   };

   $.panel.hide = function($panel)
   {
      var settings = $panel.data('panel');
      var panelWidth = $panel.outerWidth(true);
      var panelHeight = $panel.outerHeight(true);
      var cssBody = {};
      var cssPanel = {}
	        
      if ($panel.is(':hidden') || settings.isBusy) 
      {
         return;	        
      }
      settings.isBusy = true;

      $('#' + settings.id).removeClass('open');

      if (settings.overlay)
      {
         $('.panel_overlay').fadeOut();
      }

      if (settings.position == 'left') 
      {
         cssBody['margin-left'] = '-=' + panelWidth;
         cssPanel['left'] = '-=' + panelWidth;
      }
      else
      if (settings.position == 'top') 
      {
         cssBody['margin-top'] = '-=' + panelHeight;
         cssPanel['top'] = '-=' + panelHeight;
      }
      else
      if (settings.position == 'bottom') 
      {
         cssBody['margin-top'] = '+=' + panelHeight;
         cssPanel['bottom'] = '-=' + panelHeight;
      }
      else
      {
         cssBody['margin-left'] = '+=' + panelWidth;
         cssPanel['right'] = '-=' + panelWidth;
      }
      if (settings.animate)
      {
         $panel.animate(cssPanel, settings.animationDuration, settings.animationEasing, function() 
         {
            $panel.hide();
            settings.isBusy = false;
         });
         if (settings.display != 'overlay')
         {
            $('body').animate(cssBody, settings.animationDuration, settings.animationEasing);
         }
      }
      else
      {
         if (settings.display != 'overlay')
         {
            $('body').css(cssBody);
         }
         $panel.css(cssPanel).hide();
         settings.isBusy = false;
      }
   };   
})(jQuery);