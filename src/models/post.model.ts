import { BaseModel } from './base.model';

export interface IPost {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
}

export class PostModel extends BaseModel implements IPost {
  public id: number;
  public title: string;
  public content?: string;
  public createdAt: string;
  public updatedAt: string;

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
        },
        content: {
          type: 'string',
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
