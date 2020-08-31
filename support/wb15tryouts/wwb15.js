function OnGoMenuFormLink(GoList)
{
   var url = GoList.options[GoList.selectedIndex].value;
   var target = GoList.options[GoList.selectedIndex].className;
   GoList.selectedIndex=0;
   GoList.blur();
   if (url)
   {
      NewWin=window.open(url,target);
      window['NewWin'].focus()
   }
}

function popupwnd(url, toolbar, menubar, locationbar, resize, scrollbars, statusbar, left, top, width, height)
{
   if (left == -1)
   {
      left = (screen.width/2)-(width/2);
   }
   if (top == -1)
   {
      top = (screen.height/2)-(height/2);
   }
   var popupwindow = this.open(url, '', 'toolbar=' + toolbar + ',menubar=' + menubar + ',location=' + locationbar + ',scrollbars=' + scrollbars + ',resizable=' + resize + ',status=' + statusbar + ',left=' + left + ',top=' + top + ',width=' + width + ',height=' + height);
}

/*function displaylightbox(url, options)
{
   options.padding = 0;
   options.autoScale = true;
   options.href = url;
   options.type = 'iframe';
   $.fancybox(options);
}*/

function ShowObject(id, flag)
{
 /*  var selector = '#' + id;
   if ($(selector).css('visibility') == 'hidden') 
   {
      $(selector).css('display', 'none').css('visibility', '');
   }
   if (flag == 1)
      $(selector).show();
   else
      $(selector).hide();*/

   var elem=document.getElementById(id);
   if(elem)
      elem.style.visibility=flag?'visible':'hidden';
}

function MoveObject(id, left, top)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.style.left=left+'px';
      elem.style.top=top+'px';
   }
}

function Rotate(id, angle)
{
   var selector = '#' + id;
   $(selector).wwbrotate(angle);
}

function SetImage(id, filename)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.src=filename;
   }
}

function SetStyle(id, className)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.className=className;
   }
}

function Animate(id, left, top, width, height, opacity, duration, angle)
{
   var selector = '#' + id;
   var attributes = new Object();
   if (left != "")
   {
      attributes.left = left;
   }
   if (top != "")
   {
      attributes.top = top;
   }
   if (width != "")
   {
      attributes.width = width;
   }
   if (height != "")
   {
      attributes.height = height;
   }
   if (opacity != "")
   {
      attributes.opacity = opacity/100;
   }
   if (id.indexOf('wb_') == 0)
   {
      var sel = '#' + id.substring(3);
      $(sel).stop().animate(attributes, duration);
   }
   if (angle != "")
   {
      attributes.rotate = angle;
   }
   $(selector).stop().animate(attributes, duration);
}

function LoadValue(id, type, prop)
{
   var elem=document.getElementById(id);
   if (elem)
   {
      var storage = window[type + 'Storage'];
      if (!!storage)
      {
         if (storage.getItem(id) != null)
         {
            switch(prop)
            {
            case 1:
               elem.checked = (storage.getItem(id) == "true");
               break;
            case 2:
               elem.selectedIndex = storage.getItem(id);
               break;
            default:
               elem.value = storage.getItem(id);
               break;
            }
         }
      }
   }
}

function StoreValue(id, type, prop)
{
   var elem=document.getElementById(id);
   if (elem)
   {
      var storage = window[type + 'Storage'];
      if (!!storage)
      {
         switch(prop)
         {
         case 1:
            storage.setItem(id, elem.checked);
            break;
         case 2:
            storage.setItem(id, elem.selectedIndex);
            break;
         default:
            storage.setItem(id, elem.value);
            break;
         }
      }
   }
}

function PlayAudio(id)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.play();
   }
}

function PauseAudio(id)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.pause();
   }
}

function StopAudio(id)
{
   var elem=document.getElementById(id);
   if(elem)
   {
      elem.pause();
      elem.currentTime = 0;
   }
}

function ToggleHelper(toggle, id, flag, effect, length, easing)
{
   var selector = '#' + id;
   var options = {};
   var index;
   var directions = new Array();
   directions[0] = "horizontal";
   directions[1] = "vertical";
   directions[2] = "left";
   directions[3] = "right";
   directions[4] = "up";
   directions[5] = "down";
   for (i=0; i<6; i++)
   {
      index = effect.indexOf(directions[i]);
      if (index != -1)
      {
         options = { direction : directions[i] };
         effect = effect.substring(0, index);
      }
   }

   if ($(selector).css('visibility') == 'hidden') 
   {
      $(selector).css('display', 'none').css('visibility', 'visible');
   }
   if (typeof easing != 'undefined')
   {
      options.easing = easing;
   }
   if (toggle == 1)
   {
      if (length == 0)
      {
         $(selector).toggle();
      }
      else
      {
         $(selector).toggle(effect, options, length);
      }
   }
   else
   {
      if (effect == '')
      {
         if (flag) $(selector).css('display', '');
         else      $(selector).css('display', 'none');
      }
      else
      {
         if (flag == 1)
            $(selector).show(effect, options, length);
         else
            $(selector).hide(effect, options, length);
      }
   }
}

function ShowObjectWithEffect(id, flag, effect, length, easing)
{
   ToggleHelper(0, id, flag, effect, length, easing);
}

function Toggle(id, effect, length, easing)
{
   ToggleHelper(1, id, 1, effect, length, easing);
}

function ToggleStyle(id, className, length, easing)
{
   var selector = '#' + id;
   if (length == 0)
   {
      $(selector).toggleClass(className);
   }
   else
   {
      $(selector).toggleClass(className, length, easing);
   }
}

function AnimationResume(id)
{
   var selector = '#' + id;
   $(selector).css({
         '-webkit-animation-play-state' : 'running',
         '-moz-animation-play-state' : 'running', 
         '-ms-animation-play-state' : 'running',
         'animation-play-state' : 'running'
   });
}

function AnimationPause(id)
{
   var selector = '#' + id;
   $(selector).css({
         '-webkit-animation-play-state' : 'paused',
         '-moz-animation-play-state' : 'paused', 
         '-ms-animation-play-state' : 'paused',
         'animation-play-state' : 'paused'
   });
}
function AnimateCss(id, animationName, delay, duration)
{
  var selector = '#' + id;
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(selector).css({
         '-webkit-animation-name' : '',
         '-moz-animation-name' : '', 
         '-ms-animation-name' : '',
         'animation-name' : ''
   });

  // reading width() forces reflow 
  $(selector).width(); 

  $(selector).removeClass('visibility-hidden');

  $(selector).css({
         '-webkit-animation-delay' : delay + 'ms',
         '-moz-animation-delay' : delay + 'ms',
         'animation-delay' : delay + 'ms',
         '-webkit-animation-duration' : duration + 'ms',
         '-moz-animation-duration' : duration + 'ms',
         'animation-duration' : duration + 'ms',
         '-webkit-animation-fill-mode' : 'both',
         '-moz-animation-fill-mode' : 'both',
         'animation-fill-mode' : 'both',
         '-webkit-animation-name' : animationName,
         '-moz-animation-name' : animationName, 
         '-ms-animation-name' : animationName,
         'animation-name': animationName
   }).one(animationEnd, function() 
   {
  /*  if (duration != 0)
    {
    $(this).css({
         '-webkit-animation-name' : '',
         '-moz-animation-name' : '', 
         '-ms-animation-name' : '',
         'animation-name' : ''
     });
    }*/
   });
}
function TransformRotate(obj, dir, degrees) 
{
   $(obj).css({
         '-webkit-transform': 'rotate'+dir+'('+degrees+'deg)',
         '-moz-transform': 'rotate'+dir+'('+degrees+'deg)', 
         '-ms-transform': 'rotate'+dir+'('+degrees+'deg)',
         '-o-transform': 'rotate'+dir+'('+degrees+'deg)',
         'transform': 'rotate'+dir+'('+degrees+'deg)'
   });   
}
function ShowPanel(id, event)
{
   if (event) 
   {
      event.preventDefault();
      event.stopPropagation();
   }

   var $panel = $('#' + id + '_panel');
   $.panel.show($panel);
}
function HidePanel(id, event)
{
   if (event) 
   {
      event.preventDefault();
      event.stopPropagation();
   }

   var $panel = $('#' + id + '_panel');
   $.panel.hide($panel);
}
function TogglePanel(id, event)
{
   if (event) 
   {
      event.preventDefault();
      event.stopPropagation();
   }
   var $panel = $('#' + id + '_panel');
   if ($panel.css('display') == 'none')
   {
      $.panel.show($panel);
   }
   else
   {
      $.panel.hide($panel);
   }
}
function ShowObjectMobile(id, flag, hasWrapper)
{
   var selector = '#' + id;
   var elem = hasWrapper ? $(selector).parent() : $(selector);

   var label = $("label[for='"+id+"']");
   if (label.length > 0)
   {
      elem = elem.add(label);
   }
   if (flag)
   {
      elem.show();
   }
   else
   {
      elem.hide();
   }
}
function ResponsiveVideo(id) 
{
   var selector = '#' + id;
   var ratio = 16/9;
   var widthViewPort = $(selector).width();
   var heightViewPort = $(selector).height();
   var width, height;
   var $player = $(selector + ' iframe');
   if (widthViewPort / ratio < heightViewPort)
   {
      width = Math.ceil(heightViewPort * ratio);
      $player.width(width).height(heightViewPort).css({left: (widthViewPort - width) / 2, top: 0});
   }
   else
   {
      height = Math.ceil(widthViewPort / ratio);
      $player.width(widthViewPort).height(height).css({left: 0, top: (heightViewPort - height) / 2});
   }
}
(function($)
{
   $.fn.inViewPort = function(partial)
   {
      var viewTop = $(window).scrollTop();
      var viewBottom = viewTop + $(window).height();
      var top = $(this).offset().top;
      var bottom = top + $(this).height();
      var compareTop = (partial === true) ? bottom : top;
      var compareBottom = (partial === true) ? top : bottom;
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
   };
})(jQuery);
