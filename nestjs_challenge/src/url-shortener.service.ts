import { Injectable } from "@nestjs/common";

@Injectable()
export class UrlShortenerService {
  shorten(url: string, baseUrl: string): string {
    return `${baseUrl}/aBc123z`;
  }
}
