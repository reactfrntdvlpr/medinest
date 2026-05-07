window.addEventListener("scroll", function() {
    let navbar = document.getElementById("topHeader");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});