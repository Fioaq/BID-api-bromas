const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/random/joke", JokeController.randomJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};