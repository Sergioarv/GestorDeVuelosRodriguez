import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVuelosComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateVuelosComponent;
  let fixture: ComponentFixture<CreateVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
