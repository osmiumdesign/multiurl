

$(function() {
  $('.crop').imagefill(); // image stretches to fill container
  	// Custom JS
});
$(function() {
$('.close').on('click', function() {
  $(this).parent().hide();
});

$('#filter-open').on('click', function(e) {
  e.preventDefault();
  $('#modal-filter').show();
});

$('.add-button').on('click', function(e) {
  e.preventDefault();
  $('#modal-add').show();
});
});
