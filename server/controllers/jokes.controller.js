const Model = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Model.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.findOneJoke = (req, res) => {
    Model.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.randomJoke = (req, res) => {
    Model.count().exec((err, count) => {
        let random = Math.floor(Math.random() * count);

        Model.findOne().skip(random)
            .then(randomJoke => res.json({ joke: randomJoke }))
            .catch(err => res.json({ message: "Something went wrong", error: err }))
    })
};

module.exports.createJoke = (req, res) => {
    Model.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.updateJoke = (req, res) => {
    Model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateJoke => res.json({ joke: updateJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.deleteJoke = (req, res) => {
    Model.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};