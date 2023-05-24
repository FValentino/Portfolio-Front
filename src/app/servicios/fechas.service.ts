import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  constructor() { }


  fechaInicio(valorIngresado : any) : boolean{
    return valorIngresado != '';
  }

  fechaFinal(año : number, mes : number) : string{
    if ( (mes+1) < 10){
      return año + "-0"+ (mes+1);
    }
    else{
      return año + "-" + (mes+1);
    }
  }
}
