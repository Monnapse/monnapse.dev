
// Wait for the DOM to load
window.addEventListener('load', function() {
  //console.log(NewRequest("https://raw.githubusercontent.com/Monnapse/monnapse.dev/gh-pages/projects_sitemap.json", RequestMethods.GET))

  // Get the button
  const scrollbtn = document.getElementById("scroll-button");
  const mainimage = document.getElementById("main-image");
  const scrollframe = document.getElementById("scroll-frame");

  scrollFunction = function() {
    if (scrollframe.scrollTop < mainimage.clientHeight) {
      scrollbtn.style.display = "block";
    } else {
      scrollbtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  scrolldownFunction = function() {
    scrollframe.scrollTo({top: mainimage.clientHeight, behavior: 'smooth'});
    //scrollframe.scrollTop = mainimage.clientHeight;
    //document.documentElement.scrollTop = mainimage.clientHeight;
  }
});