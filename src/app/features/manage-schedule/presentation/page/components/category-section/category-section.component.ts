import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent  implements OnInit {

  @Input() name: String = '';
  @Input() isPersonal: boolean = false;
  @Input() isProgram: boolean = false;
  @Input() isContent: boolean = false;

  constructor() { }

  ngOnInit() {}

}
