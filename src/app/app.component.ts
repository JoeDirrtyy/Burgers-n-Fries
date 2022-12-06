import { Component } from '@angular/core';

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

export class AppComponent {
    title = 'Burgers n Fries'
    foods = [{
      "id": 1,
      "name": "Cheese Burger",
      "brand": "Mcdonalds",
      "price": "$4.00"
    },
    {
      "id": 2,
      "name": "Salty Fries",
      "brand": "Burger king",
      "price": "$2.00"
    },
      {
        "id": 3 ,
        "name": "Cold Soda",
        "brand": "CocaCola",
        "price": "$2.50"
    }];
  }

