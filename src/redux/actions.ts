import { Article } from '../screens/Home';

export enum ArticlesActionTypes {
  SAVE_ARTICLE = 'SAVE_ARTICLE',
}

export interface SaveArticle {
  type: typeof ArticlesActionTypes.SAVE_ARTICLE;
  article: Article;
  id: number;
}

export const saveArticle = (id: number, article: Article): SaveArticle => ({
  type: ArticlesActionTypes.SAVE_ARTICLE,
  article,
  id,
});

export type ArticlesActions = SaveArticle;
