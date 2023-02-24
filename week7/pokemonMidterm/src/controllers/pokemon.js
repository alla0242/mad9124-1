const createDebug = require("debug");
const PokemonService = require("../services/pokemon");
const debug = createDebug("app:pokemonService");

const getAll = (_req, res) => {
  const pokemon = PokemonService.getAll();
  res.json({
    data: pokemon,
  });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = PokemonService.getOne(id);
  debug("looking up pokemon");
  res.json({
    data: pokemon,
  });
};

module.exports = {
  getAll,
  getOne,
};
