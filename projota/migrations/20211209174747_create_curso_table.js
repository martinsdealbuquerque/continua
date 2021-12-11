
exports.up = function(knex) {
  return knex.schema.dropTable("curso", (table) => {
    table.increments().primary();
    table.string("nome");
    table.integer("cargahoraria");
    table.timestamps(true, true);
 
});
};
exports.down = function(knex){
  return knex.schema.dropTable("curso");
};