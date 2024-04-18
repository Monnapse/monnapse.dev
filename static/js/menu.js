
window.addEventListener('load', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    const moveableElements = document.querySelectorAll('.moveable-element');

    let isMoved = false;
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        moveableElements.forEach(element => {
            if (isMoved) {
                element.classList.remove('moved');
            } else {
                element.classList.add('moved');
            }
        });
        
        // Toggle the state
        isMoved = !isMoved;
    });
});