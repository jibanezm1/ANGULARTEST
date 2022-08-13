import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule // importa las directivas para los *ng if else y for 
    ]
})

export class HeroesModule{

}