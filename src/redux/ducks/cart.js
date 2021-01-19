export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
  SAVE: 'cart/SAVE',
  SUCCESS: 'cart/SUCCESS',
  LOADING: 'cart/LOADING',
  ERROR: 'cart/ERROR',
};

const INITIAL_STATE = {
  bets: [],
  totalPrice: 0,
  isLoading: false,
  error: '',
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        bets: state.bets.concat(action.payload.bet),
        totalPrice: state.totalPrice + action.payload.price,
      };
    case Types.REMOVE:
      return {
        ...state,
        bets: state.bets.filter((bet) => action.payload.betId !== bet.id),
        totalPrice: state.totalPrice - action.payload.price,
      };
    case Types.SUCCESS:
      return {
        ...state,
        bets: [],
        totalPrice: 0,
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
  addToCart: (bet, price) => {
    console.log('[cartCreator[add]] - ', bet);
    return {
      type: Types.ADD,
      payload: {
        bet,
        price,
      },
    };
  },
  removeFromCart: (id, price) => {
    console.log('[cartCreator[remove]] - ');
    return {
      type: Types.REMOVE,
      payload: {
        betId: id,
        price,
      },
    };
  },
  saveBets: (bets, alert) => {
    console.log('[cartCreator[saveBets]] - ', bets);
    return {
      type: Types.SAVE,
      payload: {
        bets,
        alert,
      },
    };
  },
  onLoading: () => {
    console.log('[cartCreator[onLoading]] - ');
    return {
      type: Types.LOADING,
    };
  },
  onError: (error) => {
    console.log('[cartCreator[onError]] - ', error);
    return {
      type: Types.ERROR,
      error,
    };
  },
  onSuccess: (bets) => {
    console.log('[cartCreator[onSuccess]] - ', bets);
    return {
      type: Types.SUCCESS,
    };
  },
};

export default reducer;
