import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should initialize with 90 numbers', async () => {
    await fixture.whenStable();
    expect(component.numbers.length).toBe(90);
  });

  it('should toggle number selection and emit change', async () => {
    await fixture.whenStable();
    
    spyOn(component.numbersChange, 'emit');
    
    // Toggle a number
    component.toggleNumber(1);
    fixture.detectChanges();
    await fixture.whenStable();
    
    // Verify the number is selected
    expect(component.isSelected(1)).toBeTruthy();
    expect(component.numbersChange.emit).toHaveBeenCalled();
  });

  it('should reset grid correctly', async () => {
    await fixture.whenStable();
    
    // Add some numbers
    component.toggleNumber(5);
    component.toggleNumber(15);
    fixture.detectChanges();
    
    expect(component.selectedNumbers.size).toBe(2);
    
    // Reset
    component.resetGrid();
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.selectedNumbers.size).toBe(0);
    expect(component.lastNumber).toBeNull();
  });
});
