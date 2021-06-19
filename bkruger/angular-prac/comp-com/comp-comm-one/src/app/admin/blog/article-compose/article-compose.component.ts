import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-article-compose',
  templateUrl: './article-compose.component.html',
  styleUrls: ['./article-compose.component.css']
})
export class ArticleComposeComponent implements OnInit {

  // @ViewChild('title', { static: true }) title?: ElementRef;
  // @ViewChild('content', { static: true }) content?: ElementRef;
  @Output() articleEvent = new EventEmitter<Article>();

  constructor(
    private articleService: ArticleServiceService
  ) { }

  ngOnInit(): void {
  }

  // newArticle(){
  //   this.articleEvent.emit({ title: this.title?.nativeElement.value, 
  //     content: this.content?.nativeElement.value });
  // }
  
  newArticle(newTitle: string, newContent: string){
    const articleId = this.articleService.getArticles().length + 1;
    this.articleEvent.emit({ id: articleId, title: newTitle, content: newContent })
  }
  
}
