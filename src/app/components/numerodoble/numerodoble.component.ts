import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public numero!: number;
  public doble!: number;

  //NECESITAMOS RECIBIR EL OBJETO ActivatedRoute
  //PARA RECUPERAR PARAMETROS
  //AN ANGULAR, LOS OBJETOS INYECTADOS SE DENOMINAN 
  //CON GUION BAJO
  constructor(private _activeRoute: ActivatedRoute
    , private _router: Router) { }

  redirect(num: number): void{
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //AQUI ES DONDE SE RECUPERAN LOS PARAMETROS
    //SE UTILIZA UNA PROMESA LLAMADA subscribe
    //Y LA PROMESA TRAE Params CON LOS PARAMETROS
    //POR SU name
    this._activeRoute.params.subscribe(( params: Params ) => {
      //PREGUNTAMOS SI EXISTE EL PARAMETRO numero
      if (params['numero'] != null){
        //ASIGNAMOS LA PROPIEDAD PARA LA PAGINA
        //SIEMPRE VIENEN COMO STRING
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2 ;
      }
    });
  }
}
