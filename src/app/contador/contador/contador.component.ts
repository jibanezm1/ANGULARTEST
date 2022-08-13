import { Component } from '@angular/core';

@Component({
  selector: 'contador', //Nombre de la etiqueta en html del componente
  templateUrl: 'contador.component.html', // la direccion del archivo html que se renderizara
  styleUrls: ['contador.component.css'] // la direccion de la hoja de estilo para ese componente
})
export class ContadorComponent {
  titulo: string = 'Aplicacion de contador';
  contador: number = 10;
  base:number =  5;


  acomular(valor:number){
    this.contador +=valor;
  }
 
  
}
