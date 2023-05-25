import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorTotalProductos2000Component } from './valor-total-productos2000.component';

describe('ValorTotalProductos2000Component', () => {
  let component: ValorTotalProductos2000Component;
  let fixture: ComponentFixture<ValorTotalProductos2000Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorTotalProductos2000Component]
    });
    fixture = TestBed.createComponent(ValorTotalProductos2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
