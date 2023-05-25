import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule } from 'devextreme-angular';
import { DxListModule } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { ProductosMinimoExistenciaComponent } from './productos-minimo-existencia/productos-minimo-existencia.component';
import { ClientesComprasFechaComponent } from './clientes-compras-fecha/clientes-compras-fecha.component';
import { ValorTotalProductos2000Component } from './valor-total-productos2000/valor-total-productos2000.component';
import { UltimaFechaCompraComponent } from './ultima-fecha-compra/ultima-fecha-compra.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';

const routes: Routes = [
  { path: 'facturacion/lista-precios', component: ListaPreciosComponent },
  { path: 'facturacion/productos-minimo-existencia', component: ProductosMinimoExistenciaComponent },
  { path: 'facturacion/clientes-compras-fecha', component: ClientesComprasFechaComponent },
  { path: 'facturacion/valor-total-productos-2000', component: ValorTotalProductos2000Component },
  { path: 'facturacion/ultima-fecha-compra', component: UltimaFechaCompraComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListaPreciosComponent,
    ProductosMinimoExistenciaComponent,
    ClientesComprasFechaComponent,
    ValorTotalProductos2000Component,
    UltimaFechaCompraComponent,
    CrearFacturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DevExtremeModule,
    DxListModule,
    FormBuilder, 
    FormGroup, 
    Validators,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
