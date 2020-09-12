const category = document.querySelectorAll(".category p");
const numStars = document.querySelectorAll(".numStars");

for (let i = 0; i < category.length; i++) {
  const aNewChild = generateStars(numStars[i].textContent);
  category[i].style.marginTop = ".5em";
  category[i].parentElement.prepend(aNewChild);
}

function generateStars(ind) {
  let div = document.createElement("div");
  div.style.marginTop = "1em";
  for (let i = 0; i < ind; i++) {
    const img = document.createElement("img");
    img.alt = `Star ${i + 1}`;
    img.src = "../images/icon-star.svg";
    img.style.margin = "0 .25em";
    div.appendChild(img);
  }
  return div;
}
