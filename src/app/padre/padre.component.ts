import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
 //CONTADOR
 valorContador: number =0;

 incrementarValor() {
  this.valorContador++;
 }

 decrementarValor() {
  if (this.valorContador > 0) {
    this.valorContador--;
  } else {
    alert("No es posible establecer valores negativos en este contador.");
  }
 }

 //DATA BINDING
 //Primero creo el atributo con el tipo y mensaje que quiero enviar. Ver paso 2 en el TS del hijo..
 mensajePadre: string = "Hola, soy tu padre.";
}
