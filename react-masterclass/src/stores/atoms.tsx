import { atom } from 'recoil';

//const { persistAtom } = recoilPersist();

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: ['a', 'b', 'e'],
    doing: ['c', 'd'],
    done: ['f'],
  },
});
