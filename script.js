// Add JavaScript code here
var showContent
function show_hide() {
    if (showContent == true) {
        document.getElementById("holder").style.display = "inline";
        return showContent = false;

    } else {
        document.getElementById("holder").style.display = "none";
        return showContent = true;
    }
}

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})