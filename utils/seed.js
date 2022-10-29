const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    // await Thought.deleteMany({});

    const users = [];

    for (let i = 0; i < 20; i++) {
        const userName = getRandomName();
        const first = userName.split(' ')[0];
        const email = `${first}@gmail.com`;

        users.push({
            userName,
            email,

        });
    }
    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});