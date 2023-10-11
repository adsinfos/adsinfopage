import { Component } from '@angular/core';

@Component({
  selector: 'app-loaderbot',
  templateUrl: './loaderbot.component.html',
  styleUrls: ['./loaderbot.component.sass']
})
export class LoaderbotComponent {
  ngOnInit() {
    window.open("http://botsform.adsinfo.me/#/alertas-sices-nav", "_blank");
  }
}
