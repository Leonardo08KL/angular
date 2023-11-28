import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDetalleComponent } from './proveedor-detalle.component';

describe('ProveedorDetalleComponent', () => {
  let component: ProveedorDetalleComponent;
  let fixture: ComponentFixture<ProveedorDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorDetalleComponent]
    });
    fixture = TestBed.createComponent(ProveedorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
