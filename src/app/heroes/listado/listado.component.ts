import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


   Heroes:string[] = ["spiderman", "ironman", "capitan america", "JP"]
   Borrado:string = "";
  borrar(){

    this.Borrado = this.Heroes.shift() || '';
    
  }
}
