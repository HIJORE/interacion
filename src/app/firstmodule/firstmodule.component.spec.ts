import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmoduleComponent } from './firstmodule.component';

describe('FirstmoduleComponent', () => {
  let component: FirstmoduleComponent;
  let fixture: ComponentFixture<FirstmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
