import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenFormComponent } from './kitten-form.component';

describe('KittenFormComponent', () => {
  let component: KittenFormComponent;
  let fixture: ComponentFixture<KittenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
