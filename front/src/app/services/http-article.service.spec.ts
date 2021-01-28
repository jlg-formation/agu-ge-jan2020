import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { a1, dummyArticles } from '../test/data';

import { HttpArticleService, url } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyArticles);
    expect(service).toBeTruthy();
  });
  it('should test refresh error', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
    expect(service).toBeTruthy();
  });
  it('should test add error', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyArticles);
    service.add(a1);
    const req2 = http.expectOne(url);
    expect(req2.request.method).toBe('POST');
    req2.flush('', { status: 405, statusText: 'Method Not Allowed' });
    expect(service).toBeTruthy();
  });
  it('should test add ok', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyArticles);
    service.add(a1);
    const req2 = http.expectOne(url);
    expect(req2.request.method).toBe('POST');
    req2.flush('', { status: 201, statusText: 'Created' });
    expect(service).toBeTruthy();
    const req3 = http.expectOne(url);
    expect(req3.request.method).toBe('GET');
    req3.flush(dummyArticles);
  });
});
