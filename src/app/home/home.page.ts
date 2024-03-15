import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  temperatura: number=0;
  mensaje: string=" ";
  esFrio: boolean=false;
  esTemplado: boolean=false;
  esCalor: boolean=false;
  escalas: number[] = [];

  calcularTemperatura() {
    if(this.temperatura >101){
      this.mensaje = "Temperatura no valida";
      this.esFrio = true;
      this.esTemplado = true;
      this.esCalor = true;
    } else if (this.temperatura < 10) {
      this.mensaje = "Está haciendo frío.";
      this.esFrio = true;
      this.esTemplado = false;
      this.esCalor = false;
    } else if (this.temperatura >= 10 && this.temperatura < 25) {
      this.mensaje = "Está templado.";
      this.esFrio = false;
      this.esTemplado = true;
      this.esCalor = false;
    } else {
      this.mensaje = "Está haciendo calor.";
      this.esFrio = false;
      this.esTemplado = false;
      this.esCalor = true;
    }
  }
  calcularPosicionBola(): string {
    const offset = (this.temperatura / 100) * 200; // Altura total del termómetro
    return `${offset}px`; // Devuelve la posición en formato de cadena
  }
  
}
