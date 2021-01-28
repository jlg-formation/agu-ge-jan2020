import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from './article.service';

export const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article service');
    this.refresh();
  }

  refresh(): void {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
        this.save();
      },
      error: (error) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  add(article: Article): void {
    super.add(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        this.refresh();
      },
      error: (error) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  remove(articleToBeRemoved: Article[]): void {
    super.remove(articleToBeRemoved);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: articleToBeRemoved.map((a) => a.id),
    };
    this.http.delete<void>(url, options).subscribe({
      next: () => {
        this.refresh();
      },
      error: (error) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
