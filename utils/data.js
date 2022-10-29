const names = [
    'Alex',
    'Jim',
    'John',
    'Jimbo',
    'Chap',
    'Krug',
    'Emily',
    'Ashley',
    'Kahley',
    'Mike',
    'Daniel',
    'Lauren',
    'Kris',
    'Jake',
    'Carly',
    'Matt',
    'Ben',
    'Len',
    'Ron',
    'Nick',
    'Josh',
    'Megan',
    'Elon',
    'Jessica',
    'J-lo',
    'Cassie',
];


const randomThoughts = [
    'Inside the mind of every person that knows you is a uniquely different version of yourself.',
    'Every hollow chocolate bunny is carrying a pocket of air from somewhere else in the world.',
    'Water is really what a rainbow tastes like.',
    'You can remember that you forgot something, but you cant remember what you forgot.',
    'Some stranger somewhere still remembers you because you were kind to them when no one else was.',
    'Graveyards are probably the least likely place to be haunted because, realistically, none of the people buried died there.',
    'If you eat something with a cheese filling, you become the thing with a cheese filling.',
    'There is a chance you could have used the same utensil twice at a restaurant at different times.',
    'Birds probably do more people watching than people do bird watching.',
    'There are more numbers than there are things to count.',
    'Every broken clock is telling us when it passed away.',
    'Water is never truly yours — its just your turn to drink it.',
    'The syllables in On your mark, get set, go are a countdown.',
    'If magic was real, it would just be a branch of science.',
];

// const randomReaction = [

// ]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(randomThoughts),

        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThoughts };