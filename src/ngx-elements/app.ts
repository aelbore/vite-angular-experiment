import '@angular/compiler'

import { Component, ViewEncapsulation } from "@angular/core"
import { NgForOf, AsyncPipe } from "@angular/common"

import { renderCustomElement } from 'ngx-elements'
import { AppService } from "./app.service"

import { Observable } from 'rxjs'

@Component({
  selector: 'hello-world',
  template: `
    <div>
      <h1>Hello {{ message }}</h1> 
      <ul>
        <li *ngFor="let name of names | async">{{ name }}</li>
      </ul>     
    </div>
  `,
  styles: [ `
    h1 {
      color: green;
    }
  `],
  providers: [ AppService ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent { 
  message = 'World'
  names: Observable<string[]>

  constructor(service: AppService) {
    this.names = service.getNames()
  }
}

renderCustomElement(AppComponent, { 
  directives: [ NgForOf ],
  pipes: [ AsyncPipe ]
})