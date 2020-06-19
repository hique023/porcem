import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  valorPorcentagem: number;
  montTotal1: number;
  result1: number;
  texto1: any;

  quantidade: number;
  montTotal2: number;
  result2: number;
  texto2: any;

  public calPorcem(){
    this.result1 = (this.valorPorcentagem * this.montTotal1) / 100;

    this.texto1 = this.valorPorcentagem + '% de ' + this.montTotal1 + " é: " + this.result1;
  }

  public opInversa() {
    this.result2 = (this.quantidade * 100) / this.montTotal2;
    
    this.texto2 = this.quantidade + ' de ' + this.montTotal2 + " é: " + this.result2 + '%';
  }

  public cleanAllSimples(){
    this.result1 = null;
    this.montTotal1 = null;
    this.valorPorcentagem = null;
    this.texto1 = null;
  }

  public cleanAllInverso(){
    this.result2 = null;
    this.montTotal2 = null;
    this.quantidade = null;
    this.texto2 = null;
  }

  ngOnInit() {
  }

}