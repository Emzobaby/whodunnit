// Episode 1
// This will return "The murderer is Miss Scarlett." The scenario object is declared
// outside of the function so it is available when the function is called.
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};
const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);

// // Episode 2
// // This will return an error because the murderer cannot be changed because it
// // is a constant.
const murderer = 'Professor Plum';
const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Episode 3
// The first verdict will be Mrs. Peacock because the function changes the murderer
// to her. The second verdict does not call the function so it will still be Professor
// Plum.
let murderer = 'Professor Plum';
const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}
const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Episode 4
// The first console.log will say "The suspects are Miss Scarlett, Professor Plum and
// Colonel Mustard" because the function changed suspect three.
// The second console.log will say "Suspect three is Mrs. Peacock" because we are not getting the
// information from the suspects constant this time which is where the result of the function was saved.
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';
const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}
const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Episode 5
// This will say "The weapon is the revolver" because we can change the weapon
// with the new weapon function.
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};
const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}
const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Episode 6
// "The murderer is Mrs. White" because the plotTwist function is called
// within the changeMurderer function.
let murderer = 'Colonel Mustard';
const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    murderer = 'Mrs. White';
  }
  plotTwist();
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Episode 7
// "The murderer is Mr. Green" because Mr. Green is a global variable.
let murderer = 'Professor Plum';
const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }
    unexpectedOutcome();
  }
  plotTwist();
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Episode 8
// I thought it was the lead pipe but when I ran it it was the candle stick.
// I don't get why it changes to candle stick as the unexpected outcome happens
// when Mrs. Peacock is still the murderer, then the plot twist happens and Colonel Mustard
// becomes the murderer last.
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};
const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';
  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }
    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }
    unexpectedOutcome('Colonel Mustard');
  }
  plotTwist('Dining Room');
}
const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}
changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Episode 9
// "The murderer is Professor Plum" because the Mrs. Peacock variable only exists
// in the if block.
let murderer = 'Professor Plum';
if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);

// Extension
const scenario = {
  murderer: "Colin",
  room: "Vaughn",
  weapon: "Death by JavaScript"
};
const changeScenario = function() {
  scenario.murderer = "Anna";
  const plotTwist = function(room) {
    if (scenario.room !== room) {
      scenario.murderer = "Ally";
    }
  };
  plotTwist("Turing");
};
const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`
};
changeScenario();
const verdict = declareMurderer();
console.log(verdict);
