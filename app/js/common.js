

$(function() {
  $('.crop').imagefill(); // image stretches to fill container
  	// Custom JS
});
$(function() {
$('#close').on('click', function() {
  $('.filter-wrap').hide();
});

$('.filter-button').on('click', function(e) {
  e.preventDefault();
  $('.filter-wrap').show();
});
});
