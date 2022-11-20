import { Component, OnDestroy, OnInit } from "@angular/core"
import { Todo, TodosService } from "../../services/todos.service"
import { HttpErrorResponse } from "@angular/common/http"
import { Subscription } from "rxjs"

@Component({
  selector: "inst-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error: string = ""
  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getTodos() {
    this.subscriptions.add(
      this.todosService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      })
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "Angular" + randomNumber
    this.subscriptions.add(
      this.todosService.createTodo(title).subscribe({
        next: res => {
          this.todos = [res.data.item, ...this.todos]
        },
      })
    )
  }

  deleteTodo() {
    let todoID = "6c6291c8-1f24-408e-b6f1-c35c3acecbe2"
    this.subscriptions.add(
      this.todosService.deleteTodo(todoID).subscribe({
        next: res => {
          this.todos = this.todos.filter(tl => tl.id !== todoID)
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      })
    )
  }
}
