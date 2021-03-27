// your JavaScript goes here, you can delete this comment

const todolist = [
    {todo:"clone a repository", status:"complete"},
    {todo:"link the css and js to html", status:"complete"},
    {todo:"commit code at appropriate intervals", status:"started"},
    {todo:"push code to git repo", status:"started"}
;]

const completedTodos = [];

for (item in todolist) {
    if (todolist[item].status === "complete") {
      completedTodos.push(todolist[item])
    }
  }

for (item in todolist) {
    console.log(todolist(item).todo)
}