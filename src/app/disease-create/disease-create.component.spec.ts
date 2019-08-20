import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCreateComponent } from './disease-create.component';

describe('DiseaseCreateComponent', () => {
  let component: DiseaseCreateComponent;
  let fixture: ComponentFixture<DiseaseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
