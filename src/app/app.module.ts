import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TransformerPipe } from './pipes/transformer.pipe';
import { PipesModule } from './pipes/pipes/pipes.module';



@NgModule({
    declarations: [ // componentes, diretivas e pipes
        AppComponent,
    ],
    providers: [
    // pode registrar o service, para que quem pertença ao módulo enxergue o service
    ],
    bootstrap: [AppComponent],
    imports: [ // modules e components
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CardComponent,
        PipesModule
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
