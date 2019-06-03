const firstSecArtHead = document.querySelector(".article__header");
console.log("firstSecArtHead", firstSecArtHead);

firstSecArtHead.textContent = "Welcome to the Berkeley blog";

const allArtHead = document.querySelectorAll(".article__header");
console.log("allArtHead", allArtHead);

for (let i = 0; i < allArtHead.length; i++) {
  allArtHead[i].classList.add("important");
  console.log(allArtHead[i]);
}

const dashed = document.getElementsByClassName("dashed");
console.log("dashed", dashed);

dashed[0].classList.remove("dashed");
