import { Component, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article/article';
import { newArticle } from 'src/app/store/actions/new-article/new-article.actions';
import { NewArticleState } from 'src/app/store/reducers/new-article/new-article.reducer';
import { getNewArticle } from 'src/app/store/selectors/new-article/new-article.selectors';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  // article: Article = { id: 0, title:'', date: new Date, 
  //           author: '', tldr: [''], content: [''], 
  //           level:'', likes:0, dislikes:0, visits:0 };
  article!: Article;
  //  = new Article(0, '', new Date, '', [''], [''], '', 0, 0, 0);
  article$?: Observable<Article>;

  constructor(
    private store: Store<NewArticleState>
  ) { }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(getNewArticle));
  }
  
  do(form: any): void {
    console.log("article dispatched");
    // console.log("form: " + JSON.stringify(form.value));
    this.store.dispatch(newArticle({ article: this.article }));
  }
}
