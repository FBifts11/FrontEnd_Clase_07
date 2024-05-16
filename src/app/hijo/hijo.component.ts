import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
//  DATA BINDING
//  Paso 2, creo el Input en donde voy a recibir lo que el padre envía. Ver paso 3 en HTML del hijo.
@Input() hijoRecibeMensaje?:string;
}
