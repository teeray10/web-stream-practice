import { Injectable } from '@angular/core';
import { Article } from './article';

const articles: Article[] = [
  { title: 'Title 1', content: 'Content 1' },
  { title: 'Title 2', content: 'Content 2' },
]

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

  getArticles(): Article[]{
    return articles;
  }
}
