import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalabrasComponent } from './shared/palabras/palabras.component';
import { LoaderbotComponent } from './shared/loaderbot/loaderbot.component';

const routes: Routes = [
  { path: 'alertas-sicoes', component: LoaderbotComponent },
  { path: 'alertas-sices-nav', component: PalabrasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })], exports: [RouterModule]
})
export class AppRoutingModule { }
