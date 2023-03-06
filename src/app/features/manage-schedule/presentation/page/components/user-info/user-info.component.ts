import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {
  @Input() name: String = '';
  @Input() level: String = '';
  colorClass: String = '';

  constructor() {
  }

  ngOnInit() {
    this.setColorClassByLevel();
  }

  setColorClassByLevel(): void {
    switch (this.level) {
      case 'gold':
        this.colorClass = 'level-gold';
        break;
      case 'platinum':
        this.colorClass = 'level-platinum';
        break;
      case 'purple':
        this.colorClass = 'level-purple';
        break;
      default:
        this.colorClass = 'level-undef';
    }
  }

  getLevelName(): String {
    if (this.level === 'gold') {
      return 'Ouro';
    } else if (this.level === 'platinum') {
      return 'Platina';
    } else {
      return 'Roxo';
    }
  }
}
