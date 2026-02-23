import {
  BehaviorSubject,
  Injectable,
  NgZone,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-IZAMKDET.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-O76QEXRV.js";

// src/app/services/loto-state.service.ts
var INITIAL_STATE, CHANNEL_NAME, LotoStateService;
var init_loto_state_service = __esm({
  "src/app/services/loto-state.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    INITIAL_STATE = {
      partyNumber: 0,
      partyType: "",
      lastNumber: null,
      selectedNumbers: []
    };
    CHANNEL_NAME = "easy_loto_channel";
    LotoStateService = class LotoStateService2 {
      constructor(ngZone) {
        this.ngZone = ngZone;
        this.state = __spreadValues({}, INITIAL_STATE);
        this.stateSubject = new BehaviorSubject(this.state);
        this.state$ = this.stateSubject.asObservable();
        this.channel = new BroadcastChannel(CHANNEL_NAME);
        this.channel.onmessage = (event) => {
          this.ngZone.run(() => {
            this.state = event.data;
            this.stateSubject.next(this.state);
          });
        };
      }
      updateParty(partyNumber, partyType) {
        this.state = __spreadProps(__spreadValues({}, this.state), { partyNumber, partyType });
        this.broadcast();
      }
      startNewParty(partyNumber) {
        this.state = { partyNumber, partyType: "", lastNumber: null, selectedNumbers: [] };
        this.broadcast();
      }
      updateNumbers(selectedNumbers, lastNumber) {
        this.state = __spreadProps(__spreadValues({}, this.state), { selectedNumbers, lastNumber });
        this.broadcast();
      }
      resetNumbers() {
        this.state = __spreadProps(__spreadValues({}, this.state), { selectedNumbers: [], lastNumber: null });
        this.broadcast();
      }
      getState() {
        return this.state;
      }
      broadcast() {
        this.stateSubject.next(this.state);
        this.channel.postMessage(this.state);
      }
      ngOnDestroy() {
        this.channel.close();
      }
      static {
        this.ctorParameters = () => [
          { type: NgZone }
        ];
      }
    };
    LotoStateService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], LotoStateService);
  }
});

export {
  LotoStateService,
  init_loto_state_service
};
//# sourceMappingURL=chunk-IY3OHCLB.js.map
