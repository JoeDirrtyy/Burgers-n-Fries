import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <ul>
    <li *ngFor="let food of foods">
  <h2> {{food.name}}</h2>
  <p> {{food.brand}}<p>
  <p> {{food.price | currency: 'US':true}}<p>
</li>
</ul>`
})


@NgModule({
  declarations: [ AppComponent],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})

 class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));