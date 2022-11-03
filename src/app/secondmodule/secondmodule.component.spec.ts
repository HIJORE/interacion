import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmoduleComponent } from './secondmodule.component';

describe('SecondmoduleComponent', () => {
  let component: SecondmoduleComponent;
  let fixture: ComponentFixture<SecondmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
