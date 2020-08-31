   
   $(document).ready(function()
   {
      $('#wb_service-text').addClass('visibility-hidden');
      $('#wb_about-text').addClass('visibility-hidden');
      $('#wb_portfolio-image1').addClass('visibility-hidden');
      $('#wb_portfolio-image2').addClass('visibility-hidden');
      $('#wb_contact-text').addClass('visibility-hidden');
      $('#wb_Card1').addClass('visibility-hidden');
      $('#wb_Card2').addClass('visibility-hidden');
      $('#wb_Card3').addClass('visibility-hidden');
      $('#wb_Card4').addClass('visibility-hidden');
      $('#wb_Card5').addClass('visibility-hidden');
      $('#wb_Card6').addClass('visibility-hidden');
      $('#wb_JavaScript1').addClass('visibility-hidden');
      $('#wb_location-text').addClass('visibility-hidden');
      $('#wb_location-icon1').addClass('visibility-hidden');
      $('#wb_location-icon2').addClass('visibility-hidden');
      $('#wb_location-icon3').addClass('visibility-hidden');
      $('#wb_location-icon4').addClass('visibility-hidden');
      $('#wb_location-icon5').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      function servicesScroll()
      {
         var $obj = $("#wb_services");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      servicesScroll();
      $(window).scroll(function(event)
      {
         servicesScroll();
      });
      $("a[href*='#services1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top-88 }, 600, 'easeOutCirc');
      });
      function aboutScroll()
      {
         var $obj = $("#wb_about");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_about-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      aboutScroll();
      $(window).scroll(function(event)
      {
         aboutScroll();
      });
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio').offset().top-88 }, 600, 'easeOutCirc');
      });
      function portfolioScroll()
      {
         var $obj = $("#wb_portfolio");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_portfolio-image1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      portfolioScroll();
      $(window).scroll(function(event)
      {
         portfolioScroll();
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCirc');
      });
      function contactScroll()
      {
         var $obj = $("#wb_contact");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_contact-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      contactScroll();
      $(window).scroll(function(event)
      {
         contactScroll();
      });
      $("a[href*='#location']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_location').offset().top-88 }, 600, 'easeOutCirc');
      });
      function services_bookmark1Scroll()
      {
         var $obj = $("#wb_services-bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_Card2', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_Card3', 'animate-fade-in-up', 1000, 1000);
         }
      }
      services_bookmark1Scroll();
      $(window).scroll(function(event)
      {
         services_bookmark1Scroll();
      });
      function services_bookmark2Scroll()
      {
         var $obj = $("#wb_services-bookmark2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_Card5', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_Card6', 'animate-fade-in-up', 1000, 1000);
         }
      }
      services_bookmark2Scroll();
      $(window).scroll(function(event)
      {
         services_bookmark2Scroll();
      });
      function location_bookmarkScroll()
      {
         var $obj = $("#wb_location-bookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_JavaScript1', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-text', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-icon1', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-icon2', 'animate-fade-in', 500, 1500);
            AnimateCss('wb_location-icon3', 'animate-fade-in', 1000, 1500);
            AnimateCss('wb_location-icon4', 'animate-fade-in', 1500, 1500);
            AnimateCss('wb_location-icon5', 'animate-fade-in', 2000, 1500);
         }
      }
      location_bookmarkScroll();
      $(window).scroll(function(event)
      {
         location_bookmarkScroll();
      });
      $("#newsLetterPopup").dialog(
      {
         title: '',
         modal: true,
         width: 691,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: { effect: 'fade', duration: 400 },
         hide: { effect: 'fade', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'newsLetterPopup'} 
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_services,#wb_about,#wb_contact').css('background-attachment', 'scroll');
      }
   });
      
   $(document).ready(function () 
   {
       if (document.cookie.indexOf("newsletterCookie=true")<0) 
       {
           $("#newsLetterPopup").dialog("open");
       }
       $("#newsletterCheckBox").change(function () 
       {
          document.cookie = "newsletterCookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";    
          $("#newsLetterPopup").dialog("close");
       });
      
   });
      
   var map;
   var marker;
   var geocoder;
   function GoogleMapInit(id, latitude, longitude, address) 
   {    
      var latlng = new google.maps.LatLng(latitude, longitude);
      var latlngMarker = new google.maps.LatLng(latitude, longitude);
      var mapOptions = 
      {        
         center: latlng,        
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         mapTypeControl: false,        
         scrollwheel: true,
         streetViewControl: false,        
         zoom: 8,
         zoomControl: true,        
         zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL }
      }
      element = document.getElementById(id);
      map = new google.maps.Map(element, mapOptions);   
      marker = new google.maps.Marker({ draggable:true, map: map, position: latlngMarker});   
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': address}, function(results, status) 
      {
         if (status == google.maps.GeocoderStatus.OK) 
         {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker(
            {
               map: map, 
               position: results[0].geometry.location
            });
         } 
         else 
         {
           //    alert("Geocode was not successful: " + status);
         }
      });
   }
   GoogleMapInit('GoogleMaps', 40.7127837, -74.00594130000002, 'New+York,NY');
   