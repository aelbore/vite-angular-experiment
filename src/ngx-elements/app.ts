import '@angular/compiler'

import { Component, ViewEncapsulation } from "@angular/core"
import { NgForOf } from "@angular/common"

import { renderCustomElement } from 'ngx-elements'
import { AppService } from "./app.service"

@Component({
  selector: 'hello-world',
  template: `
    <div>
      <h1>Hello {{ message }}</h1> 
      <ul>
        <li *ngFor="let name of names">{{ name }}</li>
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
  names: string[] = []

  constructor(service: AppService) {
    this.names = service.getNames()
  }
}

renderCustomElement(AppComponent, { 
  directives: [ NgForOf ]
})