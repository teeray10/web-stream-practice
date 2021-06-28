import { createReducer, on } from '@ngrx/store';
import * as NewArticleActions from '../../actions/new-article/new-article.actions';

export const newArticleFeatureKey = 'newArticle';

export interface NewArticleState {
  id: number,
  title: string,
  date: Date,
  author: string,
  tldr: string[],
  content: string[],
  level: string,
  likes: number,
  dislikes: number,
  visits: number,
}

export const initialState: NewArticleState = {
  id: 0,
  title: '',
  date: new Date(),
  author: '',
  tldr: [],
  content: [],
  level: '',
  likes: 0,
  dislikes: 0,
  visits: 0,
};

export const newArticleReducer = createReducer(
  initialState,
  on(NewArticleActions.newArticle, 
    (article) => {
      return { ...article, title: article.title, content: article.content }
    }),
  on(NewArticleActions.newArticleSuccess, (state) => ({ ...state }))
);

