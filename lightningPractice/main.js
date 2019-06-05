// const age = 30;
// const timeSpan = 25;
// const futureAge = age + timeSpan;
// const name = "Biff";
// const generationStereotype = "millenial";
// const dadJoke = "milleni-old";

// const stringTwo = `Hi. My name is ${name}, and I'm ${age} years old.  They say that makes me a ${generationStereotype}.
// In ${timeSpan} years I'll be ${futureAge}!  I guess that means I'll be a ${dadJoke} then.  Ha ah!"`;
// console.log(stringTwo);

// const blogContainer = document.querySelector(".blogPosts");
// const myArticles = document.querySelectorAll(".blogArticle");
// console.log(blogContainer);
// console.log(myArticles);

// blogContainer.classList.add(".currentBlog");

// for (let i = 0; i < myArticles.length; i++) {
//   myArticles[i].classList.add(".currentBlog");
// }

// var string =
//   "For lunch I'm having penut butter and jelly on whole wheat with grape juice and an apple";

// var foodObject = {
//   meal: "lunch",
//   contents: "penut butter and jelly",
//   bread: "whole wheat",
//   drink: "grape juice",
//   dessert: "apple"
// };

// var foodArray = [
//   "lunch",
//   "penut butter and jelly",
//   "whole wheat",
//   "grape juice",
//   "apple"
// ];

// for (let value in foodObject) {
//     console.log(`Berkeley's ${value} is`, foodObject[value]);
// }

function sayHello() {
  console.log("hello");
}

// a = sayHello();

// a;

// function chickenMonkey() {
//   for (let currentNumber = 1; currentNumber <= 70; currentNumber++) {
//     if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
//       console.log("ChickenMonkey");
//     } else if (currentNumber % 5 === 0) {
//       console.log("chicken");
//     } else if (currentNumber % 7 === 0) {
//       console.log("monkey");
//     } else {
//       console.log(currentNumber);
//     }
//   }
// }

// chickenMonkey();




// let bandNumber = 1

// const takeNumber = function (bandName) {
//     let output = `${bandNumber}. ${bandName}`
//     bandNumber++
//     return output;
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// const boy = takeNumber("Bad boys")
// console.log(boy)


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

for (let j = 0; j < foods.length; j++) {
  grill(foods[j]);
}

// console.log(cookedFood);







