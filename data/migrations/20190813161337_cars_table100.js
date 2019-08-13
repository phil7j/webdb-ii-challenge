
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Cars', tbl => {
        tbl.increments();
        tbl
            .string('VIN', 128)
            .unique()
            .notNullable();
        tbl
            .string('Make', 128)
            .notNullable();
        tbl
            .string('Model', 128)
            .notNullable();
        tbl
            .string('Mileage', 128)
            .notNullable();
        tbl
            .string('Transmission_Type', 128)
            // .Nullable
        tbl
            .string('Title_Status', 128)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Cars');
};