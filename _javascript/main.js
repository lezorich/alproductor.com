document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');

  document.addEventListener('scroll', function () {    // this will work when your window scrolled.
      var height = window.scrollY;  //getting the scrolling height of window
      let navbar = document.querySelector('#navbar');
      if (height > 50) {
        navbar.classList.remove('is-transparent');
      } else {
        navbar.classList.add('is-transparent');
      }
  });
});