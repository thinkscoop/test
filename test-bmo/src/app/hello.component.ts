import { Component, Input } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  template: `<h3>Welcome</h3>`,
  styles: [`h3 { font-family: Lato; }`]
})
export class HelloComponent   {
  @Input() name: string;
   url = 'http://opentable.herokuapp.com/api/restaurants?city=toronto';
   res: any = [];

    constructor(private http: HttpClient, private serviceGet: HelloService ) {
      }
   ngOnInit(): void {
 this.serviceGet.getData().subscribe(data => {
     console.log(data);
 });
 

        // this.http.get('http://opentable.herokuapp.com/api/restaurants?city=toronto').subscribe(data => {
        //     this.res = data;
        //     console.log(this.res);
        // },
        //   (err: HttpErrorResponse) => {
        //     if (err.error instanceof Error) {
        //       console.log("Client-side error occured.");
        //     } else {
        //       console.log(err);
        //     }
        //   });

      }
}
