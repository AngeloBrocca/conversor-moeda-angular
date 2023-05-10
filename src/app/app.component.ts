import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ConversionResponse {
  meta: {
    code: number;
    disclaimer: string;
  };
  response: {
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key = 'b0003f946051f325e2500e0a7d13955f';
  curArr: Array<{ nome: string; abv: string }> = [
    { nome: 'Real Brasileiro', abv: 'BRL' },
    { nome: 'Dólar Americano', abv: 'USD' },
    { nome: 'Euro', abv: 'EUR' },
    { nome: 'Libra Esterlina', abv: 'GBP' },
    { nome: 'Renminbi Chinês', abv: 'CNY' }
  ];
  public cur1 = '';
  public cur2 = '';
  public amount = 0;
  public conversionResult: number | null = null;

  constructor(private http: HttpClient) {}

  convertCurrency() {
    const apiUrl = `https://currencybeacon.com/api/v1/convert?api_key=${this.key}&from=${this.cur1}&to=${this.cur2}&amount=${this.amount}`;
    this.http.get<ConversionResponse>(apiUrl).subscribe(
      (data) => {
        const value = data.response.value;
        this.conversionResult = parseFloat(value.toFixed(2));
      },
      (error) => {
        alert('Ocorreu um erro ao converter a moeda.');
      }
    );
  }
}
