import { Post } from '@models/post.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(
    @Inject(Post)
    private readonly postModel: typeof Post,
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
