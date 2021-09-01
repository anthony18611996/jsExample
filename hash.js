"use strict";

const welcome = (persone) => {
  console.log(`Ave, ${persone.name}!`);
};

const persons = {
  marcus: { name: "Marcus Aurelius" },
  mao: { name: "Mao Zedong" },
  rene: { name: "Rene Descartes" },
};

for (const name in persons) {
  const person = persons[name];
  welcome(person);
}
