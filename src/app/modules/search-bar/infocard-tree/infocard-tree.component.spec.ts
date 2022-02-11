import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocardTreeComponent } from './infocard-tree.component';

describe('InfocardTreeComponent', () => {
  let component: InfocardTreeComponent;
  let fixture: ComponentFixture<InfocardTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocardTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocardTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
