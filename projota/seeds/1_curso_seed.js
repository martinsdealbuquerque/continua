
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('curso').del()
    .then(function () {
      // Inserts seed entries
      return knex('curso').insert([
        {nome:"Licenciatura em Computação"},
        {cargahoraria:"2200"},

      ]);
    });
};
