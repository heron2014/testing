import { Article } from '../screens/Home';
import { ArticlesActions, ArticlesActionTypes } from './actions';

export interface ArticlesState {
  isLoading: boolean;
  error: string | null;
  articles: { [id: number]: Article };
}

const initialState: ArticlesState = {
  isLoading: false,
  error: null,
  articles: {},
};

export default function articles(
  state: ArticlesState = initialState,
  action: ArticlesActions,
): ArticlesState {
  switch (action.type) {
    case ArticlesActionTypes.SAVE_ARTICLE: {
      return {
        ...state,
        articles: {
          ...state.articles,
          [action.id]: action.article,
        },
      };
    }
    default:
      return state;
  }
}
