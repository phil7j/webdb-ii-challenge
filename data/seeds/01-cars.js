
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "155FSFE515EF",
          "Make": "Pontiac",
          "Model": "Fiero",
          "Mileage": "220k Miles",
          "Transmission_Type": "Manual",
          "Title_Status": "Clean"
        },
        {
          "VIN": "123dfsef2113EF",
          "Make": "Volvo",
          "Model": "S70",
          "Mileage": "140k Miles",
          "Transmission_Type": "Automatic",
          "Title_Status": "Questionable"
        },
        {
          "VIN": "155312FSFE515EF",
          "Make": "Volvo",
          "Model": "850",
          "Mileage": "150k Miles",
          "Transmission_Type": "Manual",
          "Title_Status": "Clean"
        },
        {
          "VIN": "155F123123SFE515EF",
          "Make": "Subaru",
          "Model": "Forester",
          "Mileage": "130k Miles",
          "Transmission_Type": "Manual",
          "Title_Status": "Clean"
        }
      ]);
    });
};
