import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-clientes-compras-fecha',
  template: `
    <h2>Clientes no mayores de 35 años con compras entre fechas</h2>
    <dx-list [dataSource]="dataSource">
      <div *dxTemplate="let cliente of 'item'">
        {{ cliente.nombre_cliente }} - Fecha última compra: {{ cliente.fecha_ultima_compra }}
      </div>
    </dx-list>
  `,
  styles: [`
    .dx-list-item {
      margin-bottom: 10px;
    }
  `]
})
export class ClientesComprasFechaComponent implements OnInit {
  dataSource!: DataSource<any, any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerClientesComprasFecha();
  }

  obtenerClientesComprasFecha(): void {
    this.http.get<any[]>('http://127.0.0.1:8080/reportes/clientes-compras-fecha/')
      .subscribe(data => {
        this.dataSource = new DataSource({
          store: data
        });
      });
  }
}
