import { Component, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article/article';
import { newArticle } from 'src/app/store/actions/new-article/new-article.actions';
import { NewArticleState } from 'src/app/store/reducers/new-article/new-article.reducer';
import { getNewArticle } from 'src/app/store/selectors/new-article/new-article.selectors';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  title?: string;
  content?: string;
  author?: string;
  form?: any;

  article$?: Observable<Article>;

  constructor(
    private store: Store<NewArticleState>
  ) { }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(getNewArticle));
  }
  
  do(): void {
    let article = { id: 0, title: '21hu312312635sgc1c123', date: new Date, author: '', 
      tldr: [], content: [], level: '', likes: 0, dislikes: 0, visits: 0 };
    console.log("article dispatched");
    console.log(article);
    this.store.dispatch(newArticle({ article }));
  }

  onSubmit(form: any): void{
    this.form = form;
  }
}
