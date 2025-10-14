import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookCard } from './bus-book-card';

describe('BusBookCard', () => {
  let component: BusBookCard;
  let fixture: ComponentFixture<BusBookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusBookCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
