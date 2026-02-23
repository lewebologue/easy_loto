
import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-party',
    imports: [],
    templateUrl: './party.component.html',
    styleUrl: './party.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyComponent {
  counter: number = 0;
  partyType: string = '';

  @Output() newPartyEvent = new EventEmitter<number>();
  @Output() partyTypeChange = new EventEmitter<string>();

  newParty(): void {
    this.counter++;
    this.partyType = '';
    this.partyTypeChange.emit(this.partyType);
    this.newPartyEvent.emit(this.counter);
  }

  setPartyType(type: string): void {
    this.partyType = type;
    this.partyTypeChange.emit(this.partyType);
  }
}
