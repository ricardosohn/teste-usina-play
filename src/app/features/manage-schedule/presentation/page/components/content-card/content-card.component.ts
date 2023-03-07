import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent  implements OnInit {
  @Input() src: String = '../../../../../../../assets/images/deadlift.jpg';
  @Input() title: String = '';
  @Input() started: boolean = false;
  @Input() buttonMode: boolean = false;
  buttonPressed: boolean = false;

  constructor() { } 

  ngOnInit() {}


  onCardPressed() {
    this.buttonPressed = !this.buttonPressed;
  }
}
