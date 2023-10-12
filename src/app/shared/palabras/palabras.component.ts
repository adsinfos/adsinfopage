import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TitleService } from 'src/app/core/title/title.service';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.sass']
})
export class PalabrasComponent implements OnInit {
  keywords: string[] = [];
  fin: string = "";
  messages: Message[] = [];

  constructor(public title: TitleService, private messageService: MessageService, private http: HttpClient) {
    title.setSubtitulo("Sicoes Palabras clave");
  }
  ngOnInit(): void {
    this.messages = [{ severity: 'info', summary: '', detail: 'No te preucupes de mayusculas, minusculas o acentos son indiferentes' }];
  }
  agregar(tipo: string) {
    switch (tipo) {
      case 'info':
        this.keywords = ["desarrollo de software",
          "desarrollo de un",
          "sistema Informatico",
          "sistemas",
          "programacion"];
        break;
      case 'audi':
        this.keywords = ["auditoria",
          "auditor",
          "financiera",
          "seguridad",
          "auditar"];
        break;
      case 'cons':
        this.keywords = ["construccion",
          "mantenimiento",
          "levantamiento",
          "limpieza",
          "civil"];
        break;
      default:
        break;
    }

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

    const jsonData = JSON.stringify({ words: this.keywords });

    this.http.post('https://url.adsinfo.me/json.php', jsonData, { responseType: 'text' }).subscribe(response => {
      const base64String = btoa(response);
      const link = `https://t.me/idotodobot?start=sicnot_${base64String}`;
      window.open(link, '_blank');
    }, error => {
      console.error('Hubo un error al consumir la API', error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al consumir la API' });
    });
  }
}
