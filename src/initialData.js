const initialData = {
	tasks: {
		"task-1": { id: "task-1", content: "Take somthing out" },
		"task-2": { id: "task-2", content: "Do some work" },
		"task-3": { id: "task-3", content: "geting out of the bulding" },
		"task-4": { id: "task-4", content: "product ownership" },
		"task-5": { id: "task-5", content: "working with react dnd" },
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "To dos",
			taskIds: ["task-1", "task-2", "task-3"],
		},
		"column-2": {
			id: "column-2",
			title: "To dos",
			taskIds: ["task-4", "task-5"],
		},
	},
	columnOrder: ["column-1","column-2"],
}

export default initialData
