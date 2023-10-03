import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private subtitulo: string = "";
  constructor() {

  }
  getSubtitulo(): string {
    return this.subtitulo;
  }
  setSubtitulo(subt: string) {
    this.subtitulo = subt;
  }
}
