import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from "devextreme/data/data_source";




@Component({
  selector: 'app-lista-precios',
  template: `
    <h2>Lista de Precios de Productos</h2>
    <dx-list [dataSource]="dataSource" [itemRender]="itemRender"></dx-list>
  `,
  styleUrls: ['./lista-precios.component.css']
})
export class ListaPreciosComponent implements OnInit {
  dataSource!: DataSource<any, any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerListaPrecios();
  }

  obtenerListaPrecios(): void {
    this.http.get<any[]>('http://127.0.0.1:8080/reportes/lista-precios/')
      .subscribe(data => {
        this.dataSource = new DataSource({
          store: data,
          key: 'nombre_producto'
        });
      });
  }

  itemRender(data: any): string {
    return `${data.nombre_producto} - Precio: ${data.precio_producto}`;
  }
}
