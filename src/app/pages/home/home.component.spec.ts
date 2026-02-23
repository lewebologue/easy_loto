import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', async () => {
    await fixture.whenStable();
    expect(component.currentPartyType).toBe('');
    expect(component.currentPartyNumber).toBe(0);
  });

  it('should handle new party event', async () => {
    await fixture.whenStable();
    
    // Trigger new party
    component.onNewParty(1);
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.currentPartyNumber).toBe(1);
    expect(component.currentPartyType).toBe('');
  });

  it('should handle party type change', async () => {
    await fixture.whenStable();
    
    component.onPartyTypeChange('Loto');
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.currentPartyType).toBe('Loto');
  });

  it('should handle numbers change event', async () => {
    await fixture.whenStable();
    
    const event = { selectedNumbers: [1, 2, 3], lastNumber: 3 };
    component.onNumbersChange(event);
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component).toBeTruthy();
  });
});
