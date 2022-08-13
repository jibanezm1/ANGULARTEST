import { Component } from '@angular/core';

@Component({
  selector: 'heroe', //Nombre de la etiqueta en html del componente
  templateUrl: './heroe.component.html', // la direccion del archivo html que se renderizara
  styleUrls: ['./heroe.component.css'] // la direccion de la hoja de estilo para ese componente
})
export class HeroeComponent {
  nombre: string = "JP";
  edad: number = 10;

  mostrar() {
    return this.nombre+" ,"+this.edad;
  }
 
  
}
