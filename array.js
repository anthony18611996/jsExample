"use strict";

const welcome = (persone) => {
  console.log(`Ave, ${persone.name}!`);
};

const persons = [
  { name: "Marcus Aurelius" },
  { name: "Mao Zedong" },
  { name: "Rene Descartes" },
];

for (const person of persons) {
    welcome(person);
}
