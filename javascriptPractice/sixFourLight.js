function cl(thing) {
  console.log(thing);
}

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

for (let i = 0; i < array.length; i++) {
  cl(`${array[i].name}'s job title is ${array[i].title}.`);
}

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
    cl(`${this.name} wants to go out and ${action}`);
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

cl(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

let meaning = "meaning_of_life";

cl(hitchhikers_guide.random_facts.ultimate_answer[meaning]);

cl(meaning);

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
};

cl(`Our company's lawyer is ${employee.name}`);
cl(`Jeff was hired on ${employee["hire_date"]}`);
// employee.vacation_days = 20;
employee["vacation_days"] = 20;

let eom = "employee_of_the_month";
employee[eom] = false;
cl(employee);

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.0,
  insured: true,
  action: function(simplePresentVerb) {
    cl(
      `Great Scott, she's ${simplePresentVerb}ing like she's never ${simplePresentVerb}ed before!`
    );
  },
  newTools: function(newTool) {
    painter.tools.push(newTool);
    cl(painter.tools);
  }
};

painter.action("paint");

painter.newTools("taser");

let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
];

family.forEach(function(person) {
  document.querySelector("#family").innerHTML += `<h3>${person.name}</h3>`;
});
