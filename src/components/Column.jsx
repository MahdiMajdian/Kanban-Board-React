import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const Column = (props) => {
    return (<div className='w-full m-8 mx-auto p-4 border border-gray-300 bg-gray-100 shadow-lg rounded-lg max-w-md'>
        <h1 className='text-3xl font-bold mb-4'>
            {props.column.title}
        </h1>
        {/* {console.log(props)} */}
        <Droppable droppableId={props.column.id} className='h-full'>
            {provided => (
                <div className='h-full' ref={provided.innerRef} {...provided.droppableProps}>
                    {props.tasks.map((task, index) =>
                        <Task key={task.id} task={task} index={index} />)}
                    {provided.placeholder}
                </div>
            )
            }
        </Droppable>
    </div>
    )
}

export default Column
