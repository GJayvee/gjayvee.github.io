document.addEventListener('DOMContentLoaded', function() {
  var icon = document.querySelector('#nav ul li.icon');
  if (icon) {
    icon.addEventListener('click', function() {
      var nav = document.querySelector('#nav ul');
      nav.classList.toggle('responsive');
    });
  }
});
