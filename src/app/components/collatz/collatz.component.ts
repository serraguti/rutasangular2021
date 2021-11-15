import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numeros!: Array<number>;
  private numero!: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.numero = parseInt(params['collatz']);
      this.generarCollatz();
    });
  }

  generarCollatz(): void {
    this.numeros = new Array<number>();
    this.numeros.push(this.numero);
    while (this.numero != 1){
      if (this.numero % 2 == 0){
        this.numero = this.numero / 2;
      }else{
        this.numero = this.numero * 3 + 1;
      }
      this.numeros.push(this.numero);
    }
  }
}
