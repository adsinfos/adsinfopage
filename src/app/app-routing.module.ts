import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './shared/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })], exports: [RouterModule]
})
export class AppRoutingModule { }
