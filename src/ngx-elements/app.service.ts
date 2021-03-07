import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getNames() {
    return [ 'John', 'Jane' ]
  }

}