import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UrlShortenerController } from "./url-shortener.controller";
import { UrlShortenerService } from "./url-shortener.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "better-sqlite3",
      database:
        process.env.NODE_ENV === "test" ? ":memory:" : "development.sqlite3",
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 0,
    }),
  ],
  controllers: [UrlShortenerController],
  providers: [
    UrlShortenerService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true, transform: true }),
    },
  ],
})
export class AppModule {}
