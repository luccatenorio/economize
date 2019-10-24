import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetasComponent } from './metas/metas.component';
import { PrincipalComponent } from './principal/principal.component';
import { EconomiasComponent } from './economias/economias.component';
import { ControleComponent } from './controle/controle.component';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    PrincipalComponent,
    EconomiasComponent,
    ControleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
