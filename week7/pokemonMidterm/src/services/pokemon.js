const pokemon = require("../models/pokemon");
const { NotFoundError } = require("../utils/errors");

const getAll = () => {
  return pokemon;
};

const getOne = (id) => {
  const foundPokemon = pokemon.find((p) => p.id === id);
  if (!foundPokemon) throw new NotFoundError(`Pokemon with id ${id} not found`);
  return foundPokemon;
};

module.exports = {
  getAll,
  getOne,
};
