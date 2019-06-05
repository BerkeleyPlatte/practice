function cl(a) {
  console.log(a);
}

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let newArr = [];
for (var i = 0; i < ages.length; i++) {
  if (ages[i] > 17 && ages[i] < 50) {
    newArr.push(ages[i]);
  }
}

cl(newArr);

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

// const name = "flavio";
// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
// cl(nameCapitalized);

let newStr = "Yoda says," + " ";
for (var j = 0; j < yoda_quote.length; j++) {
  if (yoda_quote[j] === "the") {
    var The =
      '"' +
      yoda_quote[j].charAt(0).toUpperCase() +
      yoda_quote[j].slice(1) +
      " ";
    newStr += The;
  } else if (yoda_quote[j] === "teacher") {
    var teacher = yoda_quote[j] + "," + " ";
    newStr += teacher;
  } else if (yoda_quote[j] === "is") {
    var is = yoda_quote[j] + '"';
    newStr += is;
  } else {
    newStr += yoda_quote[j] + " ";
  }
}

cl(newStr);

function add(p) {
  return p[1] + p[2];
}
let sum = add([1, 2, 3]);
cl(sum);

function sadd() {
  return 2 + 2;
}
cl(sadd());

function sub() {
  return 2 - 2;
}
cl(sub());

function make(f1, f2, f3) {
  return `${f1} plus ${f2} does not equal ${f3}`;
}

cl(make(add([1, 2, 3]), sadd(), sub()));
