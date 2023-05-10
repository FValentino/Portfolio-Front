import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionMenuComponent } from './educacion-menu.component';

describe('EducacionMenuComponent', () => {
  let component: EducacionMenuComponent;
  let fixture: ComponentFixture<EducacionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
