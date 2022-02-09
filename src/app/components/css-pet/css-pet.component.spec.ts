import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPetComponent } from './css-pet.component';

describe('CssPetComponent', () => {
  let component: CssPetComponent;
  let fixture: ComponentFixture<CssPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
