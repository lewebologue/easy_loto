import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyComponent } from './party.component';

describe('PartyComponent', () => {
  let component: PartyComponent;
  let fixture: ComponentFixture<PartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should emit newPartyEvent when newParty is called', async () => {
    await fixture.whenStable();
    
    spyOn(component.newPartyEvent, 'emit');
    spyOn(component.partyTypeChange, 'emit');
    
    component.newParty();
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.counter).toBe(1);
    expect(component.newPartyEvent.emit).toHaveBeenCalledWith(1);
    expect(component.partyTypeChange.emit).toHaveBeenCalledWith('');
  });

  it('should update party type and emit event', async () => {
    await fixture.whenStable();
    
    spyOn(component.partyTypeChange, 'emit');
    
    component.setPartyType('Loto');
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.partyType).toBe('Loto');
    expect(component.partyTypeChange.emit).toHaveBeenCalledWith('Loto');
  });

  it('should increment counter on multiple new parties', async () => {
    await fixture.whenStable();
    
    component.newParty();
    fixture.detectChanges();
    expect(component.counter).toBe(1);
    
    component.newParty();
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.counter).toBe(2);
  });
});
