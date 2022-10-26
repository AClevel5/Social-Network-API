const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');



//Get to get all thoughts

//Get to get a single thought by its _id

//Post to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

//Put to update a thought by its _id

//Delete to remove a thought by its _id

//api/thoughts/:thoughtId/reactions POST to create a reaction stored in a single thought's reactions array field

///api/thoughts/:thoughtId/reactions/:reactionId DELETE to pull and remove a reaction by the reaction's reactionId value
