import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComprasFechaComponent } from './clientes-compras-fecha.component';

describe('ClientesComprasFechaComponent', () => {
  let component: ClientesComprasFechaComponent;
  let fixture: ComponentFixture<ClientesComprasFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesComprasFechaComponent]
    });
    fixture = TestBed.createComponent(ClientesComprasFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
