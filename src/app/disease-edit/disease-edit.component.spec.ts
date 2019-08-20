import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseEditComponent } from './disease-edit.component';

describe('DiseaseEditComponent', () => {
  let component: DiseaseEditComponent;
  let fixture: ComponentFixture<DiseaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
