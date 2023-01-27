
db.createCollection( 'users', {validator: {$jsonSchema: {bsonType: 'object',title:'users',
    required: ['email', 'password', 'username', 'birthdate', 'gender', 'country', 'postcode', 'user_subscription'],
    properties: {
        email: {bsonType: 'string'},
        password: {bsonType: 'string'},
        username: {bsonType: 'string'},
        birthdate: {bsonType: 'date'},
        gender: {enum: ['female','male','agender']},
        country: {bsonType: 'string'},
        postcode: {bsonType: 'string'},
        user_subscription: {enum: ['free','premium']},
        favorite_songs: {bsonType: 'array',items: {bsonType: 'objectId'}},
        favorite_albums: {bsonType: 'array',items: {bsonType: 'objectId'}},
        favorite_artists: {bsonType: 'array',items: {bsonType: 'objectId'}}
}}}});  
db.createCollection( 'subscriptions', {validator: {$jsonSchema: {bsonType: 'object',title:'subscriptions',
    required: ['registration_date', 'renovation_date', 'user', 'payments'],
    properties: {
        registration_date: {bsonType: 'date'},
        renovation_date: {bsonType: 'date'},
        user: {bsonType: 'objectId'},
        payments: {bsonType: 'array',items: {title:'object',
            required: ['payment_date', 'quantity', 'payment_option'],
            properties: {
                payment_date: {bsonType: 'date'},
                quantity: {bsonType: 'decimal'},
                payment_option: {enum: ['cash','creditCard','payPal']},
                creditCard: {bsonType: 'object', title:'object',
                    required: ['card_number', 'expiration_date', 'security_code'],
                    properties: {card_number: {bsonType: 'string'},
                    expiration_date: {bsonType: 'date'},
                    security_code: {bsonType: 'string'}}},
                payPal: {bsonType: 'object', title:'object',
                    required: ['username'],
                    properties: {
                        username: {bsonType: 'string'}
}}}}}}}}});  
db.createCollection( 'playlists', {validator: {$jsonSchema: {bsonType: 'object',title:'playlists',
    required: ['user', 'playlist_title', 'number_of_songs', 'creation_date', 'songs', 'playlist_state'],
    properties: {
        user: {bsonType: 'objectId'},
        playlist_title: {bsonType: 'string'},
        number_of_songs: {bsonType: 'string'},
        creation_date: {bsonType: 'date'},
        songs: {bsonType: 'array',items: {bsonType: 'objectId'}},
        playlist_state: {enum: ['active','eliminated']},
        elimination_date: {bsonType: 'date'}
}}}});  
db.createCollection( 'songs', {validator: {$jsonSchema: {bsonType: 'object',title:'songs',
    required: ['song_title', 'duration', 'number_of_reproductions', 'album'],
    properties: {
        song_title: {bsonType: 'string'},
        duration: {bsonType: 'decimal'},
        number_of_reproductions: {bsonType: 'long'},
        album: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'albums', {validator: {$jsonSchema: {bsonType: 'object',title:'albums',
    required: ['album_title', 'publication_year', 'cover_image', 'artist'],
    properties: {
        album_title: {bsonType: 'string'},
        publication_year: {bsonType: 'string'},
        cover_image: {bsonType: 'string'},
        artist: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'artists', {validator: {$jsonSchema: {bsonType: 'object',title:'artists',
    required: ['artist_name', 'artist_photo'],
    properties: {
        artist_name: {bsonType: 'string'},
        artist_photo: {bsonType: 'string'},
        related_artists: {bsonType: 'array',items: {bsonType: 'objectId'}}
}}}});  



db.users.insertMany([
{email: "mads_nielsen@gmail.com", password: "fuglenermenneske", username: "mads_fuglen7", birthdate: new Date("1987-05-28"), gender: "male", country: "DENMARK", postcode: "47534", user_subscription: "free", favorite_songs: [ObjectId("63d3c93764f593f3092ec4bf"), ObjectId("63d3c93764f593f3092ec4ca"), ObjectId("63d3c93764f593f3092ec4cc")], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4ac"), ObjectId("63d3c81e64f593f3092ec4ae")], favorite_artists: [ObjectId("63d3c06964f593f3092ec49c"), ObjectId("63d3c06964f593f3092ec49d"), ObjectId("63d3c06964f593f3092ec49f")]},
{email: "mariapardojijon7@gmail.com", password: "cuatro5cinco4", username: "huevona35", birthdate: new Date("1990-07-01"), gender: "female", country: "SPAIN", postcode: "74567", user_subscription: "premium", favorite_songs: [ObjectId("63d3c93764f593f3092ec4be"), ObjectId("63d3c93764f593f3092ec4c1"), ObjectId("63d3c93764f593f3092ec4c2"), ObjectId("63d3c93764f593f3092ec4ce")], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4b0"), ObjectId("63d3c81e64f593f3092ec4b9"), ObjectId("63d3c81e64f593f3092ec4bb")], favorite_artists: [ObjectId("63d3c06964f593f3092ec49d"), ObjectId("63d3c06964f593f3092ec4a1")]},
{email: "leilajhon02@hotmail.com", password: "serendipityPass0", username: "serendipity20", birthdate: new Date("1993-12-30"), gender: "female", country: "UK", postcode: "76435", user_subscription: "free", favorite_songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4bd")], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4ac"), ObjectId("63d3c81e64f593f3092ec4ae")], favorite_artists: [ObjectId("63d3c06964f593f3092ec4a2")]},
{email: "marioguerrero@gmail.com", password: "a9fdn3k43nf", username: "nomamesguey8", birthdate: new Date("1992-03-17"), gender: "male", country: "MEXICO", postcode: "95469", user_subscription: "premium", favorite_songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4c3"), ObjectId("63d3c93764f593f3092ec4c8")], favorite_albums: [], favorite_artists: [ObjectId("63d3c06964f593f3092ec49e"), ObjectId("63d3c06964f593f3092ec4a2")]},
{email: "clarachiamelmelade@gmail.com", password: "23j5m4l24m325l3k", username: "heilvegans19", birthdate: new Date("1989-09-14"), gender: "female", country: "GERMANY", postcode: "24623", user_subscription: "premium", favorite_songs: [ObjectId("63d3c93764f593f3092ec4bf"), ObjectId("63d3c93764f593f3092ec4c9"), ObjectId("63d3c93764f593f3092ec4ca"), ObjectId("63d3c93764f593f3092ec4cf")], favorite_albums: [], favorite_artists: [ObjectId("63d3c06964f593f3092ec4a6"), ObjectId("63d3c06964f593f3092ec4a8")]},
{email: "cclaramentesal@gmail.com", password: "quenotesalpique", username: "claramente_22", birthdate: new Date("1991-06-21"), gender: "female", country: "SPAIN", postcode: "23542", user_subscription: "free", favorite_songs: [ObjectId("63d3c93764f593f3092ec4c6")], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4b2"), ObjectId("63d3c81e64f593f3092ec4b6")], favorite_artists: [ObjectId("63d3c06964f593f3092ec4a2")]},
{email: "mathiaskone@hotmail.com", password: "jn32doggie", username: "karlikerhunder3", birthdate: new Date("1979-03-17"), gender: "male", country: "NORWAY", postcode: "32422", user_subscription: "premium", favorite_songs: [ObjectId("63d3c93764f593f3092ec4c5"), ObjectId("63d3c93764f593f3092ec4c7"), ObjectId("63d3c93764f593f3092ec4cb")], favorite_albums: [], favorite_artists: []},
{email: "mayapaola@gmail.com", password: "msd9jfaks0sad", username: "redlipschaos", birthdate: new Date("1990-11-16"), gender: "agender", country: "ITALY", postcode: "23567", user_subscription: "premium", favorite_songs: [], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4b9")], favorite_artists: [ObjectId("63d3c06964f593f3092ec4a3"), ObjectId("63d3c06964f593f3092ec4a5")]},
{email: "mariehoffman@gmail.com", password: "9kasd0sdks", username: "lavieenrose96", birthdate: new Date("1996-10-28"), gender: "female", country: "CANADA", postcode: "96544", user_subscription: "free", favorite_songs: [], favorite_albums: [ObjectId("63d3c81e64f593f3092ec4ac"), ObjectId("63d3c81e64f593f3092ec4ad")], favorite_artists: [ObjectId("63d3c06964f593f3092ec49c")]},
{email: "hannasvenson@hotmail.com", password: "bormigihellen", username: "jegborimandag", birthdate: new Date("1988-07-19"), gender: "agender", country: "DENMARK", postcode: "00986", user_subscription: "free", favorite_songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4be"), ObjectId("63d3c93764f593f3092ec4c0")], favorite_albums: [], favorite_artists: [ObjectId("63d3c06964f593f3092ec4a9"), ObjectId("63d3c06964f593f3092ec4aa")]}
]);

db.subscriptions.insertMany([
{registration_date: new Date("2021-02-18"), renovation_date: new Date("2023-02-17"), user: ObjectId("63d3cb7964f593f3092ec4d1"), payments: [{payment_date: new Date("2021-02-18"), quantity: NumberDecimal("39.99"), payment_option: "payPal", payPal: {username: "Maria Pardo Jijon"}}, {payment_date: new Date("2022-02-18"), quantity: NumberDecimal("49.99"), payment_option: "payPal", payPal: {username: "Maria Pardo Jijon"}}]},
{registration_date: new Date("2021-05-29"), renovation_date: new Date("2023-05-28"), user: ObjectId("63d3cb7964f593f3092ec4d3"), payments: [{payment_date: new Date("2021-05-29"), quantity: NumberDecimal("39.99"), payment_option: "creditCard", creditCard: {card_number: "1234153123167545235", expiration_date: new Date("2024-09-10"), security_code: "423"}}, {payment_date: new Date("2022-05-29"), quantity: NumberDecimal("49.99"), payment_option: "creditCard", creditCard: {card_number: "1234153123167545235", expiration_date: new Date("2024-09-10"), security_code: "423"}}]},
{registration_date: new Date("2022-09-01"), renovation_date: new Date("2023-08-31"), user: ObjectId("63d3cb7964f593f3092ec4d4"), payments: [{payment_date: new Date("2022-09-01"), quantity: NumberDecimal("39.99"), payment_option: "payPal", payPal: {username: "Clara Pique"}}]},
{registration_date: new Date("2022-11-15"), renovation_date: new Date("2023-11-14"), user: ObjectId("63d3cb7964f593f3092ec4d6"), payments: [{payment_date: new Date("2022-11-15"), quantity: NumberDecimal("39.99"), payment_option: "creditCard", creditCard: {card_number: "7674326443644234241", expiration_date: new Date("2026-01-16"), security_code: "653"}}]},
{registration_date: new Date("2022-11-30"), renovation_date: new Date("2023-11-29"), user: ObjectId("63d3cb7964f593f3092ec4d7"), payments: [{payment_date: new Date("2022-11-30"), quantity: NumberDecimal("39.99"), payment_option: "creditCard", creditCard: {card_number: "8757456451253243266", expiration_date: new Date("2024-03-03"), security_code: "324"}}]}
]);

db.playlists.insertMany([
{user: ObjectId("63d3cb7964f593f3092ec4d0"), playlist_title: "80s 90s gems", number_of_songs: "6", creation_date: new Date("2022-03-29"), songs: [ObjectId("63d3c93764f593f3092ec4bf"), ObjectId("63d3c93764f593f3092ec4c0"), ObjectId("63d3c93764f593f3092ec4c4"), ObjectId("63d3c93764f593f3092ec4c5"), ObjectId("63d3c93764f593f3092ec4c6"), ObjectId("63d3c93764f593f3092ec4c7")], playlist_state: "active"},
{user: ObjectId("63d3cb7964f593f3092ec4d1"), playlist_title: "lets move the squelet", number_of_songs: "5", creation_date: new Date("2022-06-22"), songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4c2"), ObjectId("63d3c93764f593f3092ec4c4"), ObjectId("63d3c93764f593f3092ec4c6"), ObjectId("63d3c93764f593f3092ec4c8")], playlist_state: "active"},
{user: ObjectId("63d3cb7964f593f3092ec4d4"), playlist_title: "awesome females", number_of_songs: "9", creation_date: new Date("2022-12-01"), songs: [ObjectId("63d3c93764f593f3092ec4c2"), ObjectId("63d3c93764f593f3092ec4c3"), ObjectId("63d3c93764f593f3092ec4c4"), ObjectId("63d3c93764f593f3092ec4c5"), ObjectId("63d3c93764f593f3092ec4c7"), ObjectId("63d3c93764f593f3092ec4ca"), ObjectId("63d3c93764f593f3092ec4cb"), ObjectId("63d3c93764f593f3092ec4cc"), ObjectId("63d3c93764f593f3092ec4cd")], playlist_state: "active"},
{user: ObjectId("63d3cb7964f593f3092ec4d1"), playlist_title: "pop culture", number_of_songs: "8", creation_date: new Date("2022-10-16"), songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4c0"), ObjectId("63d3c93764f593f3092ec4c3"), ObjectId("63d3c93764f593f3092ec4c4"), ObjectId("63d3c93764f593f3092ec4c6"), ObjectId("63d3c93764f593f3092ec4c9"), ObjectId("63d3c93764f593f3092ec4ce"), ObjectId("63d3c93764f593f3092ec4cf")], playlist_state: "active"},
{user: ObjectId("63d3cb7964f593f3092ec4d3"), playlist_title: "mix for making mongodbs", number_of_songs: "20", creation_date: new Date("2022-08-03"), songs: [ObjectId("63d3c93764f593f3092ec4bc"), ObjectId("63d3c93764f593f3092ec4bd"), ObjectId("63d3c93764f593f3092ec4be"), ObjectId("63d3c93764f593f3092ec4bf"), ObjectId("63d3c93764f593f3092ec4c0"), ObjectId("63d3c93764f593f3092ec4c1"), ObjectId("63d3c93764f593f3092ec4c2"), ObjectId("63d3c93764f593f3092ec4c3"), ObjectId("63d3c93764f593f3092ec4c4"), ObjectId("63d3c93764f593f3092ec4c5"), ObjectId("63d3c93764f593f3092ec4c6"), ObjectId("63d3c93764f593f3092ec4c7"), ObjectId("63d3c93764f593f3092ec4c8"), ObjectId("63d3c93764f593f3092ec4c9"), ObjectId("63d3c93764f593f3092ec4ca"), ObjectId("63d3c93764f593f3092ec4cb"), ObjectId("63d3c93764f593f3092ec4cc"), ObjectId("63d3c93764f593f3092ec4cd"), ObjectId("63d3c93764f593f3092ec4ce"), ObjectId("63d3c93764f593f3092ec4cf")], playlist_state: "active"},
{user: ObjectId("63d3cb7964f593f3092ec4d0"), playlist_title: "randomrandom", number_of_songs: "5", creation_date: new Date("2022-02-27"), songs: [], playlist_state: "eliminated", elimination_date: new Date("2022-09-28")},
{user: ObjectId("63d3cb7964f593f3092ec4d6"), playlist_title: "very strange music", number_of_songs: "3", creation_date: new Date("2022-03-20"), songs: [], playlist_state: "eliminated", elimination_date: new Date("2022-03-21")},
{user: ObjectId("63d3cb7964f593f3092ec4d8"), playlist_title: "best music evah", number_of_songs: "5", creation_date: new Date("2022-05-21"), songs: [], playlist_state: "eliminated", elimination_date: new Date("2022-11-18")},
{user: ObjectId("63d3cb7964f593f3092ec4d9"), playlist_title: "test n4", number_of_songs: "6", creation_date: new Date("2022-06-12"), songs: [], playlist_state: "eliminated", elimination_date: new Date("2022-07-02")}
]);

db.songs.insertMany([
{song_title: "All I want is you", duration: NumberDecimal("2.37"), number_of_reproductions: Long("1245646"), album: ObjectId("63d3c81e64f593f3092ec4ab")},
{song_title: "Better together", duration: NumberDecimal("3.27"), number_of_reproductions: Long("1245646"), album: ObjectId("63d3c81e64f593f3092ec4ac")},
{song_title: "Banana Pancakes", duration: NumberDecimal("3.11"), number_of_reproductions: Long("2454366"), album: ObjectId("63d3c81e64f593f3092ec4ac")},
{song_title: "It could have been a brilliant career", duration: NumberDecimal("2.23"), number_of_reproductions: Long("5423532"), album: ObjectId("63d3c81e64f593f3092ec4ad")},
{song_title: "The boy with the arab strap", duration: NumberDecimal("5.14"), number_of_reproductions: Long("46174247"), album: ObjectId("63d3c81e64f593f3092ec4ad")},
{song_title: "Blues run the game", duration: NumberDecimal("3.31"), number_of_reproductions: Long("7453342"), album: ObjectId("63d3c81e64f593f3092ec4ae")},
{song_title: "Smile", duration: NumberDecimal("3.36"), number_of_reproductions: Long("232542326"), album: ObjectId("63d3c81e64f593f3092ec4af")},
{song_title: "Everything is just wonderful", duration: NumberDecimal("3.28"), number_of_reproductions: Long("5423212"), album: ObjectId("63d3c81e64f593f3092ec4af")},
{song_title: "Girls just wanna have fun", duration: NumberDecimal("3.58"), number_of_reproductions: Long("790323235"), album: ObjectId("63d3c81e64f593f3092ec4b0")},
{song_title: "True colors", duration: NumberDecimal("3.47"), number_of_reproductions: Long("198212821"), album: ObjectId("63d3c81e64f593f3092ec4b1")},
{song_title: "Walking on sunshine", duration: NumberDecimal("3.58"), number_of_reproductions: Long("314463142"), album: ObjectId("63d3c81e64f593f3092ec4b2")},
{song_title: "At last", duration: NumberDecimal("2.59"), number_of_reproductions: Long("321513212"), album: ObjectId("63d3c81e64f593f3092ec4b3")},
{song_title: "Little bitty pretty one", duration: NumberDecimal("2.23"), number_of_reproductions: Long("1235422"), album: ObjectId("63d3c81e64f593f3092ec4b4")},
{song_title: "5 years time", duration: NumberDecimal("3.35"), number_of_reproductions: Long("735423"), album: ObjectId("63d3c81e64f593f3092ec4b5")},
{song_title: "You and me", duration: NumberDecimal("2.40"), number_of_reproductions: Long("2364215"), album: ObjectId("63d3c81e64f593f3092ec4b6")},
{song_title: "Lite og stort", duration: NumberDecimal("3.11"), number_of_reproductions: Long("12441"), album: ObjectId("63d3c81e64f593f3092ec4b7")},
{song_title: "Jimmy", duration: NumberDecimal("4.24"), number_of_reproductions: Long("123461"), album: ObjectId("63d3c81e64f593f3092ec4b8")},
{song_title: "Valerie", duration: NumberDecimal("3.53"), number_of_reproductions: Long("246242124"), album: ObjectId("63d3c81e64f593f3092ec4b9")},
{song_title: "Jackie and Wilson", duration: NumberDecimal("3.43"), number_of_reproductions: Long("75352135"), album: ObjectId("63d3c81e64f593f3092ec4ba")},
{song_title: "Dancing shoes", duration: NumberDecimal("3.35"), number_of_reproductions: Long("14326421"), album: ObjectId("63d3c81e64f593f3092ec4bb")}
]);

db.albums.insertMany([
{album_title: "Juno Soundtrack", publication_year: "2007", cover_image: "juno.jpg", artist: ObjectId("63d3c06964f593f3092ec4a7")},
{album_title: "In Between Dreams", publication_year: "2005", cover_image: "inbetweendreams.jpg", artist: ObjectId("63d3c06964f593f3092ec4a2")},
{album_title: "The boy with the arab strap", publication_year: "1998", cover_image: "boywitharabstrap.jpg", artist: ObjectId("63d3c06964f593f3092ec4a1")},
{album_title: "Jackson C. Frank", publication_year: "2001", cover_image: "jacksoncfrank.jpg", artist: ObjectId("63d3c06964f593f3092ec49d")},
{album_title: "Alright, still", publication_year: "2006", cover_image: "alrightstill.jpg", artist: ObjectId("63d3c06964f593f3092ec49e")},
{album_title: "She is so unusual", publication_year: "1983", cover_image: "sheissounusual.jpg", artist: ObjectId("63d3c06964f593f3092ec49b")},
{album_title: "True colors", publication_year: "1986", cover_image: "truecolors.jpg", artist: ObjectId("63d3c06964f593f3092ec49b")},
{album_title: "Katrina&The Waves", publication_year: "1985", cover_image: "katrinandwaves.jpg", artist: ObjectId("63d3c06964f593f3092ec4a3")},
{album_title: "At last!", publication_year: "1960", cover_image: "atlast.jpg", artist: ObjectId("63d3c06964f593f3092ec4a4")},
{album_title: "Thurston Harris", publication_year: "1959", cover_image: "thurstonharris.jpg", artist: ObjectId("63d3c06964f593f3092ec4a5")},
{album_title: "Peaceful, the world lays me down", publication_year: "2008", cover_image: "peacefullonesome.jpg", artist: ObjectId("63d3c06964f593f3092ec4a8")},
{album_title: "You and me", publication_year: "1970", cover_image: "youandme.jpg", artist: ObjectId("63d3c06964f593f3092ec4a9")},
{album_title: "Henda i vaeret", publication_year: "2016", cover_image: "hendaivaeret.jpg", artist: ObjectId("63d3c06964f593f3092ec4a6")},
{album_title: "Gee whiz but this is a lonesome town", publication_year: "2007", cover_image: "geewhiztown.jpg", artist: ObjectId("63d3c06964f593f3092ec4aa")},
{album_title: "Back to black", publication_year: "2006", cover_image: "backtoblack.jpg", artist: ObjectId("63d3c06964f593f3092ec4a0")},
{album_title: "Hozier. Special Edition", publication_year: "2014", cover_image: "hozierspecial.jpg", artist: ObjectId("63d3c06964f593f3092ec49f")},
{album_title: "Whatever people say I am, thats what Im not", publication_year: "2006", cover_image: "whateverpeoplesay.jpg", artist: ObjectId("63d3c06964f593f3092ec49c")}
]);

db.artists.insertMany([
    {artist_name: "Cyndi Lauper", artist_photo: "cyndilauper.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49c"), ObjectId("63d3c06964f593f3092ec49d")]},
    {artist_name: "Arctic Monkeys", artist_photo: "arcticmonkeys.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49e")]},
    {artist_name: "Jackson C. Frank", artist_photo: "jacksoncfrank.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49f"), ObjectId("63d3c06964f593f3092ec4a1"), ObjectId("63d3c06964f593f3092ec4a4")]},
    {artist_name: "Lilly Allen", artist_photo: "lillyallen.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49b"), ObjectId("63d3c06964f593f3092ec49c"), ObjectId("63d3c06964f593f3092ec4a0"), ObjectId("63d3c06964f593f3092ec4a3")]},
    {artist_name: "Hozier", artist_photo: "hozier.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49d"), ObjectId("63d3c06964f593f3092ec4a1")]},
    {artist_name: "Amy Winehouse", artist_photo: "amywinehouse.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49b"), ObjectId("63d3c06964f593f3092ec4a4"), ObjectId("63d3c06964f593f3092ec4a5"), ObjectId("63d3c06964f593f3092ec4a9")]},
    {artist_name: "Belle&Sebastian", artist_photo: "belleandsebastian.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49d"), ObjectId("63d3c06964f593f3092ec4a4")]},
    {artist_name: "Jack Johnson", artist_photo: "jackjohnson.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a8")]},
    {artist_name: "Katrina&The Waves", artist_photo: "katrinaandthewaves.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49b"), ObjectId("63d3c06964f593f3092ec4a5")]},
    {artist_name: "Etta James", artist_photo: "ettajames.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a0"), ObjectId("63d3c06964f593f3092ec4a9")]},
    {artist_name: "Thurston Harris", artist_photo: "thurstonharris.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec49d"), ObjectId("63d3c06964f593f3092ec4a9")]},
    {artist_name: "No.4", artist_photo: "no4.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a1"), ObjectId("63d3c06964f593f3092ec4aa")]},
    {artist_name: "Barry Louis Polisar&co", artist_photo: "barrylouispolisarandco.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a3")]},
    {artist_name: "Noah and the whale", artist_photo: "noahandthewhale.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a2")]},
    {artist_name: "Penny and the Quarters", artist_photo: "pennyandthequarters.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a0"), ObjectId("63d3c06964f593f3092ec4a4"), ObjectId("63d3c06964f593f3092ec4a5")]},
    {artist_name: "Moriarty", artist_photo: "moriarty.jpg", related_artists: [ObjectId("63d3c06964f593f3092ec4a6")]}
]);