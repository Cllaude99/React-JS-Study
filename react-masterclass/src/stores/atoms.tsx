import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export enum Category {
  TO_DO = 'TO_DO',
  DOING = 'DOING',
  DONE = 'DONE',
}
export interface IToDo {
  id: number;
  text: string;
  category: Category;
}
export const categoryState = atom<Category>({
  key: 'category',
  default: Category.TO_DO,
});
export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const category = get(categoryState);
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
