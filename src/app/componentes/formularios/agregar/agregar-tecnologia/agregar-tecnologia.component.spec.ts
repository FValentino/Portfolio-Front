import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTecnologiaComponent } from './agregar-tecnologia.component';

describe('AgregarTecnologiaComponent', () => {
  let component: AgregarTecnologiaComponent;
  let fixture: ComponentFixture<AgregarTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTecnologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
