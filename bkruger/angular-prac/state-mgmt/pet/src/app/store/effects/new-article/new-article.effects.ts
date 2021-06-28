import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';

import * as NewArticleActions from '../../actions/new-article/new-article.actions';
import { ArticleServiceService } from 'src/app/services/blog/article/article-service.service';

@Injectable()
export class NewArticleEffects {

  // saveArticle = createEffect(() => 
  //   this.actions$.pipe(
  //     ofType(NewArticleActions.newArticle),
  //     mergeMap((action) => {
  //       this.articleService.saveNewArticle(action.article).pipe(
  //         map( () => {
  //           return NewArticleActions.newArticleSuccess()
  //         }),
  //       )
  //     })
  //   )
  // )

  constructor(
    private actions$: Actions,
    private articleService: ArticleServiceService) {}

}
