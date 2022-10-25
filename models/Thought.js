const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_lenght: 280,
        },
        userName: {
            type: String,
            default: Date.now,
            //need format
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },


)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            require: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);



const Thought = model('thought', thoughtSchema);

module.exports = Thought;