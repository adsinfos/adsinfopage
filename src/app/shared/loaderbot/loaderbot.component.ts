import { Component } from '@angular/core';

@Component({
  selector: 'app-loaderbot',
  templateUrl: './loaderbot.component.html',
  styleUrls: ['./loaderbot.component.sass']
})
export class LoaderbotComponent {
  ngOnInit() {
    window.open("googlechrome://botsform.adsinfo.me/#/alertas-sices-nav", "_system");
  }
}
