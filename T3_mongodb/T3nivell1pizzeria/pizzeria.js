
db.createCollection( 'clients', {validator: {$jsonSchema: {bsonType: 'object',title:'clients',
    required: ['first_name', 'surname', 'phone', 'address'],
    properties: {
        first_name: {bsonType: 'string'},
        surname: {bsonType: 'string'},
        phone: {bsonType: 'string'},
        address: {bsonType: 'object', title:'object',
            required: ['street', 'street_number', 'postcode', 'location'],
            properties: {
                street: {bsonType: 'string'},
                street_number: {bsonType: 'string'},
                postcode: {bsonType: 'string'},
                location: {bsonType: 'object', title:'object',
                    required: ['locality', 'province'],
                    properties: {
                        locality: {bsonType: 'string'},
                        province: {bsonType: 'string'}
}}}}}}}});  
db.createCollection( 'products', {validator: {$jsonSchema: {bsonType: 'object',title:'products',
    required: ['product_type', 'product_name', 'description', 'unit_price'],
    properties: {
        product_type: {bsonType: 'string'},
        product_name: {bsonType: 'string'},
        description: {bsonType: 'string'},
        image: {bsonType: 'string'},
        unit_price: {bsonType: 'decimal'},
        pizza_category: {bsonType: 'string'}
}}}});  
db.createCollection( 'orders', {validator: {$jsonSchema: {bsonType: 'object',title:'orders',
    required: ['order_datetime', 'order_type', 'total_price', 'client', 'products', 'store'],
    properties: {
        order_datetime: {bsonType: 'date'},
        order_type: {bsonType: 'string'},
        total_price: {bsonType: 'decimal'},
        delivery_datetime: {bsonType: 'date'},
        client: {bsonType: 'objectId'},
        products: {bsonType: 'array',items: {bsonType: 'objectId'}},
        employee: {bsonType: 'objectId'},
        store: {bsonType: 'objectId'}
}}}});  
db.createCollection( 'employees', {validator: {$jsonSchema: {bsonType: 'object',title:'employees',
    required: ['first_name', 'surname', 'NIF', 'phone', 'job_position', 'store'],
    properties: {
        first_name: {bsonType: 'string'},
        surname: {bsonType: 'string'},
        NIF: {bsonType: 'string'},
        phone: {bsonType: 'string'},
        job_position: {bsonType: 'string'},
        store: {bsonType: 'objectId'}}}}});  
db.createCollection( 'stores', {validator: {$jsonSchema: {bsonType: 'object',title:'stores',
    required: ['address'],
    properties: {
        address: {bsonType: 'object', title:'object',
            required: ['street', 'street_number', 'postcode', 'location'],
            properties: {
                street: {bsonType: 'string'},
                street_number: {bsonType: 'string'},
                postcode: {bsonType: 'string'},
                location: {bsonType: 'object', title:'object',
                    required: ['locality', 'province'],
                    properties: {
                        locality: {bsonType: 'string'},
                        province: {bsonType: 'string'}
}}}}}}}});  


db.clients.insertMany([
{first_name: "Manolito", surname: "Gafotas Casadevall", phone: "683478232", address: {street: "avinguda roma", street_number: "24", postcode: "08293", location: {locality: "Badalona", province: "Barcelona"}}},
{first_name: "Laura", surname: "Perez Jimenez", phone: "683478232", address: {street: "rambla badal", street_number: "12", postcode: "08392", location: {locality: "Barcelona", province: "Barcelona"}}},
{first_name: "Marina", surname: "Gomez Maduro", phone: "685393829", address: {street: "gran via", street_number: "334", postcode: "08294", location: {locality: "Barcelona", province: "Barcelona"}}},
{first_name: "Bernat", surname: "Vidal Becerra", phone: "694030395", address: {street: "pastor", street_number: "35", postcode: "09234", location: {locality: "Badalona", province: "Barcelona"}}},
{first_name: "Jose", surname: "Bes Grandio", phone: "792394924", address: {street: "pge batllo", street_number: "4", postcode: "92843", location: {locality: "Hospitalet de Llobregat", province: "Barcelona"}}},
{first_name: "Liam", surname: "Zamudio Jimenez", phone: "792398593", address: {street: "av diagonal", street_number: "167", postcode: "02384", location: {locality: "Esplugues", province: "Barcelona"}}},
{first_name: "Eva", surname: "Rodriguez Rodriguez", phone: "692938592", address: {street: "av sarria", street_number: "139", postcode: "89420", location: {locality: "Esplugues", province: "Barcelona"}}},
{first_name: "Marina", surname: "Ferran Longoria", phone: "782390534", address: {street: "enric granados", street_number: "51", postcode: "08232", location: {locality: "Reus", province: "Tarragona"}}},
{first_name: "Esther", surname: "Blanchett Mejide", phone: "662388539", address: {street: "carrer de sants", street_number: "48", postcode: "08234", location: {locality: "Reus", province: "Tarragona"}}},
{first_name: "Pablo", surname: "Torres Parra", phone: "602949866", address: {street: "av carrilet", street_number: "93", postcode: "09382", location: {locality: "Tarragona", province: "Tarragona"}}}
]);

db.products.insertMany([
{product_type: "drink", product_name: "Aigua 35ML", description: "aigua petita", image: "water.jpg", unit_price: NumberDecimal("1.50")},
{product_type: "drink", product_name: "Aigua 1L", description: "aigua gran", image: "water2.jpg", unit_price: NumberDecimal("2.00")},
{product_type: "drink", product_name: "Fanta llimona", description: "llauna", image: "soda1.jpg", unit_price: NumberDecimal("2.30")},
{product_type: "drink", product_name: "Fanta taronja", description: "llauna", image: "soda2.jpg", unit_price: NumberDecimal("2.30")},
{product_type: "drink", product_name: "Cocacola", description: "llauna", image: "soda3.jpg", unit_price: NumberDecimal("2.30")},
{product_type: "drink", product_name: "Cervesa 33ML", description: "llauna", image: "beer.jpg", unit_price: NumberDecimal("2.50")},
{product_type: "burguer", product_name: "Burger Classic Chicken", description: "Pollastre marinat casola, cabdells, tomaquet, ceba de figueres i salsa burger world", image: "burguer1.jpg", unit_price: NumberDecimal("8.10")},
{product_type: "burguer", product_name: "Orlando Burger", description: "Pollastre marinat, cabdells, tomaquet, ceba, provolone, xampinyons, i guacamole", image: "burguer2.jpg", unit_price: NumberDecimal("11.50")},
{product_type: "burguer", product_name: "Burger World xai", description: "200gr be, cabdells, tomaquet, ceba, formatge de cabra, pebre verd i salsa", image: "burguer3.jpg", unit_price: NumberDecimal("12.75")},
{product_type: "burguer", product_name: "Burguer Crispy Chicken", description: "Pollastre fregit arrebossat casola, cabdells, tomaquet, ceba, cheddar i salsa bbq", image: "burguer4.jpg", unit_price: NumberDecimal("10.15")},
{product_type: "burguer", product_name: "Burger Yucatan", description: "Vedella carn emmetxada estil pibil, cabdells, ceba fregida crispy i salsa thai", image: "burguer5.jpg", unit_price: NumberDecimal("11.45")},
{product_type: "burguer", product_name: "Burger XXL Texas", description: "400g. vedella, cabdells, manxec, tomaquet, ceba, provolone i salsa mel mostassa", image: "burguer6.jpg", unit_price: NumberDecimal("17.30")},
{product_type: "pizza", product_name: "Napolitana", description: "estil tradicional, tomata natural i alfabrega", image: "pizza1.jpg", unit_price: NumberDecimal("11.95"), pizza_category: "Classiques"},
{product_type: "pizza", product_name: "Margarita", description: "la de sempre, pels amants de la senzillesa", image: "pizza2.jpg", unit_price: NumberDecimal("10.55"), pizza_category: "Classiques"},
{product_type: "pizza", product_name: "Diabola", description: "emmental i xorisso picant i bitxo", image: "pizza3.jpg", unit_price: NumberDecimal("12.95"), pizza_category: "Classiques"},
{product_type: "pizza", product_name: "Vegetal", description: "verdura1,2,3,4 i 5 amb mozzarella", image: "pizza4.jpg", unit_price: NumberDecimal("12.50"), pizza_category: "Veganes"},
{product_type: "pizza", product_name: "Salmoneta", description: "Salmo fumat i burrata amb canonges", image: "pizza5.jpg", unit_price: NumberDecimal("14.40"), pizza_category: "Especials"},
{product_type: "pizza", product_name: "Trufada", description: "Parmesa amb trufa ratllada i ou ferrat", image: "pizza6.jpg", unit_price: NumberDecimal("14.80"), pizza_category: "Especials"},
{product_type: "pizza", product_name: "6 formatges", description: "formatge 1,2,3,4,5,6", image: "pizza7.jpg", unit_price: NumberDecimal("13.95"), pizza_category: "Especials"},
{product_type: "pizza", product_name: "Capricciosa", description: "pernil dolss, carxofes i olives negres", image: "pizza8.jpg", unit_price: NumberDecimal("13.25"), pizza_category: "Sense gluten"}
]);

db.orders.insertMany([
{order_datetime: new Date("2022-01-01"), order_type: "delivery", total_price: NumberDecimal("13.00"), delivery_datetime: new Date("2022-01-01 09:32:00"), client: ObjectId("63d1135b3e1966413bc6e94f"), products: [ObjectId("63d115583e1966413bc6e95a"), ObjectId("63d115583e1966413bc6e961")], employee: ObjectId("63d1162e3e1966413bc6e974"), store: ObjectId("63d114d03e1966413bc6e956")},
{order_datetime: new Date("2022-01-06"), order_type: "pickup", total_price: NumberDecimal("12.55"), client: ObjectId("63d1135b3e1966413bc6e952"), products: [ObjectId("63d115583e1966413bc6e95b"), ObjectId("63d115583e1966413bc6e967")], store: ObjectId("63d114d03e1966413bc6e958")},
{order_datetime: new Date("2022-02-23"), order_type: "delivery", total_price: NumberDecimal("17.30"), delivery_datetime: new Date("2022-02-23 22:12:00"), client: ObjectId("63d1135b3e1966413bc6e94f"), products: [ObjectId("63d115583e1966413bc6e965")], employee: ObjectId("63d1162e3e1966413bc6e96f"), store: ObjectId("63d114d03e1966413bc6e959")},
{order_datetime: new Date("2022-03-12"), order_type: "delivery", total_price: NumberDecimal("12.50"), delivery_datetime: new Date("2022-03-12 20:52:00"), client: ObjectId("63d1135b3e1966413bc6e950"), products: [ObjectId("63d115583e1966413bc6e969")], employee: ObjectId("63d1162e3e1966413bc6e973"), store: ObjectId("63d114d03e1966413bc6e957")},
{order_datetime: new Date("2022-03-03"), order_type: "pickup", total_price: NumberDecimal("14.80"), client: ObjectId("63d1135b3e1966413bc6e94c"), products: [ObjectId("63d115583e1966413bc6e96b")], store: ObjectId("63d114d03e1966413bc6e957")},
{order_datetime: new Date("2022-04-14"), order_type: "pickup", total_price: NumberDecimal("14.25"), client: ObjectId("63d1135b3e1966413bc6e951"), products: [ObjectId("63d115583e1966413bc6e95d"), ObjectId("63d115583e1966413bc6e966")], store: ObjectId("63d114d03e1966413bc6e957")},
{order_datetime: new Date("2022-05-11"), order_type: "delivery", total_price: NumberDecimal("11.50"), delivery_datetime: new Date("2022-05-11 14:12:00"), client: ObjectId("63d1135b3e1966413bc6e952"), products: [ObjectId("63d115583e1966413bc6e961")], employee: ObjectId("63d1162e3e1966413bc6e974"), store: ObjectId("63d114d03e1966413bc6e956")},
{order_datetime: new Date("2022-05-28"), order_type: "delivery", total_price: NumberDecimal("12.75"), delivery_datetime: new Date("2022-05-28 12:49:00"), client: ObjectId("63d1135b3e1966413bc6e94d"), products: [ObjectId("63d115583e1966413bc6e962")], employee: ObjectId("63d1162e3e1966413bc6e974"), store: ObjectId("63d114d03e1966413bc6e956")},
{order_datetime: new Date("2022-06-17"), order_type: "delivery", total_price: NumberDecimal("15.25"), delivery_datetime: new Date("2022-06-17 21:11:00"), client: ObjectId("63d1135b3e1966413bc6e94d"), products: [ObjectId("63d115583e1966413bc6e95e"), ObjectId("63d115583e1966413bc6e968")], employee: ObjectId("63d1162e3e1966413bc6e96f"), store: ObjectId("63d114d03e1966413bc6e959")},
{order_datetime: new Date("2022-07-23"), order_type: "pickup", total_price: NumberDecimal("13.25"), client: ObjectId("63d1135b3e1966413bc6e953"), products: [ObjectId("63d115583e1966413bc6e96d")], store: ObjectId("63d114d03e1966413bc6e957")},
{order_datetime: new Date("2022-09-15"), order_type: "delivery", total_price: NumberDecimal("16.80"), delivery_datetime: new Date("2022-09-15 22:52:00"), client: ObjectId("63d1135b3e1966413bc6e955"), products: [ObjectId("63d115583e1966413bc6e95b"), ObjectId("63d115583e1966413bc6e96b")], employee: ObjectId("63d1162e3e1966413bc6e96f"), store: ObjectId("63d114d03e1966413bc6e959")},
{order_datetime: new Date("2022-09-20"), order_type: "pickup", total_price: NumberDecimal("8.10"), client: ObjectId("63d1135b3e1966413bc6e954"), products: [ObjectId("63d115583e1966413bc6e960")], store: ObjectId("63d114d03e1966413bc6e956")},
{order_datetime: new Date("2022-10-29"), order_type: "delivery", total_price: NumberDecimal("11.45"), delivery_datetime: new Date("2022-10-29 23:01:00"), client: ObjectId("63d1135b3e1966413bc6e94d"), products: [ObjectId("63d115583e1966413bc6e964")], employee: ObjectId("63d1162e3e1966413bc6e974"), store: ObjectId("63d114d03e1966413bc6e956")},
{order_datetime: new Date("2022-11-15"), order_type: "delivery", total_price: NumberDecimal("16.70"), delivery_datetime: new Date("2022-11-15 13:30:00"), client: ObjectId("63d1135b3e1966413bc6e94c"), products: [ObjectId("63d115583e1966413bc6e95c"), ObjectId("63d115583e1966413bc6e96a")], employee: ObjectId("63d1162e3e1966413bc6e970"), store: ObjectId("63d114d03e1966413bc6e958")},
{order_datetime: new Date("2022-12-06"), order_type: "pickup", total_price: NumberDecimal("17.30"), client: ObjectId("63d1135b3e1966413bc6e94e"), products: [ObjectId("63d115583e1966413bc6e965")], store: ObjectId("63d114d03e1966413bc6e958")}
]);

db.employees.insertMany([
{first_name: "Victoria", surname: "Casademunt Puigmajor", NIF: "34122415T", phone: "684938483", job_position: "cook", store: ObjectId("63d114d03e1966413bc6e956")},
{first_name: "Jorge", surname: "Palacios Vilanova", NIF: "53423131H", phone: "739584938", job_position: "delivery", store: ObjectId("63d114d03e1966413bc6e959")},
{first_name: "Carolina", surname: "Ferre Portes", NIF: "44323131G", phone: "649393053", job_position: "delivery", store: ObjectId("63d114d03e1966413bc6e958")},
{first_name: "Nerea", surname: "Valencia Gomez", NIF: "14342126J", phone: "602935829", job_position: "cook", store: ObjectId("63d114d03e1966413bc6e957")},
{first_name: "Marc", surname: "Lopez Lopez", NIF: "76588323K", phone: "602194900", job_position: "cook", store: ObjectId("63d114d03e1966413bc6e958")},
{first_name: "Lua", surname: "Gostez Martines", NIF: "23416436A", phone: "712932495", job_position: "delivery", store: ObjectId("63d114d03e1966413bc6e957")},
{first_name: "Eudald", surname: "Perez Gonzalez", NIF: "43624314W", phone: "619258324", job_position: "delivery", store: ObjectId("63d114d03e1966413bc6e956")},
{first_name: "Maria Lluisa", surname: "Godo Santana", NIF: "32413643N", phone: "638041322", job_position: "cook", store: ObjectId("63d114d03e1966413bc6e959")}
]);

db.stores.insertMany([
{address: {street: "via augusta", street_number: "323", postcode: "08023", location: {locality: "Badalona", province: "Barcelona"}}},
{address: {street: "santalo", street_number: "31", postcode: "08019", location: {locality: "Barcelona", province: "Barcelona"}}},
{address: {street: "carrer de sants", street_number: "208", postcode: "08803", location: {locality: "Hospitalet de Llobregat", province: "Barcelona"}}},
{address: {street: "aribau", street_number: "59", postcode: "08071", location: {locality: "Barcelona", province: "Barcelona"}}}
]);