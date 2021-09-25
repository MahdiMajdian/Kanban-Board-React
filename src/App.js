import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import "./App.css"
import Column from "./components/Column"
import initialData from "./initialData"

function App() {
	const [data, setData] = useState(initialData)

	const onDragEnd = (result) => {
		const { source, destination, draggableId } = result
		if (!destination) return
		console.log(result)
		const sourceCol = data.columns[source.droppableId]
		// "column-1": {
		// 	id: "column-1",
		// 	title: "To dos",
		// 	taskIds: ["task-4, "task-5"],
		// }
		const newSourceTasks = Array.from(sourceCol.taskIds)
		newSourceTasks.splice(source.index, 1)

		const newSourceCol = {
			...sourceCol,
			taskIds: newSourceTasks,
		}

		const destCol = data.columns[destination.droppableId]
		// "column-1": {
		// 	id: "column-1",
		// 	title: "To dos",
		// 	taskIds: ["task-1", "task-2", "task-3"],
		// }
		let newDestTasks = []
		if (source.droppableId === destination.droppableId) {
			newDestTasks = Array.from(newSourceTasks)
		} else {
			newDestTasks = Array.from(destCol.taskIds)
		}
    
		newDestTasks.splice(destination.index, 0, draggableId)

		const newDestCol = {
			...destCol,
			taskIds: newDestTasks,
		}
console.log(newSourceCol)
console.log(newDestCol)
		setData((prev) => {
			const res = {
				...prev,
				columns: {
					...prev.columns,
					[source.droppableId]: newSourceCol,
					[destination.droppableId]: newDestCol,
					// ...newDestCol,
				},
			}
			// console.log(res)
			return res
		})

		// 		const column = data.columns[source.droppableId]
		// 		const newTaskIds = Array.from(column.taskIds)
		// 		newTaskIds.splice(source.index, 1)
		//
		// 		const desColumn = data.columns[destination.droppableId]
		// 		const desNewTaskIds = Array.from(desColumn.taskIds)
		// 		desNewTaskIds.splice(destination.index, 0, draggableId)
		//
		// 		const newColumn = {
		// 			...column,
		// 			taskIds: newTaskIds,
		// 		}
		// 		const desNewColumn = {
		// 			...desColumn,
		// 			taskIds: desNewTaskIds,
		// 		}
		// 		setData((prev) => ({
		// 			...prev,
		// 			columns: {
		// 				...prev.columns,
		// 				[newColumn.id]: newColumn,
		// 				[desNewColumn.id]: desNewColumn,
		// 			},
		// 		}))
	}
	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="flex">
					{data.columnOrder.map((columnId) => {
						const column = data.columns[columnId]
						const tasks = column.taskIds.map(
							(taskId) => data.tasks[taskId]
						)
						// console.log(column)
						// console.log(tasks)
						return (
							<Column
								key={column.id}
								column={column}
								tasks={tasks}
							/>
						)
					})}
				</div>
			</DragDropContext>
		</div>
	)
}

export default App
