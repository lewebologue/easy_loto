import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LotoStateService, LotoState } from '../../services/loto-state.service';

@Component({
    selector: 'app-display',
    imports: [CommonModule],
    templateUrl: './display.component.html',
    styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit, OnDestroy {
  state: LotoState = {
    partyNumber: 0,
    partyType: '',
    lastNumber: null,
    selectedNumbers: [],
  };

  isAnimating = false;
  isFullscreen = false;

  private subscription!: Subscription;
  private animationTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    private lotoState: LotoStateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.lotoState.state$.subscribe((newState) => {
      const numberChanged = newState.lastNumber !== this.state.lastNumber;
      this.state = newState;

      if (numberChanged && newState.lastNumber !== null) {
        this.triggerAnimation();
      }
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    clearTimeout(this.animationTimeout);
  }

  private triggerAnimation(): void {
    this.isAnimating = false;
    this.cdr.detectChanges();
    this.animationTimeout = setTimeout(() => {
      this.isAnimating = true;
      this.cdr.markForCheck();
    }, 10);
  }

  toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.isFullscreen = true;
      });
    } else {
      document.exitFullscreen().then(() => {
        this.isFullscreen = false;
      });
    }
  }

  @HostListener('document:fullscreenchange')
  onFullscreenChange(): void {
    this.isFullscreen = !!document.fullscreenElement;
  }

  getNumberDecade(num: number): string {
    if (num <= 9) return 'decade-1';
    if (num <= 19) return 'decade-2';
    if (num <= 29) return 'decade-3';
    if (num <= 39) return 'decade-4';
    if (num <= 49) return 'decade-5';
    if (num <= 59) return 'decade-6';
    if (num <= 69) return 'decade-7';
    if (num <= 79) return 'decade-8';
    return 'decade-9';
  }

  get drawnCount(): number {
    return this.state.selectedNumbers.length;
  }

  get partyLabel(): string {
    if (!this.state.partyType) return '';
    return this.state.partyType;
  }

  get hasParty(): boolean {
    return this.state.partyNumber > 0 || this.state.partyType !== '';
  }
}

