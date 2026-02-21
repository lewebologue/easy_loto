import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyComponent } from '../../components/party/party.component';
import { GridComponent } from '../../components/grid/grid.component';
import { LotoStateService } from '../../services/loto-state.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PartyComponent, GridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentPartyType: string = '';
  currentPartyNumber: number = 0;

  @ViewChild(GridComponent) gridComponent!: GridComponent;

  constructor(private lotoState: LotoStateService) {}

  onNewParty(counter: number): void {
    this.currentPartyNumber = counter;
    this.currentPartyType = '';
    this.lotoState.startNewParty(counter);
    this.gridComponent.resetGrid();
  }

  onPartyTypeChange(partyType: string): void {
    this.currentPartyType = partyType;
    this.lotoState.updateParty(this.currentPartyNumber, partyType);
  }

  onNumbersChange(event: { selectedNumbers: number[]; lastNumber: number | null }): void {
    this.lotoState.updateNumbers(event.selectedNumbers, event.lastNumber);
  }
}
