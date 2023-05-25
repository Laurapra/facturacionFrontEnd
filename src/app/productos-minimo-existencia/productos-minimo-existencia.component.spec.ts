import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMinimoExistenciaComponent } from './productos-minimo-existencia.component';

describe('ProductosMinimoExistenciaComponent', () => {
  let component: ProductosMinimoExistenciaComponent;
  let fixture: ComponentFixture<ProductosMinimoExistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosMinimoExistenciaComponent]
    });
    fixture = TestBed.createComponent(ProductosMinimoExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
