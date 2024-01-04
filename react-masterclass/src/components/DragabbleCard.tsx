import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}
const DragabbleCard = ({ toDo, index }: IDragabbleCardProps) => {
  return (
    <Draggable draggableId={toDo} index={index} key={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
`;
