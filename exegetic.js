
var initSocial = function() {
  $('.icon .fa').hover(
    function() {
      var parent = $(this).parent().parent();
      var network = parent.data('network');
      var username = parent.data('username');
      $('.social-network').text(network + ":");
      $('.social-username').text(username);
    },
    function() {
      $('.social-network').text('');
      $('.social-username').text('');
    }
  );
}

$( document ).ready(function() {
  initSocial();
});

