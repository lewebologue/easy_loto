import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

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

  it('should handle animation timing with zone coalescing', fakeAsync(() => {
    fixture.detectChanges();
    
    // Verify initial state
    expect(component.isAnimating).toBeFalsy();
    
    // Trigger animation manually to test the setTimeout behavior
    component['triggerAnimation']();
    
    // Verify isAnimating is false after triggerAnimation (before setTimeout executes)
    expect(component.isAnimating).toBeFalsy();
    
    // Flush all pending timers to execute the setTimeout(fn, 10)
    // In Angular 19, flush() handles zone scheduling properly for hybrid mode
    flush();
    
    // After flush, the setTimeout callback should have executed
    expect(component.isAnimating).toBeTruthy();
  }));

  it('should clear animation timeout on destroy', fakeAsync(() => {
    fixture.detectChanges();
    
    // Trigger animation to set the timeout
    component['triggerAnimation']();
    expect(component['animationTimeout']).toBeDefined();
    
    // Destroy the component
    component.ngOnDestroy();
    
    // Timeout should be cleared
    expect(component['animationTimeout']).toBeUndefined();
  }));
});
