import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/model/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  articles!: Article[];

  constructor() { }

  saveNewArticle(article: Article): Observable<Article>{
    this.articles?.push(article);
    return of(article);
  }

  get getArticles(): Article[]{
    return this.articles;
  }
}
