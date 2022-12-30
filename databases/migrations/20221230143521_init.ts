import { Knex } from 'knex';

const tableName = 'posts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('title', 255).notNullable();
    table.text('content').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
