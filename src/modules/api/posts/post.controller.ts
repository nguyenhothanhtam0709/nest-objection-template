import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create() {
    return await this.postService.create();
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.get(id);
  }
}
