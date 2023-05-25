import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-ultima-fecha-compra',
  template: `
    <h2>Última fecha de compra por cliente</h2>
    <dx-list [dataSource]="dataSource" [itemRender]="itemRender" class="dx-list-devextreme"></dx-list>
  `,
  styleUrls: ['./ultima-fecha-compra.component.css']
})
export class UltimaFechaCompraComponent implements OnInit {
  dataSource: DataSource= new DataSource({});

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerUltimaFechaCompra();
  }

  obtenerUltimaFechaCompra(): void {
    this.http.get<any[]>('http://localhost:8000/reportes/ultima-fecha-compra/')
      .subscribe(data => {
        this.dataSource = new DataSource({
          store: data,
          key: 'nombre_cliente'
        });
      });
  }

  itemRender(data: any): string {
    return `${data.nombre_cliente} - Última fecha de compra: ${data.ultima_fecha_compra}`;
  }
}
