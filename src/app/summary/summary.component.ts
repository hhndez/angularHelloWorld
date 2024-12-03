import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {

  constructor(public dataService : DataService) {

  }

  totalPrice = 0;

  ngOnInit(): void {
       let prices = 0;

       for (let song of this.dataService.songs) {
          prices = prices + song.price;
       }
//reduce((acc, price) => acc + price, 0)

       this.totalPrice = prices;
       this.calculateTotal();
  }

  calculateTotal() {
    this.dataService.increaseSongPrice();
  }

  increaseSongPrice() {
      this.calculateTotal();

  }



}
