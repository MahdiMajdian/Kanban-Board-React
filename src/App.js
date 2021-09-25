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
		const sourceCol = data.columns[source.droppableId]

		const newSourceTasks = Array.from(sourceCol.taskIds)
		newSourceTasks.splice(source.index, 1)

		const newSourceCol = {
			...sourceCol,
			taskIds: newSourceTasks,
		}

		const destCol = data.columns[destination.droppableId]

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

		setData((prev) => {
			const res = {
				...prev,
				columns: {
					...prev.columns,
					[source.droppableId]: newSourceCol,
					[destination.droppableId]: newDestCol,
				},
			}
			return res
		})
	}
	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="flex flex-col gap-4 sm:flex-row">
					{data.columnOrder.map((columnId) => {
						const column = data.columns[columnId]
						const tasks = column.taskIds.map(
							(taskId) => data.tasks[taskId]
						)

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
