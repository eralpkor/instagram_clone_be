
exports.up = function(knex) {
  return knex.schema
    .createTable('likes', table => {
      table.increments();
      table.integer('photo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('posts');
      table.timestamps('created_at', [useTimestamps], [defaultToNow])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('likes')
};

/* **user_id**: (Integer), ID of the user performing the like (Indexed field)

**photo_id**: (Integer), ID of the photo being liked (Indexed field)

**date_created**: (Unix Timestamp or DateTime), When was this image created?

**date_updated**: (Unix Timestamp or DateTime), Last time this image was updated? 
*/