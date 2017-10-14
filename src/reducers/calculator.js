import * as actionTypes from '../actions/ActionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch(action.type) {
      case actionTypes.INPUT_NUMBER:
          return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
          };
      case actionTypes.PLUS:
          return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
      case actionTypes.MINUS:
          return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
      case actionTypes.CLEAR:
          return {
            ...state,
            resultValue: action.resultValue,
            showingResult: true,
          };
      case actionTypes.ALLCLEAR:
          return {
            ...state,
            inputValue: 0,
            resultValue: 0,
            showingResult: true,
          };
      default:
          return state;
  }
};

export default calculator;
