exports.up = function (knex, Promise) {
    return knex.schema.createTable('bills', (table) => {
        table.increments().primary()
        table.integer('userId').references('users.id').unsigned().onDelete('CASCADE')
        table.text('name')
        table.float('amount')
        table.date('dueDate')
        table.text('status')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('bills')
};