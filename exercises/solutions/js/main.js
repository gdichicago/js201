$(document).ready(function(){
  // Hide the content
  $('article').hide();
  // Hide the menu
  $('li.menu').hide();

  // Show the menu
  $('li.activateMenu').click(function() {
    $('li.activateMenu').hide();
    $('li.menu').show("fast", "swing");
  });

  // Hide the menu
  $('li.hide').click(function() {
    $('li.menu').hide();
    $('li.activateMenu').show("fast", "swing");
  });

  $('li.all').click(function() {
    $('article').toggle("slow", "swing");
  });
});