import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdaptersItemComponent } from './new-adapters-item.component';

describe('NewAdaptersItemComponent', () => {
  let component: NewAdaptersItemComponent;
  let fixture: ComponentFixture<NewAdaptersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdaptersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdaptersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
