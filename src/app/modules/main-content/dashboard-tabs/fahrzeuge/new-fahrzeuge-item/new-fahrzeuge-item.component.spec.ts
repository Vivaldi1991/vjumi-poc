import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFahrzeugeItemComponent } from './new-fahrzeuge-item.component';

describe('NewFahrzeugeItemComponent', () => {
  let component: NewFahrzeugeItemComponent;
  let fixture: ComponentFixture<NewFahrzeugeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFahrzeugeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFahrzeugeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
