
exports.up = function(knex) {
    return knex.schema.createTable('travels', function(table){
        table.string('localization').notNullable();
        table.string('user_name').notNullable();
        table.string('destination').notNullable();
        table.string('status').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('travels');
};
