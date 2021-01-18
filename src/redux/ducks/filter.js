export const Types = {
  ADD_TYPE: 'filter/ADD_TYPE',
  REMOVE_TYPE: 'filter/REMOVE_TYPE',
  CLEAR_TYPE: 'filter/CLEAR_TYPE',
};

const INITIAL_STATE = {
  selectedType: ['Lotofácil'],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_TYPE:
      return {
        ...state,
        selectedType: state.selectedType.concat(action.payload.optionType),
      };
    case Types.REMOVE_TYPE:
      return {
        ...state,
        selectedType: state.selectedType.filter(
          (type) => type !== action.payload.optionType
        ),
      };
    case Types.CLEAR_TYPE:
      return {
        ...state,
        selectedType: [action.payload.optionType],
      };
    default:
      return { ...state };
  }
};

export const Creators = {
  addType: (payload) => ({
    type: Types.ADD_TYPE,
    payload,
  }),
  removeType: (payload) => ({
    type: Types.REMOVE_TYPE,
    payload,
  }),
  clearType: (payload) => ({
    type: Types.CLEAR_TYPE,
    payload,
  }),
};

export default reducer;
