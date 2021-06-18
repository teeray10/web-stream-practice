import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // title!: string;
  // title!: string = "John";
  // content!: string;
  articles!: Article[];

  constructor(
    private articleService: ArticleServiceService
  ) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  // receiveNewArticleTitle(title: string){
  //   this.title = title;
  // }

  // receiveNewArticleContent(content: string){
  //   this.content = content;
  //   this.articles.push({ title: this.title, content: this.content });
  // }

}
