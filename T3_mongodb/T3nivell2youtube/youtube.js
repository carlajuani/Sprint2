
db.createCollection( 'users', {validator: {$jsonSchema: {bsonType: 'object',title:'users',
    required: ['email', 'password', 'username', 'birthdate', 'gender', 'country', 'postcode'],
    properties: {
        chanel_subscriptions: {bsonType: 'array', items: {bsonType: 'objectId'}},
        email: {bsonType: 'string'},
        password: {bsonType: 'string'},
        username: {bsonType: 'string'},
        birthdate: {bsonType: 'date'},
        gender: {enum: ['female','male','agender']},
        country: {bsonType: 'string'},
        postcode: {bsonType: 'string'}
}}}});  
db.createCollection( 'playlists', {validator: {$jsonSchema: {bsonType: 'object',title:'playlists',
    required: ['playlist_name', 'creation_date', 'playlist_status', 'videos', 'user'],
    properties: {
        playlist_name: {bsonType: 'string'},
        creation_date: {bsonType: 'date'},
        playlist_status: {enum: ['public','private']},
        videos: {bsonType: 'array', items: {bsonType: 'objectId'}},
        user: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'chanels', {validator: {$jsonSchema: {bsonType: 'object',title:'chanels',
    required: ['chanel_name', 'chanel_description', 'creation_date', 'user'],
    properties: {
        chanel_name: {bsonType: 'string'},
        chanel_description: {bsonType: 'string'},
        creation_date: {bsonType: 'date'},
        user: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'videos', {validator: {$jsonSchema: {bsonType: 'object',title:'videos',
    required: ['video_title', 'description', 'size', 'file_name', 'duration', 'number_of_views', 
    'number_of_upvotes', 'number_of_downvotes', 'video_status', 'publication_date','user'],
    properties: {
        video_title: {bsonType: 'string'},
        description: {bsonType: 'string'},
        size: {bsonType: 'decimal'},
        file_name: {bsonType: 'string'},
        duration: {bsonType: 'decimal'},
        thumbnail: {bsonType: 'string'},
        tags: {bsonType: 'array',items: {}},
        number_of_views: {bsonType: 'long'},
        number_of_upvotes: {bsonType: 'long'},
        number_of_downvotes: {bsonType: 'long'},
        video_status: {enum: ['public','private','hidden']},
        publication_date: {bsonType: 'date'},
        votes: {bsonType: 'array',items: {title:'object',
            required: ['vote_type', 'vote_datetime', 'user'],
            properties: {
            vote_type: {enum: ['upvote','downvote']},
            vote_datetime: {bsonType: 'date'},
            user: {bsonType: 'objectId'}
        }}},
        user: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'comments', {validator: {$jsonSchema: {bsonType: 'object',title:'comments',
    required: ['comment_text', 'comment_datetime', 'votes', 'user', 'video'], 
    properties: {
        comment_text: {bsonType: 'string'},
        comment_datetime: {bsonType: 'date'},
        votes: {bsonType: 'array',items: {title:'object', 
            required: ['vote_type', 'vote_datetime', 'user'], 
            properties: {
                vote_type: {enum: ['upvote','downvote']},
                vote_datetime: {bsonType: 'date'},
                user: {bsonType: 'objectId'}}}},
        user: {bsonType: 'objectId'},
        video: {bsonType: 'objectId'}
}}}});  

db.users.insertMany([
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec486")], email: "marcosks@gmail.com", password: "12345", username: "unsenyoro69", birthdate: new Date("1992-03-02"), gender: "male", country: "SPAIN", postcode: "32413"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec487"), ObjectId("63d3b6a364f593f3092ec489"), ObjectId("63d3b6a364f593f3092ec48a")], email: "maryrose7@gmail.com", password: "casiopea52", username: "maryrose7", birthdate: new Date("1997-12-23"), gender: "female", country: "NORWAY", postcode: "12353"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec489")], email: "laraviitta22@hotmaill.com", password: "lamiapassword", username: "chiaecompania", birthdate: new Date("1991-11-15"), gender: "female", country: "ITALY", postcode: "12341"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec488"), ObjectId("63d3b6a364f593f3092ec48a")], email: "blackether@gmail.com", password: "12b39E80g5a", username: "blackether", birthdate: new Date("1998-09-17"), gender: "agender", country: "UK", postcode: "72745"},
{chanel_subscriptions: [], email: "luvsjohnson@hotmaill.com", password: "mYpAssWordIsThis", username: "randomrandom", birthdate: new Date("1990-11-15"), gender: "male", country: "BELGIUM", postcode: "13546"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec488"), ObjectId("63d3b6a364f593f3092ec489")], email: "foofighter88@gmail.com", password: "fooFighters4EVAH", username: "foofighters88", birthdate: new Date("1988-07-19"), gender: "male", country: "SPAIN", postcode: "14633"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec48a")], email: "madsnielsen@gmail.com", password: "bjorneson12", username: "madsnielsen", birthdate: new Date("1973-12-05"), gender: "male", country: "DENMARK", postcode: "14356"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec488")], email: "lolaperez2@gmail.com", password: "unaynomaspato1", username: "lolalolazo2", birthdate: new Date("1984-05-24"), gender: "female", country: "SPAIN", postcode: "13456"},
{chanel_subscriptions: [], email: "elsaschneider@gmail.com", password: "wieGetsUnder31", username: "diehunderer9", birthdate: new Date("1994-07-18"), gender: "female", country: "GERMANY", postcode: "16334"},
{chanel_subscriptions: [], email: "hansliebsenn@gmail.com", password: "olaolaesPaNol", username: "heilveggies00", birthdate: new Date("1999-10-29"), gender: "male", country: "GERMANY", postcode: "62345"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec48a")], email: "miagodx@hotmailll.com", password: "firefliesandelse", username: "onceuponamale", birthdate: new Date("2004-01-04"), gender: "agender", country: "UK", postcode: "34246"},
{chanel_subscriptions: [], email: "marialopez555@gmail.com", password: "uno1dos2tres3", username: "tirititraun36", birthdate: new Date("2001-08-23"), gender: "female", country: "SPAIN", postcode: "43253"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec486"), ObjectId("63d3b6a364f593f3092ec488")], email: "neojonas@gmail.com", password: "thehorizonisfar", username: "neoweirdo", birthdate: new Date("1993-06-21"), gender: "male", country: "CANADA", postcode: "23575"},
{chanel_subscriptions: [], email: "mennesker00@hotmaill.com", password: "undskildjegertreat", username: "elskermig1", birthdate: new Date("1994-04-14"), gender: "male", country: "DENMARK", postcode: "78979"},
{chanel_subscriptions: [ObjectId("63d3b6a364f593f3092ec486")], email: "darioherrera23@gmail.com", password: "lapinchatumare55", username: "orgulloindigena6", birthdate: new Date("2003-12-12"), gender: "male", country: "MEXIC", postcode: "06244"}
]);

db.playlists.insertMany([
{playlist_name: "feminist humor", creation_date: new Date("2022-09-25"), playlist_status: "private", videos: [ObjectId("63d3b47c64f593f3092ec44e"), ObjectId("63d3b47c64f593f3092ec454"), ObjectId("63d3b47c64f593f3092ec456")], user: ObjectId("63d3ad3764f593f3092ec407")},
{playlist_name: "random humor", creation_date: new Date("2022-10-03"), playlist_status: "public", videos: [ObjectId("63d3b47c64f593f3092ec44b"), ObjectId("63d3b47c64f593f3092ec452"), ObjectId("63d3b47c64f593f3092ec457"), ObjectId("63d3b47c64f593f3092ec458")], user: ObjectId("63d3ad3764f593f3092ec404")},
{playlist_name: "news", creation_date: new Date("2022-11-29"), playlist_status: "private", videos: [ObjectId("63d3b47c64f593f3092ec451"), ObjectId("63d3b47c64f593f3092ec453"), ObjectId("63d3b47c64f593f3092ec455")], user: ObjectId("63d3ad3764f593f3092ec40d")},
{playlist_name: "gamming and programming", creation_date: new Date("2022-12-06"), playlist_status: "public", videos: [ObjectId("63d3b47c64f593f3092ec44c"), ObjectId("63d3b47c64f593f3092ec44d"), ObjectId("63d3b47c64f593f3092ec450"), ObjectId("63d3b47c64f593f3092ec459")], user: ObjectId("63d3ad3764f593f3092ec40a")}
]);

db.chanels.insertMany([
{chanel_name: "elRubiusReviews", chanel_description: "reviews of the youtuber ElRubius videos", creation_date: new Date("2021-04-28"), user: ObjectId("63d3ad3764f593f3092ec405")},
{chanel_name: "myInterests", chanel_description: "anything that I find interesting goes", creation_date: new Date("2021-09-07"), user: ObjectId("63d3ad3764f593f3092ec401")},
{chanel_name: "coolMusic", chanel_description: "the best music of 2000s", creation_date: new Date("2022-02-01"), user: ObjectId("63d3ad3764f593f3092ec407")},
{chanel_name: "randomHumor", chanel_description: "best humor videos in the internet", creation_date: new Date("2022-06-06"), user: ObjectId("63d3ad3764f593f3092ec40b")},
{chanel_name: "elTornillo", chanel_description: "el espacio feminista de la tuerca", creation_date: new Date("2022-10-24"), user: ObjectId("63d3ad3764f593f3092ec40d")}
]);

db.videos.insertMany([
{video_title: "apm capitol 413", description: "capitol 413 12-11-22", size: NumberDecimal("89.34"), file_name: "apm_capitol_413", duration: NumberDecimal("24.11"), thumbnail: "apm_capitol_413.img", tags: ["humor", "random"], number_of_views: Long("23654"), number_of_upvotes: Long("654"), number_of_downvotes: Long("234"), video_status: "public", publication_date: new Date("2016-03-21"), votes: [], user: ObjectId("63d3ad3764f593f3092ec400")},
{video_title: "hollow knight playthrough 1", description: "game dev playing for the first time", size: NumberDecimal("56.23"), file_name: "hk_playthrough_1", duration: NumberDecimal("6.51"), thumbnail: "hk_playthrough_1.img", tags: ["games"], number_of_views: Long("324642"), number_of_upvotes: Long("324"), number_of_downvotes: Long("7643"), video_status: "hidden", publication_date: new Date("2017-05-14"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-07-30 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec407")}], user: ObjectId("63d3ad3764f593f3092ec404")},
{video_title: "hollow knight playthrough 2", description: "game dev trying to get double jump", size: NumberDecimal("23.45"), file_name: "hk_playthrough_2", duration: NumberDecimal("8.46"), thumbnail: "hk_playthrough_2.img", tags: ["games"], number_of_views: Long("143564"), number_of_upvotes: Long("234"), number_of_downvotes: Long("32432"), video_status: "hidden", publication_date: new Date("2017-06-25"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-02-08 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec401") }, {vote_type: "downvote", vote_datetime: new Date("2022-11-15 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40d")}], user: ObjectId("63d3ad3764f593f3092ec401")},
{video_title: "how to avoid senyoros on christmas", description: "guide for young frustrated feminists", size: NumberDecimal("54.35"), file_name: "feminist_guide_senyoros", duration: NumberDecimal("12.03"), thumbnail: "feminist_guide_senyoros.img", tags: ["politics", "humor"], number_of_views: Long("12435"), number_of_upvotes: Long("324"), number_of_downvotes: Long("543"), video_status: "public", publication_date: new Date("2019-01-11"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-05-29 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec404")}], user: ObjectId("63d3ad3764f593f3092ec402")},
{video_title: "amphibians in the world", description: "the most amazing creatures living on earth", size: NumberDecimal("24.12"), file_name: "ww_amphibians", duration: NumberDecimal("7.23"), thumbnail: "ww_amphibians.img", tags: ["animals"], number_of_views: Long("22465"), number_of_upvotes: Long("1342"), number_of_downvotes: Long("234"), video_status: "public", publication_date: new Date("2019-07-28"), votes: [{vote_type: "upvote", vote_datetime: new Date("2019-01-11"), user: ObjectId("63d3ad3764f593f3092ec401")}, {vote_type: "upvote", vote_datetime: new Date("2022-01-23 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec402")}], user: ObjectId("63d3ad3764f593f3092ec400")},
{video_title: "how to insert images in mysql", description: "step by step guide to learn the best way", size: NumberDecimal("65.43"), file_name: "how_to_with_john_wilson_32", duration: NumberDecimal("4.16"), thumbnail: "how_to_with_john_wilson_32.img", tags: ["programming"], number_of_views: Long("35461"), number_of_upvotes: Long("2543"), number_of_downvotes: Long("653"), video_status: "private", publication_date: new Date("2019-09-29"), votes: [{vote_type: "downvote", vote_datetime: new Date("2022-04-14 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec402")}, {vote_type: "upvote", vote_datetime: new Date("2022-01-01 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec406")}, {vote_type: "downvote", vote_datetime: new Date("2022-12-04 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40b")}], user: ObjectId("63d3ad3764f593f3092ec40a")},
{video_title: "environmental analysis of cities", description: "examples of sustainable policies for europeans", size: NumberDecimal("34.23"), file_name: "city_examples_sustainability", duration: NumberDecimal("3.39"), thumbnail: "city_examples_sustainability.img", tags: ["politics", "news"], number_of_views: Long("5364121"), number_of_upvotes: Long("2345"), number_of_downvotes: Long("543"), video_status: "public", publication_date: new Date("2019-09-02"), votes: [], user: ObjectId("63d3ad3764f593f3092ec40d")},
{video_title: "pregnancy announcements compilation 4", description: "the best and funniest moments part 4", size: NumberDecimal("76.62"), file_name: "pregnancy_compilation_4", duration: NumberDecimal("23.18"), thumbnail: "pregnancy_compilation_4.img", tags: ["humor", "reaction"], number_of_views: Long("135461"), number_of_upvotes: Long("234"), number_of_downvotes: Long("5432"), video_status: "public", publication_date: new Date("2020-02-18"), votes: [], user: ObjectId("63d3ad3764f593f3092ec408")},
{video_title: "how to get cheap education in europe", description: "tricks to finance education for young adults", size: NumberDecimal("34.24"), file_name: "tricks_and_treats_europe", duration: NumberDecimal("5.47"), thumbnail: "tricks_and_treats_europe.img", tags: ["politics"], number_of_views: Long("13546"), number_of_upvotes: Long("235"), number_of_downvotes: Long("235"), video_status: "private", publication_date: new Date("2020-11-29"), votes: [{vote_type: "upvote", vote_datetime: new Date("2023-01-04 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40d")}], user: ObjectId("63d3ad3764f593f3092ec403")},
{video_title: "el tornillo episodio 48", description: "porque se llama feminismo y no igualdad", size: NumberDecimal("64.83"), file_name: "tornillo_episodio_48", duration: NumberDecimal("16.04"), thumbnail: "tornillo_episodio_48.img", tags: ["humor", "public_opinion"], number_of_views: Long("13453632"), number_of_upvotes: Long("6432"), number_of_downvotes: Long("235"), video_status: "public", publication_date: new Date("2021-01-04"), votes: [], user: ObjectId("63d3ad3764f593f3092ec400")},
{video_title: "news about black lives matter protest", description: "last news on Atlantas riots and detentions", size: NumberDecimal("45.90"), file_name: "atlanta_protesters_1", duration: NumberDecimal("13.06"), thumbnail: "atlanta_protesters_1.img", tags: ["politics", "news"], number_of_views: Long("13546"), number_of_upvotes: Long("542"), number_of_downvotes: Long("235"), video_status: "private", publication_date: new Date("2022-03-13"), votes: [{vote_type: "upvote", vote_datetime: new Date("2023-01-13 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec403")}], user: ObjectId("63d3ad3764f593f3092ec40b")},
{video_title: "bo burnham white womans instagram", description: "song of the one man show Inside on Netflix", size: NumberDecimal("36.23"), file_name: "white_woman_bo_burham", duration: NumberDecimal("4.35"), thumbnail: "white_woman_bo_burham.img", tags: ["music", "humor"], number_of_views: Long("13246"), number_of_upvotes: Long("234"), number_of_downvotes: Long("653"), video_status: "public", publication_date: new Date("2022-04-08"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-10-03 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec408")}, {vote_type: "upvote", vote_datetime: new Date("2022-12-26 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40d")}], user: ObjectId("63d3ad3764f593f3092ec405")},
{video_title: "bo burnham welcome to the internet", description: "song of the one man show Inside on Netflix", size: NumberDecimal("74.73"), file_name: "welcome_internet_bo_burnham", duration: NumberDecimal("5.18"), thumbnail: "welcome_internet_bo_burnham.img", tags: ["music", "humor"], number_of_views: Long("7634"), number_of_upvotes: Long("6344"), number_of_downvotes: Long("234"), video_status: "public", publication_date: new Date("2022-05-27"), votes: [], user: ObjectId("63d3ad3764f593f3092ec405")},
{video_title: "curiosities about language phonemas", description: "did you know there are 3 whistle languages", size: NumberDecimal("54.28"), file_name: "language_phonemas_3", duration: NumberDecimal("17.58"), thumbnail: "language_phonemas_3.img", tags: ["random"], number_of_views: Long("257752"), number_of_upvotes: Long("642"), number_of_downvotes: Long("53"), video_status: "hidden", publication_date: new Date("2022-10-25"), votes: [], user: ObjectId("63d3ad3764f593f3092ec401")},
{video_title: "best puzzle games on steam 2022", description: "compilation of the best according to upvotes", size: NumberDecimal("45.11"), file_name: "ranking_steam_puzzles", duration: NumberDecimal("2.39"), thumbnail: "ranking_steam_puzzles.img", tags: ["games"], number_of_views: Long("2678643"), number_of_upvotes: Long("1456"), number_of_downvotes: Long("134"), video_status: "public", publication_date: new Date("2023-01-01"), votes: [{vote_type: "downvote", vote_datetime: new Date("2022-10-02 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec401")}, {vote_type: "downvote", vote_datetime: new Date("2022-11-16 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec403")}], user: ObjectId("63d3ad3764f593f3092ec407")}
]);

db.comments.insertMany([
    {comment_text: "thsi is full of shit", comment_datetime: new Date("2021-02-23 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-10-17 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec408")}, {vote_type: "upvote", vote_datetime: new Date("2022-12-28 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec409")}], user: ObjectId("63d3ad3764f593f3092ec401"), video: ObjectId("63d3b47c64f593f3092ec450")},
    {comment_text: "LMAO", comment_datetime: new Date("2022-04-29 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-04-13 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec400")}, {vote_type: "downvote", vote_datetime: new Date("2022-11-06 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec401")}, {vote_type: "downvote", vote_datetime: new Date("2022-10-12 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec407")}], user: ObjectId("63d3ad3764f593f3092ec408"), video: ObjectId("63d3b47c64f593f3092ec44f")},
    {comment_text: "listen in repeat", comment_datetime: new Date("2022-05-03 00:00:00"), votes: [], user: ObjectId("63d3ad3764f593f3092ec406"), video: ObjectId("63d3b47c64f593f3092ec44d")},
    {comment_text: "LOOOOOOL", comment_datetime: new Date("2022-05-14 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-09-29 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec402")}, {vote_type: "upvote", vote_datetime: new Date("2022-01-02 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40b")}, {vote_type: "downvote", vote_datetime: new Date("2022-11-14 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40d")}], user: ObjectId("63d3ad3764f593f3092ec400"), video: ObjectId("63d3b47c64f593f3092ec453")},
    {comment_text: "super interesting", comment_datetime: new Date("2022-06-10 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-10-24 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec407")}, {vote_type: "upvote", vote_datetime: new Date("2022-12-31 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40b")}], user: ObjectId("63d3ad3764f593f3092ec402"), video: ObjectId("63d3b47c64f593f3092ec44c")},
    {comment_text: "thanks for the info", comment_datetime: new Date("2022-08-06 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-11-15 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40e")}], user: ObjectId("63d3ad3764f593f3092ec40c"), video: ObjectId("63d3b47c64f593f3092ec44c")},
    {comment_text: "fucking USA dude", comment_datetime: new Date("2022-10-28 00:00:00"), votes: [], user: ObjectId("63d3ad3764f593f3092ec404"), video: ObjectId("63d3b47c64f593f3092ec455")},
    {comment_text: "hahaha", comment_datetime: new Date("2022-10-30 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-12-03 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec402")}, {vote_type: "downvote", vote_datetime: new Date("2022-05-22 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec405")}], user: ObjectId("63d3ad3764f593f3092ec401"), video: ObjectId("63d3b47c64f593f3092ec450")},
    {comment_text: "really? wtf", comment_datetime: new Date("2022-11-15 00:00:00"), votes: [{vote_type: "upvote", vote_datetime: new Date("2022-12-28 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec405")}], user: ObjectId("63d3ad3764f593f3092ec402"), video: ObjectId("63d3b47c64f593f3092ec44e")},
    {comment_text: "wow", comment_datetime: new Date("2022-12-01 00:00:00"), votes: [{vote_type: "downvote", vote_datetime: new Date("2022-12-29 00:00:00"), user: ObjectId("63d3ad3764f593f3092ec40b")}], user: ObjectId("63d3ad3764f593f3092ec40d"), video: ObjectId("63d3b47c64f593f3092ec457")}
]);