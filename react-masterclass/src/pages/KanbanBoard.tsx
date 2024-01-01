import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(provided, snapshot) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(provided, snapshot) => (
                <li
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  One
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
