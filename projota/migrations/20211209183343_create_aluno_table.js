
exports.up = function(knex) {
    return knex.schema.createTable("aluno", (table) => {
      table.increments().primary();
      table.string("nome");
      table.string("email");
      table.integer("telefone");
      table.integer("nascimento");
      table.integer("curso_id").references("curso.id");
      table.timestamps(true, true);
        })
      };
      
      exports.down = function(knex) {
        return knex.schema.dropTable("aluno");
      };
      
