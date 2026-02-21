import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() partyType: string = '';
  @Output() numbersChange = new EventEmitter<{ selectedNumbers: number[]; lastNumber: number | null }>();

  numbers: number[] = Array.from({ length: 90 }, (_, i) => i + 1);
  selectedNumbers: Set<number> = new Set();

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
    this.numbersChange.emit({ selectedNumbers: this.getSelectedNumbersSorted(), lastNumber });
  }

  isSelected(num: number): boolean {
    return this.selectedNumbers.has(num);
  }

  getSelectedNumbersSorted(): number[] {
    return Array.from(this.selectedNumbers).sort((a, b) => a - b);
  }

  resetGrid(): void {
    this.selectedNumbers.clear();
    this.numbersChange.emit({ selectedNumbers: [], lastNumber: null });
  }
}
