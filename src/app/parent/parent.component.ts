import { Component } from '@angular/core'

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  name = 'Maxim'
  surname = 'Remez'
  address: Address = {
    city: 'Minsk',
    street: 'Bogdanovicha',
    house: 136,
  }
}
