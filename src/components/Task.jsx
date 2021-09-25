import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (

                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`border border-gray-300 rounded-lg shadow-md font-medium my-2 p-2 ${snapshot.isDragging ? 'bg-blue-400 text-white' : 'bg-white'}`}>

                    {props.task.content}

                </div>
            )}
        </Draggable>
    )
}

export default Task
