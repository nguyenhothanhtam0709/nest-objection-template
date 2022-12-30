import { BaseModel } from '@models/base.model';

export class BaseRepository<TM, M extends BaseModel> {
  protected model: typeof BaseModel;

  constructor(model: typeof BaseModel) {
    this.model = model;
  }

  insert(data: Partial<TM>) {
    return this.model.query().insert(data);
  }

  findById(id: number): Promise<M> {
    // @ts-ignore
    return this.model.query().findById(id).execute();
  }
}
