/*
 * jQuery Photo Collage Plugin for WYSIWYG Web Builder 15
 * Copyright Pablo Software solutions 2019
 * http://www.wysiwygwebbuilder.com/
 */
(function($)
{
   $.fn.photocollage = function(options) 
   {
      var defaults = 
      {
         matrix: '2,0,1,0,0,1,1,1,1',
         padding: 2,
         effect: 'fade',
         duration: 1500,
         lazyload: false
      }; 

      var opts = $.extend(defaults, options);
      return this.each(function() 
      {   
         $.photocollage($(this), opts);
      });
   };
    
   $.photocollage = function($obj, options) 
   {
      if (options.lazyload)
      {
         $(window).on("scroll resize", function() {scheduleLazyload($obj, options); });
         scheduleLazyload($obj, options);
      }
      else
      {
         $(window).resize(function() { arrangePhotoCollage($obj, false, options); } );
         arrangePhotoCollage($obj, true, options);
      }
   };

   function GetImageRect(data, image, rect)
   {
      var loop = Math.sqrt(data.length);
      var index = 0;
      for (var y=0; y<loop; y++)
      {
         for (var x=0; x<loop; x++)
         {
            var z = (y*loop)+x;
            var value = parseInt(data[z]);
            if (value != 0)
            {
               if (index == image)
               {
                  rect.left = x;
                  rect.top = y;
                  rect.width = value;
                  rect.height = value;
                  return;
               }
               index++;
            }
         }
      }
   }

   var scheduledLazyload = false;
   function scheduleLazyload($obj, options) 
   {
     if (!scheduledLazyload) 
     {
        scheduledLazyload = true;
        setTimeout( function() { lazyload($obj, options); }, 60 );
     }
   }
 
   function getViewportH() 
   {
      var docElem = window.document.documentElement;
      var client = docElem['clientHeight'];
       var inner = window['innerHeight'];

       if (client < inner)  
          return inner;
       else
          return client;  
    }
    function scrollY() 
    {
       var docElem = window.document.documentElement;
       return window.pageYOffset || docElem.scrollTop;
    }
    // http://stackoverflow.com/a/5598797/989439
    function getOffset( el ) 
    {
       var offsetTop = 0, offsetLeft = 0;
       do 
       {
          if ( !isNaN( el.offsetTop ) ) 
          {
             offsetTop += el.offsetTop;
          }
          if ( !isNaN( el.offsetLeft ) ) 
          {
             offsetLeft += el.offsetLeft; 
          }
      } 
      while( el = el.offsetParent )

     return {top : offsetTop, left : offsetLeft}  
   }
   function inViewPort($element)
   {
      if ($element.is(":hidden")) return false;

      var view_top = $(window).scrollTop();
      var view_bottom = view_top + $(window).height();
      var top = $element.offset().top;
      var bottom = top + $element.height()/2;

      var el = $element[0];
      var elH = el.offsetHeight;
      var scrolled = scrollY();
      var viewed = scrolled + getViewportH(); 
      var elTop = getOffset(el).top;
      var elBottom = elTop + elH;
      // if 0, the element is considered in the viewport as soon as it enters.
      // if 1, the element is considered in the viewport only when it's fully inside
      // value in percentage (1 >= h >= 0)
      var h = 1;
      return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
   }

   function lazyload($obj, options) 
   {
      if (inViewPort($obj))
      {
         $(window).off("scroll resize");
         arrangePhotoCollage($obj, true, options);
         $(window).resize(function() { arrangePhotoCollage($obj, false, options); } );
      }
      scheduledLazyload = false;
   }
  
   function arrangePhotoCollage($obj, show, options)
   { 
      var data = options.matrix.split(","); 
      var columns = Math.sqrt(data.length);
      var width = $obj.outerWidth();
      var cx = (width-(columns-1)*options.padding)/columns;
      var cy = cx;

      $obj.find('.thumbnails').width(width).height(width);

      var $imgs = $obj.find('.thumbnail');
      for (var j=0; j<$imgs.length; j++)
      { 
         var rect = { left:0, top:0, width:0, height:0 };
         GetImageRect(data, j, rect);
         if (rect.width != 0)
         {
            var $img = $imgs.eq(j);

            var dx = rect.left*options.padding;
            var dy = rect.top*options.padding;

            var dx2 = (rect.width*options.padding)-options.padding;
            var dy2 = (rect.height*options.padding)-options.padding;

            rect.left *= cx; 
            rect.top *= cy; 
            rect.width *= cx; 
	    rect.height *= cy; 

            rect.width += dx2; 
	    rect.height += dy2; 

            rect.left += dx;
//            rect.left += $obj.offset().left;

            rect.top += dy;
//            rect.top += $obj.offset().top;

            $img.css('left', rect.left + "px");
            $img.css('top', rect.top + "px");
            $img.css('width', rect.width + "px");
            $img.css('height', rect.height + "px");

            if (show)
            {
               if (options.effect == 'fade')
               {
                  $img.fadeTo(options.duration, 1);
	       }
               else
               if (options.effect == 'randomfade')
               {
                  delay = Math.random() * (1000 - 100) + 100;
                  $img.delay(delay).fadeTo(options.duration, 1);
               }
               else
               if (options.effect == 'slide' || options.effect == 'blind' || options.effect == 'drop')
               {
                  dir = Math.floor(Math.random() * 3);
                  delay = Math.floor(Math.random() * (1000 - 100) + 100);
                  var effect = ["left", "right", "up", "down"]; 
                  $img.hide();
                  $img.css('opacity', '1');
                  $img.delay(delay).show(options.effect, { 'direction' : effect[dir] }, options.duration);
               }
               else
               if (options.effect == 'css')
               {
                  delay = Math.random() * (1000 - 100) + 100;
                  setTimeout( function($img) 
                  {
                     $img.addClass('effect');
                  }, delay, $img);
               }
               else
               {
                  delay = Math.floor(Math.random() * (1000 - 100) + 100);
                  $img.hide();
                  $img.css('opacity', '1');
                  $img.delay(delay).show(options.effect, options.duration);
               }
            }
         }
      }	
   }
   
})(jQuery);