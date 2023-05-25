import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaFechaCompraComponent } from './ultima-fecha-compra.component';

describe('UltimaFechaCompraComponent', () => {
  let component: UltimaFechaCompraComponent;
  let fixture: ComponentFixture<UltimaFechaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimaFechaCompraComponent]
    });
    fixture = TestBed.createComponent(UltimaFechaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
