import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsListComponent } from './totals-list.component';

describe('TotalsListComponent', () => {
  let component: TotalsListComponent;
  let fixture: ComponentFixture<TotalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
