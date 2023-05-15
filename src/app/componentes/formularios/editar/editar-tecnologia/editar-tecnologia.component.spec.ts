import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTecnologiaComponent } from './editar-tecnologia.component';

describe('EditarTecnologiaComponent', () => {
  let component: EditarTecnologiaComponent;
  let fixture: ComponentFixture<EditarTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTecnologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
