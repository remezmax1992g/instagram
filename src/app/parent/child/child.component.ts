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
  @Output() sendGradeEvent = new EventEmitter<Grade>()
  sendGradeHandler() {
    const math = 5
    const physic = 4
    this.sendGradeEvent.emit({ math, physic })
  }
}
