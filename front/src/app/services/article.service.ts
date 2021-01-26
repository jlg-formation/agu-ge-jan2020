import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = ['tournevis', 'pince'];
  constructor() {
    console.log('article service');
  }
}
