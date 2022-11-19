import { Component, OnInit } from "@angular/core"
import { Todo, TodosService } from "../../services/todos.service"

@Component({
  selector: "inst-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.todosService.getTodos().subscribe((res: Todo[]) => {
      this.todos = res
    })
  }
  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "Angular" + randomNumber
    this.todosService.createTodo(title).subscribe(res => {
      this.todos = [res.data.item, ...this.todos]
    })
  }
  deleteTodo() {
    let todoID = "6c6291c8-1f24-408e-b6f1-c35c3acecbe2"
    this.todosService.deleteTodo(todoID).subscribe(res => {
      this.todos = this.todos.filter(tl => tl.id !== todoID)
    })
  }
}
