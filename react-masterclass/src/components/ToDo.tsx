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

  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Category.Doing && (
          <button onClick={() => onClick(Category.Doing)}>Doing</button>
        )}
        {category !== Category.TO_DO && (
          <button onClick={() => onClick(Category.TO_DO)}>To Do</button>
        )}
        {category !== Category.Done && (
          <button onClick={() => onClick(Category.Done)}>Done</button>
        )}
      </li>
    </>
  );
};

export default ToDo;
