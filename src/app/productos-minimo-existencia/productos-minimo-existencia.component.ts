import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-productos-minimo-existencia',
  template: `
    <h2>Productos con existencia mínima</h2>
    <dx-list [dataSource]="dataSource" [itemRender]="itemRender" class="dx-list-devextreme"></dx-list>
  `,
  styleUrls: ['./productos-minimo-existencia.component.css']
})
export class ProductosMinimoExistenciaComponent implements OnInit {
  dataSource: DataSource=new DataSource({});

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerProductosMinimoExistencia();
  }

  obtenerProductosMinimoExistencia(): void {
    this.http.get<any[]>('http://127.0.0.1:8080/reportes/productos-minimo-existencia/')
      .subscribe(data => {
        this.dataSource= new DataSource({
          store: data,
          key: 'nombre_producto'
        });
      });
  }

  itemRender(data: any): string {
    return `${data.nombre_producto} - Existencia: ${data.cantidad}`;
  }
}
