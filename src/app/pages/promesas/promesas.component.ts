import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ],
})
export class PromesasComponent implements OnInit {

  constructor() {
    

    this.contarTres().then(
      () => console.log('Termino')

    ).catch(error => console.error('error en la promesa', error)

    );

   }

  ngOnInit(): void {
  }


  contarTres(): Promise<boolean>{
    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3){
          resolve();
          clearInterval(intervalo);
        }

      }, 1000);

    });
   
  }
}