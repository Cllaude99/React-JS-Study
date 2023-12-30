import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { Category, toDoState } from '../stores/atoms';

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      ...prev,
      { id: Date.now(), text: toDo, category: Category.TO_DO },
    ]);
    setValue('toDo', '');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toDo', { required: 'Please write a Todo' })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateToDo;
