import { Component } from "@angular/core"

@Component({
  selector: 'hello-world',
  template: `
    <div>
      <h1>Hello {{ message }}</h1>   
    </div>
  `,
  styles: [ `
    h1 {
      color: green;
    }
  `]
})
export class AppComponent { 
  message = 'World'
}