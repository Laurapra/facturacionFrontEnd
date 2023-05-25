import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Facturación</h1>
    <nav>
      <ul>
        <li><a routerLink="/facturacion/lista-precios">Lista de Precios</a></li>
        <li><a routerLink="/facturacion/productos-minimo-existencia">Productos con Existencia Mínima</a></li>
        <li><a routerLink="/facturacion/clientes-compras-fecha">Clientes entre fechas</a></li>
        <li><a routerLink="/facturacion/valor-total-productos-2000">Valor Total Productos 2000</a></li>
        <li><a routerLink="/facturacion/ultima-fecha-compra">Última Fecha de Compra</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
