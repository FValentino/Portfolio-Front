import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEducacionComponent } from './vista-educacion.component';

describe('VistaEducacionComponent', () => {
  let component: VistaEducacionComponent;
  let fixture: ComponentFixture<VistaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
