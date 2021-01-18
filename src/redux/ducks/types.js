export const Types = {
  FETCH_TYPES: 'types/FETCH_TYPES',
  FETCH_TYPES_SUCCESS: 'types/FETCH_TYPES_SUCCESS',
  LOADING: 'types/LOADING',
  ERROR: 'types/ERROR',
};

const INITIAL_STATE = {
  types: [],
  error: '',
  isLoading: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload.types,
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
    default:
      return { ...state };
  }
};

export const Creators = {
  fetchTypes: () => {
    console.log('[typeCreator[fetchTypes]] - ');
    return {
      type: Types.FETCH_TYPES,
    };
  },
  onLoading: () => {
    console.log('[typeCreator[onLoading]] - ');
    return {
      type: Types.LOADING,
    };
  },
  onError: (error) => {
    console.log('[typeCreator[onError]] - ', error);
    return {
      type: Types.ERROR,
      payload: {
        error,
      },
    };
  },
  onFetchSuccess: (types) => {
    console.log('[typeCreator[onFetchSuccess]] - ');
    return {
      type: Types.FETCH_TYPES_SUCCESS,
      payload: {
        types,
      },
    };
  },
};

export default reducer;
