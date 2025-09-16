import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSchedule } from './manage-schedule';

describe('ManageSchedule', () => {
  let component: ManageSchedule;
  let fixture: ComponentFixture<ManageSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
