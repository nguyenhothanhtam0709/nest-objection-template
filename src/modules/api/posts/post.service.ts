import { Injectable } from '@nestjs/common';
import { PostRepository } from '@sharedModules/db/repositories/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async create() {
    return await this.postRepository.insert({
      title: 'title',
      content: 'content',
    });
  }

  async get(id: number) {
    return await this.postRepository.findById(id);
  }
}
