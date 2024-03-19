// Wait for the DOM to load
window.addEventListener('load', function() {
    // Find the element to remove
    var loader = document.getElementById('loader');

    //loader.remove();

    // Check if the element exists before attempting to remove it
    if (loader) {
        setTimeout(function() {
            loader.classList.add('puff-out-center');
            setTimeout(function() {
                loader.remove(); // Remove the element from the DOM
            }, 650); // 1000 milliseconds (1 seconds)
        }, 1000); // Add the class after 1 second (1000 milliseconds)
    }
});