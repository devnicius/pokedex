import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
    ],
    providers: [
    // pode registrar o service, para que quem pertença ao módulo enxergue o service
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InputComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
