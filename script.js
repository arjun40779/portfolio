const p = document.createElement("p");
const data = fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => (p.innerText = data.quote + "\n- Kanye West"));

/* _________________________________________________ */
// navigation
document.querySelector(".hero-text").append(p);

let nav = document.getElementById("navlist");
const mobnav = document.getElementById("mobnav");
mobnav.addEventListener("click", toggle);
function toggle() {
  console.log(nav.style.display);
  if (nav.style.display != "flex") {
    nav.style.display = "flex";
  } else {
    document.getElementById("navlist").style.display = "none";
  }
}
