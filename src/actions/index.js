import * as types from './ActionTypes';

export const onNumClick = (number) => ({
  type: types.INPUT_NUMBER,
  number,
});
export const onPlusClick = () => ({
  type: types.PLUS,
});
export const onMinusClick = () => ({
  type: types.MINUS,
});
export const onClearClick = () => ({
  type: types.CLEAR,
  resultValue: 0,
});
export const onAllclearClick = () => ({
  type: types.ALLCLEAR,
  resultValue: 0,
});
