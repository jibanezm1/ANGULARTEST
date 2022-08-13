import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Nombre de la etiqueta en html del componente
  templateUrl: './app.component.html', // la direccion del archivo html que se renderizara
  styleUrls: ['./app.component.css'] // la direccion de la hoja de estilo para ese componente
})
export class AppComponent {
  titulo: string = 'Aplicacion de contador';
  
}
