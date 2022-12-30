import { Model } from 'objection';

export class Post extends Model {
  static get tableName() {
    return 'posts';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: {
          type: 'integer',
        },
        title: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          null: false,
        },
        content: {
          type: 'string',
          null: false,
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    };
  }
}
