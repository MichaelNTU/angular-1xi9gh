import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'hello',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

}