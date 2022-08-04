import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChangeDetectComponent } from './parent-change-detect.component';

describe('ParentChangeDetectComponent', () => {
  let component: ParentChangeDetectComponent;
  let fixture: ComponentFixture<ParentChangeDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChangeDetectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChangeDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
