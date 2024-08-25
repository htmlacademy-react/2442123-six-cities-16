import { Reducer } from 'react';

type Optional<Type> = {
  [Property in keyof Type]?: Type[Property];
}
  type FormDataType = {
  rating: number;
  text: string;
  };

  type ActionType = Optional<FormDataType>

export const getStarsText = (num: number) => `${num}-star${num > 1 ? 's' : ''}`;

export const setFormData: Reducer<FormDataType, ActionType> = (state: FormDataType, action: ActionType) => {
  if (action.rating !== undefined) {
    return {
      ...state,
      rating: action. rating,
    };
  }
  if (action.text !== undefined) {
    return {
      ...state,
      text: action.text,
    };

  }
  return state;
};
