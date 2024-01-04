import { atom } from 'recoil';

//const { persistAtom } = recoilPersist();

export const toDoState = atom({
  key: 'toDo',
  default: ['a', 'b', 'c', 'd', 'e'],
});
