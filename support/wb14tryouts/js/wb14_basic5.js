   
   $(document).ready(function()
   {
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#contact').offset().top }, 600, 'easeOutExpo');
      });
      $("#ListView1").listview(
      {
         inset: false
      });
   });
