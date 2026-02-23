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
    component.newParty();
    expect(component.newPartyEvent.emit).toHaveBeenCalledWith(1);
  });
});
