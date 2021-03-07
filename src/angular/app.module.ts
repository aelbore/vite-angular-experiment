import 'zone.js/dist/zone'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));