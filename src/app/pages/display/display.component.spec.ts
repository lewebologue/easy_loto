import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should handle animation timing', fakeAsync(() => {
    fixture.detectChanges();
    tick(10);
    expect(component).toBeTruthy();
  }));
});
