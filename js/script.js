/*======================================
    COMFORT'S PORTFOLIO -JAVASCRIPT
=======================================*/

document.addEventListener("DOMContentLoaded", function(){
    // 1. GET THE NAVIGATION ELEMENTS
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    //2. OPEN AND CLOSE THE MOBILE MENU
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function(){

            const isOpen = navbar.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "X" : "≡"
        });

        //3. CLOSE THE  MENU WHEN A NAVIGATION  LINK IS SELECTED
        const navlinks =navbar.querySelectorAll("a");

        navlinks.forEach(function(link){

            link.addEventListener("click", function(){

                navbar.classList.remove("open");

                menuToggle.setAttribute("aria-expanede", "false");

                menuToggle.setAttribute(
                    "aria-label", "Open navigation menu"
                );

                menuToggle.textContent = "≡";
            });
        });
    }

    // 4. DISPLAY THE CURRENT COPYRIGHT YEAR
    const yearElement = document.getElementById("year");

    if(yearElement) {
        yearElement.textContent = new Date ().getFullYear();
    }
});