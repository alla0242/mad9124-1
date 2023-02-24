const { Router } = require("express");
const pokemonController = require("../controllers/pokemon");
const validatePokemonId = require('../middleware/validatePokemonId');
const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.getAll);
pokemonRouter.get("/:id", validatePokemonId, pokemonController.getOne);

module.exports = pokemonRouter;
