import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNewArticle from '../../reducers/new-article/new-article.reducer';

export const getNewArticleState = createFeatureSelector<fromNewArticle.NewArticleState>(
  fromNewArticle.newArticleFeatureKey
);

export const getNewArticle = createSelector(
  getNewArticleState,
  state => state
);
