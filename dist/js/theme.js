$(document).ready(function() {
  $(".skill_main").each(function() {
    $(this).waypoint(function() {
      var progressBar = $(".progress-bar");
      progressBar.each(function(){
          $(this).css("width", $(this).attr("aria-valuenow") + "%")
      })
    },
    {
      triggerOnce: true,
      offset: '80%'
    });
  });

  $('.counter').counterUp({
    delay: 7
  });
})