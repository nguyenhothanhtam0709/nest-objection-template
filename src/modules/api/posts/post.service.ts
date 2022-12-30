import { PostModel } from '@models/post.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(
    @Inject(PostModel)
    private readonly postModel: typeof PostModel,
  ) {}

  async create() {
    return await this.postModel.query().insert({
      title: 'title',
      content: 'content',
    });
  }

  async get(id: number) {
    return await this.postModel.query().findById(id);
  }
}
