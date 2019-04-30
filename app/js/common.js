

$(function() {
  $('.crop').imagefill(); // image stretches to fill container
  	// Custom JS
});
$(function() {
$('.close').on('click', function() {
  $(this).parent().hide();
});

$('.filter-button').on('click', function(e) {
  e.preventDefault();
  $('#modal-filter').slideToggle('fast','swing');
});

$('.add-button').on('click', function(e) {
  e.preventDefault();
  $('#modal-add').slideToggle('fast','swing');
});
});


function dataChange()
{
document.getElementById('modal-dataInput').innerHTML = document.getElementById(document.getElementById('selectOption').value).innerHTML
};