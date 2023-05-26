import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoMenuComponent } from './proyecto-menu.component';

describe('ProyectoMenuComponent', () => {
  let component: ProyectoMenuComponent;
  let fixture: ComponentFixture<ProyectoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
