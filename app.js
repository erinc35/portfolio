// console.log("buu")
// var divs = $('#parallax');
// $(window).scroll(function(){
//    var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
//    divs.css('opacity', 1 - percent);
// });

$(document).ready(function(){
  buu();
});

function buu() {
  $("#deneme").on("click", function(event){
    console.log("buu")
    event.preventDefault();
  })
}
