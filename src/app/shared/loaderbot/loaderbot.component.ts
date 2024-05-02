import { Component } from '@angular/core';

@Component({
  selector: 'app-loaderbot',
  templateUrl: './loaderbot.component.html',
  styleUrls: ['./loaderbot.component.sass']
})
export class LoaderbotComponent {

  ngOnInit() {
    window.location.href = "/assets/redirect.html";
  }
}
