import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsListItemComponent } from './totals-list-item.component';

describe('TotalsListItemComponent', () => {
  let component: TotalsListItemComponent;
  let fixture: ComponentFixture<TotalsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
