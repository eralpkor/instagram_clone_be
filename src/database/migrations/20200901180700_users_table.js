
exports.up = function(knex) {
  return knex.schema
    .createTable('user', table => {
      table.increments();
      table.string('username', 128)
        .unique()
        .notNullable();
      table.string('password', 128)
        .notNullable();
      table.string('email', 128)
        .unique()
      table.string('name', 55)
      table.string('lastName', 55)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('users');
};
