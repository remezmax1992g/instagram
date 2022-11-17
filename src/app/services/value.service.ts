import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  value = 0

  inc() {
    this.value = this.value + 1
  }

  dec() {
    this.value = this.value - 1
  }
}
