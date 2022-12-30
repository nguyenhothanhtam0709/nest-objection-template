import { Model } from 'objection';

export class BaseModel extends Model {
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
