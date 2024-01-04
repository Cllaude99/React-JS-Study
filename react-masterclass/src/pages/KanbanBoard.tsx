import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { toDoState } from '../stores/atoms';
import DragabbleCard from '../components/DragabbleCard';
import Board from '../components/Board';

const KanbanBoard = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    // setToDos((prev) => {
    //   const updateToDos = [...prev];
    //   updateToDos.splice(source.index, 1);
    //   updateToDos.splice(destination.index, 0, draggableId);
    //   return updateToDos;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default KanbanBoard;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
