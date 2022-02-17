import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Get()
  getAll() {
    return 'All recipes';
  }
}
