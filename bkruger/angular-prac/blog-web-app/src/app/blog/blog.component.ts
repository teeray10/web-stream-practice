import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  article!: Article;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    this.articleService.getArticle().subscribe(
      article => this.article = article
    );
  }

}
