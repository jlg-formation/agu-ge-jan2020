import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();
  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 2.99, qty: 123 },
        { name: 'Pince', price: 2, qty: 34 },
        { name: 'Marteau', price: 2.5, qty: 2 },
        { name: 'Scie', price: 10, qty: 1000 },
        { name: 'Clé', price: 13.45, qty: 340 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }
}
