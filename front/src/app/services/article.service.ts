import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.99, qty: 123 },
    { name: 'Pince', price: 2, qty: 34 },
    { name: 'Marteau', price: 2.5, qty: 2 },
    { name: 'Scie', price: 10, qty: 1000 },
    { name: 'Clé', price: 13.45, qty: 340 },
  ];
  constructor() {
    console.log('article service');
  }
}
