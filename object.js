"use strict";

const welcome = (persone) => {
  console.log(`Ave, ${persone.name}!`);
};

const marcus = { name: "Marcus Aurelius" };
const mao = { name: "Mao Zedong" };
const cartesius = { name: "Rene Descartes" };

welcome(marcus);
welcome(mao);
welcome(cartesius);
