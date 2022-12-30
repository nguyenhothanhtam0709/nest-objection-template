import { IPost, PostModel } from '@models/post.model';
import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';

@Injectable()
export class PostRepository extends BaseRepository<IPost, PostModel> {
  constructor(
    @Inject(PostModel)
    protected model: typeof PostModel,
  ) {
    super(model);
  }
}
