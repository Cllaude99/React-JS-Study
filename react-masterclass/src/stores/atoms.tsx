import { atom } from 'recoil';

//const { persistAtom } = recoilPersist();

export interface IToDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'TO DO': [],
    DOING: [],
    DONE: [],
  },
});
