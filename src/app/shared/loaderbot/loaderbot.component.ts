import { Component } from '@angular/core';

@Component({
  selector: 'app-loaderbot',
  templateUrl: './loaderbot.component.html',
  styleUrls: ['./loaderbot.component.sass']
})
export class LoaderbotComponent {

  ngOnInit() {
    let valor = sessionStorage.getItem("token");
    if (valor != null) {
      const randomNumber = Math.random().toString(); // Convert randomNumber to a string
      sessionStorage.setItem("token", randomNumber);
      window.location.href = "https://adsbot.rf.gd/carga.php";
    } else {
      sessionStorage.removeItem("token");
      window.location.href = "/assets/redirect.html";
    }
  }
}
