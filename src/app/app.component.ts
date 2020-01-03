import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Response, Headers, RequestOptions } from '@angular/http'
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ajax } from 'rxjs/ajax';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Staff Name';
  httpdata;
  constructor( private http: Http){} 
  ngOnInit() {
      this.http.get("https://jsonplaceholder.typicode.com/users")
      .map((response:Response) => response.json())
      .subscribe((data) => console.log(data))     
       }
   displaydata(data) {this.httpdata = data;}
}
