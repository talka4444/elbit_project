import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsInformation } from './guests-information';

describe('GuestsInformation', () => {
  let component: GuestsInformation;
  let fixture: ComponentFixture<GuestsInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
