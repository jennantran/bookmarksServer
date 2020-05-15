const { v4: uuid } = require('uuid');
const id = uuid();

const bookmarks = [
    {
        id,
        title: 'Youtube',
        url: 'https://youtube.com',
        description: 'video streaming site',
        rating: 5
    },
    {
        id,
        title: 'Netflix',
        url: 'https://netflix.com',
        description: 'watch favorite shows',
        rating: 4
    },
    {
        id,
        title: 'Facebook',
        url: 'https://facebook.com',
        description: 'social media site',
        rating: 4
    }
];

module.exports = { bookmarks }