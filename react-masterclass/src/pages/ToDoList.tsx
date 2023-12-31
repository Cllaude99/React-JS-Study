import { useRecoilState, useRecoilValue } from 'recoil';
import CreateToDo from '../components/CreateToDo';
import ToDo from '../components/ToDo';
import {
  Category,
  categoryState,
  toDoSelector,
  toDoState,
} from '../stores/atoms';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Category);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput} value={category}>
        <option value={Category.TO_DO}>To Do</option>
        <option value={Category.DOING}>DOING</option>
        <option value={Category.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <h1>{category}</h1>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
