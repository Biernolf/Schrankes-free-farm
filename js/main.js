// display welcome window
document.addEventListener('DOMContentLoaded', displayWelcome
, false);



function displayWelcome(){
    var startModal = document.getElementById("startModal");
    var span = document.getElementById("closeWelcome");
    startModal.style.display = "block";
    span.onclick = function() {
        startModal.style.display = "none";
        console.log("wuuu")
        displayBubatz()
    }
}
function displayBubatz(){
    var bubatzModal = document.getElementById("bubatzModal");
    var span = document.getElementById("closeBubatz");
    bubatzModal.style.display = "block"
    span.onclick = function() {
        console.log("wää")
        bubatzModal.style.display = "none";
    }
}