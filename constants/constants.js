const MBTI = {
    key: 'mbti',
    message: 'Select your Myers-Brigg Type Indicator.',
    darkColor: '#65A29E',
    lightColor: '#C6F4F2',
    values:[{
        type: 'analysts',
        darkColour: '#8847B7',
        lightColour: '#F5E0FF',
        values: ['intj', 'intp', 'entj', 'entp']
    },
    {
        type: 'diplomats',
        darkColour: '#65A272',
        lightColour: '#E7FFDE',
        values: ['infj', 'infp', 'enfj', 'enfp']
    },
    {
        type: 'sentinels',
        darkColour: '#65A29E',
        lightColour: '#DBF2F2',
        values: ['istj', 'isfj', 'estj', 'esfj']
    },
    {
        type: 'explorers',
        darkColour: '#CD9B1A',
        lightColour: '#FFF2D1',
        values: ['istp', 'isfp', 'estp', 'esfp']
    }
]};

const MOVIES = {
    key: 'movies',
    message: 'Select up to three.',
    darkColor: '#65A272',
    lightColor: '#C6F4CA',
    values: [
    'action',
    'adventure',
    'animation',
    'comedy',
    'crime',
    'documentary',
    'drama',
    'fantasy',
    'horror',
    'mystery',
    'romance',
    'sci-fi',
    'thriller'
]};

const MUSIC = {
    key: 'music',
    message: 'Select up to three.',
    darkColor: '#8F8F61',
    lightColor: '#F4F0C6',
    values:[
    'anime',
    'classical',
    'country',
    'edm',
    'folk',
    'hip hop',
    'indie',
    'jazz',
    'k-pop',
    'pop',
    'rnb',
    'rock'
]};

const GAMES = {
    key: 'games',
    message: 'Select up to three.',
    darkColor: '#9965A2',
    lightColor: '#EEC6F4',
    values:[
    'apex legends',
    'call of duty',
    'cs:go',
    'dota 2',
    'fortnite',
    'genshin impact',
    'gta v',
    'league of legends',
    'minecraft',
    'nba 2k',
    'rocket league',
    'valorant'
]};

const FOOD = {
    key: 'food',
    message: 'Select up to three.',
    darkColor: '#637590',
    lightColor: '#C6D8F4',
    values:[
    'american',
    'asian fusion',
    'breakfast & brunch',
    'cafes',
    'chinese',
    'french',
    'italian',
    'japanese',
    'mediterranean',
    'mexican',
    'soul food'
]};

export {MBTI, MOVIES, MUSIC, GAMES, FOOD}
