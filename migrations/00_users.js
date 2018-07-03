
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments().primary()
      table.text('userName')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
