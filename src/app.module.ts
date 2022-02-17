import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';

@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [],
})
export class AppModule {}
