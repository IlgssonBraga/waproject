import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Orders', table => {
    table.increments('id').primary();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('User')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('amount').notNullable();
    table.decimal('price', 8, 2).notNullable();
    table.string('description').notNullable();

    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Orders');
}
