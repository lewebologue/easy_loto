import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LotoState {
  partyNumber: number;
  partyType: string;
  lastNumber: number | null;
  selectedNumbers: number[];
}

const INITIAL_STATE: LotoState = {
  partyNumber: 0,
  partyType: '',
  lastNumber: null,
  selectedNumbers: [],
};

const CHANNEL_NAME = 'easy_loto_channel';

@Injectable({
  providedIn: 'root',
})
export class LotoStateService implements OnDestroy {
  private state: LotoState = { ...INITIAL_STATE };
  private stateSubject = new BehaviorSubject<LotoState>(this.state);
  private channel: BroadcastChannel;

  state$: Observable<LotoState> = this.stateSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.channel = new BroadcastChannel(CHANNEL_NAME);
    this.channel.onmessage = (event: MessageEvent<LotoState>) => {
      this.ngZone.run(() => {
        this.state = event.data;
        this.stateSubject.next(this.state);
      });
    };
  }

  updateParty(partyNumber: number, partyType: string): void {
    this.state = { ...this.state, partyNumber, partyType };
    this.broadcast();
  }

  startNewParty(partyNumber: number): void {
    this.state = { partyNumber, partyType: '', lastNumber: null, selectedNumbers: [] };
    this.broadcast();
  }

  updateNumbers(selectedNumbers: number[], lastNumber: number | null): void {
    this.state = { ...this.state, selectedNumbers, lastNumber };
    this.broadcast();
  }

  resetNumbers(): void {
    this.state = { ...this.state, selectedNumbers: [], lastNumber: null };
    this.broadcast();
  }

  getState(): LotoState {
    return this.state;
  }

  private broadcast(): void {
    this.stateSubject.next(this.state);
    this.channel.postMessage(this.state);
  }

  ngOnDestroy(): void {
    this.channel.close();
  }
}
