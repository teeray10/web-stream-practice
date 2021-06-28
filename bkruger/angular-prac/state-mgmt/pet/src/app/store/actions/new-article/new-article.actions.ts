import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/model/article/article';

export const newArticle = createAction(
  '[New Article] New Article',
  props<{ article: Article }>()
);

export const newArticleSuccess = createAction(
  '[New Article] New Article Success'
);




