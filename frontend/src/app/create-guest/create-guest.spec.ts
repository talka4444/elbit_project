import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuest } from './create-guest';

describe('CreateGuest', () => {
  let component: CreateGuest;
  let fixture: ComponentFixture<CreateGuest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
