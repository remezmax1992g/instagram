import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
@Component({
  selector: "inst-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.http
      .get<Todo[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", {
        withCredentials: true,
        headers: {
          "api-key": "aa708570-28f6-4af0-bbfe-8b64cb21c0d4",
        },
      })
      .subscribe((res: Todo[]) => {
        this.todos = res
      })
  }
}
