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

  updateById(id: number, data: Partial<TM>): Promise<number> {
    return this.model.query().findById(id).patch(data).execute();
  }

  deleteById(id: number): Promise<number> {
    return this.model.query().deleteById(id).execute();
  }
}
