// When the user clicks on the button, toggle between
// hiding and showing the dropdown content

function dropbtn() {
    document.getElementById("linkDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var linkDropdown = document.getElementById("linkDropdown");
        if (linkDropdown.classList.contains('show')) {
            linkDropdown.classList.remove('show');
        }
    }
}