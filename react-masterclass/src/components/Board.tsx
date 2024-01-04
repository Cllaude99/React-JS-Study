import { Droppable } from 'react-beautiful-dnd';
import DragabbleCard from './DragabbleCard';
import { styled } from 'styled-components';

interface IBoardProps {
  toDos: string[];
  boardId: string;
}
const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard toDo={toDo} index={index} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Board;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
`;
