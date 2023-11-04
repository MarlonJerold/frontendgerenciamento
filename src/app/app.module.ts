import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/shared/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaopadraoComponent } from './components/botaopadrao/botaopadrao.component';
import { TitulopadraoComponent } from './components/titulopadrao/titulopadrao.component';
import { PainelloginComponent } from './components/painellogin/painellogin.component';
import { BotaonavComponent } from './components/botaonav/botaonav.component';
import { PainelhomeComponent } from './component/painelhome/painelhome.component';
import { PainelhomemainComponent } from './components/painelhomemain/painelhomemain.component';
import { ConteudopainelconsultarComponent } from './components/conteudopainelconsultar/conteudopainelconsultar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    BotaopadraoComponent,
    TitulopadraoComponent,
    PainelloginComponent,
    BotaonavComponent,
    PainelhomeComponent,
    PainelhomemainComponent,
    ConteudopainelconsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
