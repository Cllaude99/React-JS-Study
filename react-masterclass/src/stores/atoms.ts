import { atom } from 'recoil';

export enum Category {
  TO_DO = 'TO_DO',
  Doing = 'DOING',
  Done = 'DONE',
}
export interface IToDo {
  id: number;
  text: string;
  category: Category;
}
export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
