let nav = document.getElementById("navlist");
const mobnav = document.getElementById("mobnav");
mobnav.addEventListener("click", toggle);
function toggle() {
  if (nav.style.display == "none") {
    nav.style.display = "flex";
  } else {
    document.getElementById("navlist").style.display = "none";
  }
}
