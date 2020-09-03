
exports.up = function(knex) {
  return knex.schema
    .createTable('comments', table => {
      table.increments()
      table.string('comment', 512)

      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('photo_comments', table => {
      table.increments()
      table.string('photo_comments', 512)
      .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('photo_comments')
    .dropTableIfExist('comments');
};

/* ### Table: comments

**comment_id**: (Integer), Primary ID that preferably auto increments (if supported in chosen DB)

**comment**: (Text), a simple text field containing the comment
*/