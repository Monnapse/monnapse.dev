//   ____    ____   ___   ____  _____  ____  _____       _       _______    ______   ________  
//  |_   \  /   _|.'   `.|_   \|_   _||_   \|_   _|     / \     |_   __ \ .' ____ \ |_   __  | 
//    |   \/   | /  .-.  \ |   \ | |    |   \ | |      / _ \      | |__) || (___ \_|  | |_ \_| 
//    | |\  /| | | |   | | | |\ \| |    | |\ \| |     / ___ \     |  ___/  _.____`.   |  _| _  
//   _| |_\/_| |_\  `-'  /_| |_\   |_  _| |_\   |_  _/ /   \ \_  _| |_    | \____) | _| |__/ | 
//  |_____||_____|`.___.'|_____|\____||_____|\____||____| |____||_____|    \______.'|________| 
//   ____    ____       _       ______   ________   _________  ____  ____  _____   ______      
//  |_   \  /   _|     / \     |_   _ `.|_   __  | |  _   _  ||_   ||   _||_   _|.' ____ \     
//    |   \/   |      / _ \      | | `. \ | |_ \_| |_/ | | \_|  | |__| |    | |  | (___ \_|    
//    | |\  /| |     / ___ \     | |  | | |  _| _      | |      |  __  |    | |   _.____`.     
//   _| |_\/_| |_  _/ /   \ \_  _| |_.' /_| |__/ |    _| |_    _| |  | |_  _| |_ | \____) |    
//  |_____||_____||____| |____||______.'|________|   |_____|  |____||____||_____| \______.'    
//                                                                                             

// Check if user has mouse
if (window.matchMedia("(any-hover: hover)").matches) {
    // do cursor stuff
    // Wait for the DOM to load
    window.addEventListener('load', function() {

        const image = document.getElementById("cursor");

        const buttons = document.querySelectorAll(".button"); // Select all buttons with the class

        let isMoving = false;
        let cursorShowing = false;

        document.addEventListener("mousemove", (e) => {
            if (!cursorShowing) {
                const container = document.getElementsByClassName("cursor-container")[0];
                container.style.visibility = "visible";
                cursorShowing = true;
            }

            if (!isMoving) {
                isMoving = true;

                const imageWidth = image.offsetWidth;
                const imageHeight = image.offsetHeight;

                const imageX = e.clientX - imageWidth / 2;
                const imageY = e.clientY - imageHeight / 2;
            
                image.style.transition = "transform .125s"; // Disable the transition temporarily
                image.style.transform = `translate(${imageX}px, ${imageY}px`;

                setTimeout(() => {
                    isMoving = false;
                }, 25); // Adjust the delay as needed
            }
        });

        buttons.forEach((button) => {
            button.addEventListener("mouseenter", () => {
                if (!button.classList.contains("moved"))
                image.style.width = "20px";
            });

            button.addEventListener("mouseleave", () => {
                image.style.width = "30px";
            });
        });
    });
}

// Handle the back/forward buttons to load content dynamically
window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page);
    }
}