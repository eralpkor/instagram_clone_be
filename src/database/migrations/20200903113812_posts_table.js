
exports.up = function(knex) {
  return knex.schema
    .createTable('photos', table => {
      // id
      table.increments();
      table.integer('media_type')
      table.string('description', 128);
      table.timestamp('date_created').defaultTo(knex.fn.now());
      table.string('image_path', 500);
      table.integer('views_count') // check if necessary 
      table.string('tags', 50)
        .notNullable();
      
      table.integer('user_id')
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
    .dropTableIfExist('photos')
};

/* ### Table: photos

**photo_id**: (Integer), Primary ID that preferably auto increments (if supported in chosen DB)

**user_id**: (Integer), ID of the user who owns this photo (Indexed field)

**caption**: (String), Photo caption

**latitude**: (Float), Latitude value for location

**longitude**: (Float), Longitude value location

**image_path**: (String), Path to image on server

**image_size**: (Integer), Image size on server

**date_created**: (Unix Timestamp or DateTime), When was this image created?

**date_updated**: (Unix Timestamp or DateTime), Last time this image was updated? */