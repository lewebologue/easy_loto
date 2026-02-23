import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LotoStateService } from '../../services/loto-state.service';

@Component({
    selector: 'app-grid',
    imports: [],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @Input() partyType: string = '';
  @Output() numbersChange = new EventEmitter<{ selectedNumbers: number[]; lastNumber: number | null }>();

  numbers: number[] = Array.from({ length: 90 }, (_, i) => i + 1);
  selectedNumbers: Set<number> = new Set();
  lastNumber: number | null = null;

  constructor(private lotoStateService: LotoStateService) {}

  toggleNumber(num: number): void {
    let lastNumber: number | null;
    if (this.selectedNumbers.has(num)) {
      this.selectedNumbers.delete(num);
      const sorted = this.getSelectedNumbersSorted();
      lastNumber = sorted.length > 0 ? sorted[sorted.length - 1] : null;
    } else {
      this.selectedNumbers.add(num);
      lastNumber = num;
    }
    const sorted = this.getSelectedNumbersSorted();
    this.lastNumber = lastNumber;
    this.numbersChange.emit({ selectedNumbers: sorted, lastNumber });
    this.lotoStateService.updateNumbers(sorted, lastNumber);
  }

  isSelected(num: number): boolean {
    return this.selectedNumbers.has(num);
  }

  getSelectedNumbersSorted(): number[] {
    return Array.from(this.selectedNumbers).sort((a, b) => a - b);
  }

  getSelectedNumbersByDozen(): number[][] {
    const dozens: number[][] = Array.from({ length: 9 }, () => []);
    const sorted = this.getSelectedNumbersSorted();
    
    for (let num of sorted) {
      const dozenIndex = Math.floor((num - 1) / 10);
      dozens[dozenIndex].push(num);
    }
    
    return dozens;
  }

  resetGrid(): void {
    this.selectedNumbers.clear();
    this.lastNumber = null;
    this.numbersChange.emit({ selectedNumbers: [], lastNumber: null });
    this.lotoStateService.updateNumbers([], null);
  }

  ngOnInit(): void {
    this.lotoStateService.state$.subscribe(state => {
      this.lastNumber = state.lastNumber;
    });
  }
}
