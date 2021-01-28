import { TestBed } from '@angular/core/testing';
import { a1 } from '../test/data';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getArticle (with localstorage)', () => {
    localStorage.setItem('articles', '[]');
    service.getArticles();
    expect(service).toBeTruthy();
  });

  it('should test getArticle (without localstorage)', () => {
    localStorage.clear();
    service.getArticles();
    expect(service).toBeTruthy();
  });
  it('should test add', () => {
    service.add(a1);
    expect(service).toBeTruthy();
  });
});
