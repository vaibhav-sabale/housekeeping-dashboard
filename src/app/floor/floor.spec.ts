import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor } from './floor';

describe('Floor', () => {
  let component: Floor;
  let fixture: ComponentFixture<Floor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Floor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Floor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
