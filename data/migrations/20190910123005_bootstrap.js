//makes changes
exports.up = function(knex) {
  return knex.schema.createTable("fruits", tbl => {
    tbl.increments(); //id auto

    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    //tbl.text() //string()

    tbl.decimal("avgWeightOz");

    tbl.boolean("delicious");
  });
};
//revert the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};
