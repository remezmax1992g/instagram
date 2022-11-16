import { Component, EventEmitter, Output } from '@angular/core'

export interface Grade {
  math: number
  physic: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  inputText = ''

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputText)
  }
}
