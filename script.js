const p = document.createElement("p");
const data = fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => (p.innerText = data.quote + "\n- Kanye West"));

p.innerText = data.quote;
console.log(data);
document.querySelector(".hero-text").append(p);

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
