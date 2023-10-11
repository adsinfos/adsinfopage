import { Component } from '@angular/core';

@Component({
  selector: 'app-loaderbot',
  templateUrl: './loaderbot.component.html',
  styleUrls: ['./loaderbot.component.sass']
})
export class LoaderbotComponent {
  isActive = true;

  openURLIfActive(url: any) { if (this.isActive) { window.location = url; } }

  ngOnInit() {


    window.open("googlechrome://botsform.adsinfo.me/#/alertas-sices-nav", "_system");
  }
}
