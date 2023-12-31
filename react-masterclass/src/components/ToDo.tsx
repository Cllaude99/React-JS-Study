import { useSetRecoilState } from 'recoil';
import { IToDo, Category, toDoState } from '../stores/atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (category: Category) => {
    setToDos((prev) => {
      const newToDos = prev.map((toDo) =>
        toDo.id === id ? { id, text, category } : toDo
      );
      return newToDos;
    });
  };
  const handleDelete = () => {
    setToDos((prev) => {
      const newToDos = prev.filter((toDo) => toDo.id !== id);
      return newToDos;
    });
  };
  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Category.DOING && (
          <button onClick={() => onClick(Category.DOING)}>Doing</button>
        )}
        {category !== Category.TO_DO && (
          <button onClick={() => onClick(Category.TO_DO)}>To Do</button>
        )}
        {category !== Category.DONE && (
          <button onClick={() => onClick(Category.DONE)}>Done</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

export default ToDo;
