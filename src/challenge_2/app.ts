interface TodoItem {
    id: number;
    title: string;
    status: ItemStatus;
    completedOn?: Date;
}

enum ItemStatus {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo",
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: ItemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ItemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: ItemStatus.Todo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems);

    const newTodo: TodoItem = {
        id,
        title: todo,
        status: ItemStatus.Todo,
    }

    todoItems.push(newTodo);
    return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");

console.log(JSON.stringify(newTodo));