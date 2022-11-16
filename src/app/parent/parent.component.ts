import { Component } from '@angular/core'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  grades: string[] = ['math: 5', 'english: 4']

  getGrade(value: string) {
    this.grades.push(value)
  }
}
