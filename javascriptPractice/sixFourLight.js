const array = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

//   for (let i = 0; i < array.length; i++) {
//       console.log(`${array[i].name}'s job title is ${array[i].title}.`);
//   }

function petAssign(dogBreed) {
  if (dogBreed) {
    return `my favorite dog breed is ${dogBreed}.`;
  } else {
    return "I like cat.";
  }
}

// petAssign();

const pet = {
  name: "Murphis",
  species: "Aussie mix",
  nicknames: ["mruph", "poochie", "mr. fuzzy"],
  age: 4,
  goOut: function(action) {
    console.log(`${this.name} wants to go out and ${action}`);
  }
};

pet.goOut("pee");