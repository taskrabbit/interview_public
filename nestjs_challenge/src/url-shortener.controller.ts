import { Body, Controller, Get, Header, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { UrlShortenerService } from "./url-shortener.service";

const HOME_PAGE = `<!DOCTYPE html>
<html>
<head>
  <title>NestJS Challenge</title>
</head>
<body>
  <form action="/url_shortener/convert" method="post">
    <label for="url">Enter a url:</label>
    <input type="text" name="url" id="url">
    <input type="submit" value="Convert">
  </form>
</body>
</html>`;

@Controller()
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Get()
  @Header("Content-Type", "text/html")
  home(): string {
    return HOME_PAGE;
  }

  @Post("url_shortener/convert")
  @Header("Content-Type", "text/plain")
  convert(@Body("url") url: string, @Req() req: Request): string {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const shortUrl = this.urlShortenerService.shorten(url, baseUrl);
    return `${url} has been converted to ${shortUrl}`;
  }
}
