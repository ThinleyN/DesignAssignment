function dropDown() {
  document.getElementById('myDropdown').classList.toggle('show');
  console.log('clicked');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.my-account ')) {
    var dropdowns = document.getElementsByClassName('account-dropdown');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function burgerMenu() {
  document.querySelector('nav').classList.toggle('burgertoggle');
  console.log('clickefasfdad');
}
//Close menu if user clicks outside
window.onclick = function(event) {
  if (!event.target.matches('.burger-menu')) {
    var dropdowns = document.getElementsByTagName('nav');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('burgertoggle')) {
        openDropdown.classList.remove('burgertoggle');
      }
    }
  }
};
