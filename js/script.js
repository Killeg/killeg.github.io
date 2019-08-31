function closeNav() {
    var navDiv = document.getElementById("navigationScreen");
    navDiv.classList.add('navClosed');
    navDiv.classList.remove('navOpened');
    navText.innerHTML = '';
    navIcon.classList.remove("fa-times")
    navIcon.classList.add("fa-bars")
}

function toggleNav() {

    var navDiv = document.getElementById("navigationScreen");
    var navIcon = document.getElementById("navIcon");
    var navText = document.getElementById('navText');

    if (navDiv.classList.contains('navClosed')) {
        navDiv.classList.add('navOpened');
        navDiv.classList.remove('navClosed');
        navIcon.classList.remove("fa-bars")
        navIcon.classList.add("fa-times")
        navText.innerHTML += '<p onclick="closeNav();"class="navText"><a href="#AboutMe">About me</a></p><p onclick="closeNav();" class="navText"><a href="#Photography">Photography</a></p><p onclick="closeNav();" class="navText"><a href="#Cars">Cars</a></p>';

    } else {
        closeNav();
    }
}