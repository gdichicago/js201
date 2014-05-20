$(document).ready(function(){
  // Hide the content
  $('article').hide();
  // Hide the menu
  $('li.menu').hide();

  // Show the menu
  $('li.activateMenu').click(function() {
    $('li.activateMenu').hide();
    $('li.menu').show();
  });

  // Hide the menu
  $('li.hide').click(function() {
    $('li.menu').hide();
    $('li.activateMenu').show();
  });

  $('li.all').click(function() {
    $('article').slideToggle(2000);
  });
});