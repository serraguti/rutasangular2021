import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public numeros!: Array<number>;

  constructor() { 
    this.numeros = new Array<number>();
  }

  ngOnInit(): void {
    for (var i = 1; i <= 10; i++){
      var random = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(random);
    }
  }
}
