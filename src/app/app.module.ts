import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PalabrasComponent } from './shared/palabras/palabras.component'
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ChipsModule } from 'primeng/chips';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderbotComponent } from './shared/loaderbot/loaderbot.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    PalabrasComponent,
    LoaderbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, ButtonModule,
    TableModule, MenubarModule,
    ToolbarModule,
    ChipsModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    PanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
