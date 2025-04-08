import { Controller, Get, Post, Body, Param, Delete, Options } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.delete(id);
  }

  @Options()
  handleOptions() {
    return {
      statusCode: 204,
    };
  }
}
