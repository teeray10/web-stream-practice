import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './blog-data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  article: Article = ARTICLES[0];

  constructor() { }

  getArticle(): Observable<Article>{
    return of(this.article);
  }
}
