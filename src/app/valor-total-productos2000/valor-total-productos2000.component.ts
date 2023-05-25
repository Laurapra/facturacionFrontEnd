import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';

interface Producto {
  nombre_producto: string;
  valor_total: number;
}

@Component({
  selector: 'app-valor-total-productos-2000',
  template: `
    <h2>Valor total vendido por cada producto en el año 2000</h2>
    <dx-list [dataSource]="dataSource" [itemRender]="itemRender" class="dx-list-devextreme"></dx-list>
  `,
  styles: [`
    .dx-list-devextreme {
      /* Agrega aquí tus estilos CSS personalizados para el componente */
    }
  `]
})
export class ValorTotalProductos2000Component implements OnInit {
  dataSource: DataSource = new DataSource({});

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerValorTotalProductos2000();
  }

  obtenerValorTotalProductos2000(): void {
    this.http.get<Producto[]>('http://127.0.0.1:8080/reportes/valor-total-productos-2000/')
      .subscribe(data => {
        this.dataSource = new DataSource({
          store: data,
          key: 'nombre_producto'
        });
      });
  }

  itemRender(data: Producto): string {
    return `${data.nombre_producto} - Valor total: ${data.valor_total}`;
  }
}
