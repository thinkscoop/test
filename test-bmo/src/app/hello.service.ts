import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HelloService {
  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    
      return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=toronto");
  }
}