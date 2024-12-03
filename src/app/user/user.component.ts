import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  name! : string ;

  @Input()
  role!: string;
   
  constructor() {
      console.log("construct", this.name, this.role);
      if (this.name == null) {
        //its null
      }
  }

  ngOnInit(): void {
    console.log("construct", this.name, this.role);
    this.name = this.name.toUpperCase();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("onChanges", changes);
  }

}
