import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
@Component({
  selector: "inst-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": "aa708570-28f6-4af0-bbfe-8b64cb21c0d4",
    },
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.http
      .get<Todo[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", this.httpOptions)
      .subscribe((res: Todo[]) => {
        this.todos = res
      })
  }
  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "Angular" + randomNumber
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        "https://social-network.samuraijs.com/api/1.1/todo-lists",
        { title },
        this.httpOptions
      )
      .subscribe(res => {
        this.todos = [...this.todos, res.data.item]
      })
  }
  deleteTodo() {
    let todoID = "fae6ae23-2707-4910-8150-dcadfec75124"
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}`,
        this.httpOptions
      )
      .subscribe(res => {
        this.todos = this.todos.filter(tl => tl.id !== todoID)
      })
  }
}
