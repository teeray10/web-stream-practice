import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  editArticle?: Article;
  articles!: Article[];
  currentSize: number = 16;

  constructor(
    private articleService: ArticleServiceService
  ) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  receiveNewArticle(article: Article){
    this.articles.push(article);
  }

  setArticleToEdit(article: Article){
    this.editArticle = article;
  }

}
