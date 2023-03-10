
db.createCollection('sales', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'sales',
        required: ['sale_date', 'total_price', 'payment_method', 'employee_name', 'glasses', 'client'],
        properties: {
          sale_date: {
            bsonType: 'date'
          },
          total_price: {
            bsonType: 'decimal'
          },
          payment_method: {
            bsonType: 'string'
          },
          employee_name: {
            bsonType: 'string'
          },
          glasses: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          },
          client: {
            bsonType: 'object',
            title: 'object',
            required: ['id_client', 'first_name', 'surname', 'postcode', 'phone', 'register_date'],
            properties: {
              id_client: {
                bsonType: 'string'
              },
              first_name: {
                bsonType: 'string'
              },
              surname: {
                bsonType: 'string'
              },
              postcode: {
                bsonType: 'string'
              },
              phone: {
                bsonType: 'string'
              },
              register_date: {
                bsonType: 'date'
              },
              referral_client: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('glasses', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'glasses',
        required: ['lens_graduation', 'frame_type', 'frame_color', 'lens_color', 'unit_price'],
        properties: {
          lens_graduation: {
            bsonType: 'string'
          },
          frame_type: {
            bsonType: 'string'
          },
          frame_color: {
            bsonType: 'string'
          },
          lens_color: {
            bsonType: 'string'
          },
          unit_price: {
            bsonType: 'decimal'
          },
          supplier: {
            bsonType: 'object',
            title: 'object',
            required: ['id_supplier', 'name', 'phone', 'NIF', 'address'],
            properties: {
              id_supplier: {
                bsonType: 'string'
              },
              name: {
                bsonType: 'string'
              },
              phone: {
                bsonType: 'string'
              },
              fax: {
                bsonType: 'string'
              },
              NIF: {
                bsonType: 'string'
              },
              address: {
                bsonType: 'object',
                title: 'object',
                required: ['street', 'street_number', 'postcode', 'country'],
                properties: {
                  street: {
                    bsonType: 'string'
                  },
                  street_number: {
                    bsonType: 'string'
                  },
                  floor_door: {
                    bsonType: 'array'
                  },
                  postcode: {
                    bsonType: 'string'
                  },
                  country: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  });


db.sales.insertMany([
{sale_date: new Date ("2022-01-22 00:00:00"), total_price: NumberDecimal("43.52"), payment_method : "creditCard", employee_name: "Cristina Casals", glasses: [ObjectId("63d8dd804982684e1f839b50")], client: {id_client: "6", first_name: "Marina", surname: "Schneider Sanchez", postcode: "93837", phone: "748383744", register_date: new Date("2021-04-15"), id_referral: "Mariona Cabanes Bosacoma"}},
{sale_date: new Date ("2022-03-10 00:00:00"), total_price: NumberDecimal("53.23"), payment_method : "creditCard", employee_name: "Cristina Casals", glasses: [ObjectId("63d8dd804982684e1f839b4d"), ObjectId("63d8dd804982684e1f839b4f")], client: {id_client: "3", first_name: "Berta", surname: "Valles Pauls", postcode: "08017", phone: "634928483", register_date: new Date("2020-05-01"), id_referral: "Carla Blasco Vidal"}},
{sale_date: new Date ("2022-03-25 00:00:00"), total_price: NumberDecimal("64.23"), payment_method : "payPal", employee_name: "Juanca Casademunt", glasses: [ObjectId("63d8dd804982684e1f839b50")], client: {id_client: "8", first_name: "Celia", surname: "Anguera Pujadas", postcode: "08392", phone: "683737373", register_date: new Date("2022-02-14"), id_referral: "Adria Huguet Ferran"}},
{sale_date: new Date ("2022-04-07 00:00:00"), total_price: NumberDecimal("75.34"), payment_method : "creditCard", employee_name: "Corina Lopez", glasses: [ObjectId("63d8dd804982684e1f839b51")], client: {id_client: "5", first_name: "Adria", surname: "Huguet Ferran", postcode: "08011", phone: "658373743", register_date: new Date("2021-03-30")}},
{sale_date: new Date ("2022-09-06 00:00:00"), total_price: NumberDecimal("43.64"), payment_method : "cash", employee_name: "Juanca Casademunt", glasses: [ObjectId("63d8dd804982684e1f839b4f")], client: {id_client: "1", first_name: "Mariona", surname: "Cabanes Bosacoma", postcode: "08022", phone: "605573838", register_date: new Date("2019-01-03"), id_referral: "Carla Blasco Vidal"}},
{sale_date: new Date ("2022-09-13 00:00:00"), total_price: NumberDecimal("63.89"), payment_method : "creditCard", employee_name: "Anna Riudebitlles", glasses: [ObjectId("63d8dd804982684e1f839b51"), ObjectId("63d8dd804982684e1f839b4c")], client: {id_client: "7", first_name: "Mateu", surname: "Diaz Brana", postcode: "08293", phone: "648372626", register_date: new Date("2021-12-06"), id_referral: "Adria Huguet Ferran"}},
{sale_date: new Date ("2022-09-17 00:00:00"), total_price: NumberDecimal("98.99"), payment_method : "cash", employee_name: "Cristina Casals", glasses: [ObjectId("63d8dd804982684e1f839b4d")], client: {id_client: "10", first_name: "Aldo", surname: "Anadon Marse", postcode: "93832", phone: "324253414", register_date: new Date("2023-01-18")}},
{sale_date: new Date ("2022-10-05 00:00:00"), total_price: NumberDecimal("123.12"), payment_method : "creditCard", employee_name: "Juanca Casademunt", glasses: [ObjectId("63d8dd804982684e1f839b53")], client: {id_client: "5", first_name: "Adria", surname: "Huguet Ferran", postcode: "08011", phone: "658373743", register_date: new Date("2021-03-30")}},
{sale_date: new Date ("2022-10-10 00:00:00"), total_price: NumberDecimal("54.00"), payment_method : "creditCard", employee_name: "Juanca Casademunt", glasses: [ObjectId("63d8dd804982684e1f839b51")], client: {id_client: "4", first_name: "Carla", surname: "Blasco Vidal", postcode: "08011", phone: "638393828", register_date: new Date("2020-07-23")}},
{sale_date: new Date ("2022-11-15 00:00:00"), total_price: NumberDecimal("421.40"), payment_method : "payPal", employee_name: "Jesulin Magranes", glasses: [ObjectId("63d8dd804982684e1f839b4e")], client: {id_client: "2", first_name: "Aiora", surname: "de Vilalta Zamudio", postcode: "05943", phone: "645352566", register_date: new Date("2019-03-04"), id_referral: "Carla Blasco Vidal"}}
]);

db.glasses.insertMany([
{lens_graduation: "2.50", frame_type: "paste", frame_color: "red", lens_color: "light", unit_price: NumberDecimal("36.55"), supplier: {id_supplier: "1", name: "Manolo Manolito SL", phone: "346826341", fax: "89237538283942", NIF: "G467245371", address: {street: "Carrer Casanova", street_number: "456", floor_door: ["4","1"], postcode: "08023", country: "SPAIN"}}},
{lens_graduation: "2.00", frame_type: "floating", frame_color: "green", lens_color: "dark", unit_price: NumberDecimal("47.70"), supplier: {id_supplier: "3", name: "Mirades SCP", phone: "245814144", fax: "92138914332343", NIF: "U738929910", address: {street: "Avinguda Tibidabo", street_number: "54", floor_door: [], postcode: "08082", country: "SPAIN"}}},
{lens_graduation: "2.00", frame_type: "paste", frame_color: "dark blue", lens_color: "light", unit_price: NumberDecimal("61.40"), supplier: {id_supplier: "5", name: "HolaEmVeus SL", phone: "856283827", NIF: "J294839483", address: {street: "Carrer Tapies", street_number: "10", floor_door: ["2","2"], postcode: "08352", country: "SPAIN"}}},
{lens_graduation: "1.50", frame_type: "metallic", frame_color: "blue", lens_color: "pink light", unit_price: NumberDecimal("59.95"), supplier: {id_supplier: "3", name: "Mirades SCP", phone: "245814144", fax: "92138914332343", NIF: "U738929910", address: {street: "Avinguda Tibidabo", street_number: "54", floor_door: [], postcode: "08082", country: "SPAIN"}}},
{lens_graduation: "1.50", frame_type: "metallic", frame_color: "orange", lens_color: "dark", unit_price: NumberDecimal("73.00"), supplier: {id_supplier: "4", name: "PastaParaGafas SL", phone: "837474718", NIF: "U869483939", address: {street: "Passeig de Gracia", street_number: "35", floor_door: ["2"], postcode: "08807", country: "SPAIN"}}},
{lens_graduation: "1.00", frame_type: "paste", frame_color: "yellow", lens_color: "blue light", unit_price: NumberDecimal("45.35"), supplier: {id_supplier: "1", name: "Manolo Manolito SL", phone: "346826341", fax: "89237538283942", NIF: "G467245371", address: {street: "Carrer Casanova", street_number: "456", floor_door: ["4","1"], postcode: "08023", country: "SPAIN"}}},
{lens_graduation: "1.00", frame_type: "floating", frame_color: "pink", lens_color: "dark", unit_price: NumberDecimal("94.30"), supplier: {id_supplier: "2", name: "MariaLluisa G.G.", phone: "438355568", NIF: "W583279473", address: {street: "Rambla Raval", street_number: "23", floor_door: ["5","2"], postcode: "08044", country: "SPAIN"}}},
{lens_graduation: "-1.00", frame_type: "paste", frame_color: "dark pink", lens_color: "dark", unit_price: NumberDecimal("75.05"), supplier: {id_supplier: "3", name: "Mirades SCP", phone: "245814144", fax: "92138914332343", NIF: "U738929910", address: {street: "Avinguda Tibidabo", street_number: "54", floor_door: [], postcode: "08082", country: "SPAIN"}}},
{lens_graduation: "-1.50", frame_type: "floating", frame_color: "red", lens_color: "light", unit_price: NumberDecimal("60.95"), supplier: {id_supplier: "3", name: "Mirades SCP", phone: "245814144", fax: "92138914332343", NIF: "U738929910", address: {street: "Avinguda Tibidabo", street_number: "54", floor_door: [], postcode: "08082", country: "SPAIN"}}},
{lens_graduation: "-2.00", frame_type: "metallic", frame_color: "light blue", lens_color: "light blue", unit_price: NumberDecimal("82.20"), supplier: {id_supplier: "5", name: "HolaEmVeus SL", phone: "856283827", NIF: "J294839483", address: {street: "Carrer Tapies", street_number: "10", floor_door: ["2","2"], postcode: "08352", country: "SPAIN"}}}
]);