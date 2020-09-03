
exports.up = function(knex) {
return knex.schema
  // user relations table
  .createTable('user_relations', table => {
    table.increments()
    table.integer('follower_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('following_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.foreign('user_id').references('users.follower_id', 'users.following_id')
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('user_relations');
};
