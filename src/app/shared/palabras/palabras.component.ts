import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.sass']
})
export class PalabrasComponent {
  keywords: string[] = [];

  constructor(public title: TitleService, private messageService: MessageService) {
    title.setSubtitulo("Sicoes Palabras clave");
  }

  validateKeywords() {
    if (this.keywords.length > 5) {
      this.keywords.pop();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Solo puedes agregar 5 palabras clave maximo' });
    }
  }

  generateLink() {
    if (this.keywords.length < 1 || this.keywords.length > 5) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debes agregar de 1 a 5 palabras, para agregar una presiona enter' });
      return;
    }
    const link = `https://t.me/idotodobot?start=sicnot_${this.keywords.join('_')}`;
    window.open(link, '_blank');
  }
}
