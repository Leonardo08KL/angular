import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorSolicitudComponent } from './proveedor-solicitud.component';

describe('ProveedorSolicitudComponent', () => {
  let component: ProveedorSolicitudComponent;
  let fixture: ComponentFixture<ProveedorSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorSolicitudComponent]
    });
    fixture = TestBed.createComponent(ProveedorSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
