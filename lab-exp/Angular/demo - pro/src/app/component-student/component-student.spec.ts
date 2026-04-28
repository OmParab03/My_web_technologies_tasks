import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStudent } from './component-student';

describe('ComponentStudent', () => {
  let component: ComponentStudent;
  let fixture: ComponentFixture<ComponentStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
