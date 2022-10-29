const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    //Get to get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    //Get to get a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //Post to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { userName: req.body.userName },
                    { $addToSet: { thoughts: thought._id } }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought Created without User' })
                    : res.json("Thought Created")
            )
            .catch((err) => res.status(500).json(err));
    },

    //Put to update a thought by its _id

    //Delete to remove a thought by its _id

    //api/thoughts/:thoughtId/reactions POST to create a reaction stored in a single thought's reactions array field

    ///api/thoughts/:thoughtId/reactions/:reactionId DELETE to pull and remove a reaction by the reaction's reactionId value



};