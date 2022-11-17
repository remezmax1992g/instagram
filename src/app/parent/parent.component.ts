import { Component } from '@angular/core'

interface Lesson {
  id: number
  title: string
  weekGrade: WeekGrade[]
}

interface WeekGrade {
  id: number
  gradeItem: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  grades: string[] = ['math: 5', 'english: 4']
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'math',
      weekGrade: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
    {
      id: 1,
      title: 'physic',
      weekGrade: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 3,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
    {
      id: 2,
      title: 'english',
      weekGrade: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 3,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
  ]
  isLoading = true
  isSuccess = false
  value = ''

  constructor() {
    setTimeout(() => {
      this.isLoading = false
      this.isSuccess = true
    }, 1000)
  }

  getGrade(value: string) {
    this.grades.push(value)
  }
}
