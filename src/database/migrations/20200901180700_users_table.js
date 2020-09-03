
exports.up = function(knex) {
  return knex.schema
    .createTable('user', table => {
      // user id
      table.increments();
      // nickname
      table.string('username', 50)
        .unique()
        .notNullable();
      table.string('password', 128)
        .notNullable();
      table.string('email', 128)
        .unique()
      // 
      table.integer('num_of_followers').defaultTo(0);
      table.integer('num_of_following').defaultTo(0);
      table.integer('num_of_posts').defaultTo(0);
      table.string('profile', 1024);
      table.timestamp('member_since').defaultTo(knex.fn.now());

      table.string('name', 55);
      table.string('first_name', 55);
      table.string('last_name', 55);
      table.string('phone', 20);
      table.string('city', 20);
      table.string('state', 3);
      table.string('country', 20);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('users');
};
