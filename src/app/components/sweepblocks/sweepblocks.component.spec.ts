import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepblocksComponent } from './sweepblocks.component';

describe('SweepblocksComponent', () => {
  let component: SweepblocksComponent;
  let fixture: ComponentFixture<SweepblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweepblocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweepblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
