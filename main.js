donate = document.querySelector("#donateButton");
modal = document.querySelector("#modal");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
function modalOpen() {
    modal.style.display = "block";
}
function modalClose() {
    modal.style.display = "none";
}

document.getElementById("donateButton").addEventListener("click", modalOpen);
document.getElementById("cross").addEventListener("click", modalClose);