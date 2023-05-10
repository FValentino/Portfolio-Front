import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaMenuComponent } from './tecnologia-menu.component';

describe('TecnologiaMenuComponent', () => {
  let component: TecnologiaMenuComponent;
  let fixture: ComponentFixture<TecnologiaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
