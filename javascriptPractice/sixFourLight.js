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

// pet.goOut("pee");

let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
    copies_sold: 14000000,
    formats: ["radio", "TV", "film", "graphic novel"],
    ultimate_answer: {
      meaning_of_life: 42
    }
  }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

let meaning = "meaning_of_life";

console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning]);

console.log(meaning);

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
};

console.log(`Our company's lawyer is ${employee.name}`);
console.log(`Jeff was hired on ${employee["hire_date"]}`);
// employee.vacation_days = 20;
employee["vacation_days"] = 20;

let eom = "employee_of_the_month";
employee[eom] = false;
console.log(employee);

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.0,
  insured: true,
  action: function(simplePresentVerb) {
    console.log(`Great Scott, she's ${simplePresentVerb}ing like she's never ${simplePresentVerb}ed before!`);
  },
  newTools: function(newTool) {
      painter.tools.push(newTool);
      console.log(painter.tools);
  }
};

painter.action("paint");

painter.newTools("taser");

