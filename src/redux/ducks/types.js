export const Types = {
  FETCH_BETS: 'bets/FETCH_BETS',
  FETCH_BETS_SUCCESS: 'bets/FETCH_BETS_SUCCESS',
  LOADING: 'bets/LOADING',
  ERROR: 'bets/ERROR',
  SAVE_BETS: 'bets/SAVE_BETS',
};

const INITIAL_STATE = {
  bets: [],
  error: '',
  isLoading: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVE_BETS:
      return {
        ...state,
        bets: state.bets.concat(action.bets),
        error: '',
        isLoading: false,
      };
    case Types.LOADING:
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case Types.ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case Types.FETCH_BETS_SUCCESS:
      return {
        ...state,
        bets: action.payload.bets,
        error: '',
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export const Creators = {
  fetchBets: () => {
    console.log('[betCreator[fetchBets]] - ');
    return {
      type: Types.FETCH_BETS,
    };
  },
  saveBet: (bets) => {
    console.log('[betCreator[saveBet]] - ', bets);
    return {
      type: Types.SAVE_BETS,
      payload: {
        bets,
      },
    };
  },
  onLoading: () => {
    console.log('[betCreator[onLoading]] - ');
    return {
      type: Types.LOADING,
    };
  },
  onError: (error) => {
    console.log('[betCreator[onError]] - ', error);
    return {
      type: Types.ERROR,
      payload: {
        error,
      },
    };
  },
  onFetchSuccess: (bets) => {
    console.log('[betCreator[onFetchSuccess]] - ', bets);
    return {
      type: Types.FETCH_BETS_SUCCESS,
      payload: {
        bets,
      },
    };
  },
};

export default reducer;
