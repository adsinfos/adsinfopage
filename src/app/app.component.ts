import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TitleService } from './core/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  items: MenuItem[];
  constructor(public title: TitleService) {
    this.items = [];
    title.setSubtitulo("Home");
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        url: 'https://adsinfo.me',
      },
      {
        label: 'Crear alertas Sicoes',
        routerLink: ['/alertas-sicoes'],
      },
    ];
  }
}
