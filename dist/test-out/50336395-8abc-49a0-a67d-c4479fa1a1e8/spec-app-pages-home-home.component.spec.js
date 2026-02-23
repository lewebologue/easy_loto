import {
  GridComponent,
  init_grid_component
} from "./chunk-WBAU7KAL.js";
import {
  PartyComponent,
  init_party_component
} from "./chunk-UEU36MZH.js";
import {
  LotoStateService,
  init_loto_state_service
} from "./chunk-IY3OHCLB.js";
import {
  Component,
  TestBed,
  ViewChild,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-IZAMKDET.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-O76QEXRV.js";

// angular:jit:template:src\app\pages\home\home.component.html
var home_component_default;
var init_home_component = __esm({
  "angular:jit:template:src\\app\\pages\\home\\home.component.html"() {
    home_component_default = '<div id="party_select">\r\n  <app-party (newPartyEvent)="onNewParty($event)" (partyTypeChange)="onPartyTypeChange($event)"></app-party>\r\n</div>\r\n<div id="grid">\r\n  <app-grid [partyType]="currentPartyType" (numbersChange)="onNumbersChange($event)"></app-grid>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\home\home.component.scss
var home_component_default2;
var init_home_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\home.component.scss"() {
    home_component_default2 = "/* src/app/pages/home/home.component.scss */\n/*# sourceMappingURL=home.component.css.map */\n";
  }
});

// src/app/pages/home/home.component.ts
var HomeComponent;
var init_home_component3 = __esm({
  "src/app/pages/home/home.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_component();
    init_home_component2();
    init_core();
    init_party_component();
    init_grid_component();
    init_loto_state_service();
    HomeComponent = class HomeComponent2 {
      constructor(lotoState) {
        this.lotoState = lotoState;
        this.currentPartyType = "";
        this.currentPartyNumber = 0;
      }
      onNewParty(counter) {
        this.currentPartyNumber = counter;
        this.currentPartyType = "";
        this.lotoState.startNewParty(counter);
        this.gridComponent.resetGrid();
      }
      onPartyTypeChange(partyType) {
        this.currentPartyType = partyType;
        this.lotoState.updateParty(this.currentPartyNumber, partyType);
      }
      onNumbersChange(event) {
        this.lotoState.updateNumbers(event.selectedNumbers, event.lastNumber);
      }
      static {
        this.ctorParameters = () => [
          { type: LotoStateService }
        ];
      }
      static {
        this.propDecorators = {
          gridComponent: [{ type: ViewChild, args: [GridComponent] }]
        };
      }
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home",
        imports: [PartyComponent, GridComponent],
        template: home_component_default,
        styles: [home_component_default2]
      })
    ], HomeComponent);
  }
});

// src/app/pages/home/home.component.spec.ts
var require_home_component_spec = __commonJS({
  "src/app/pages/home/home.component.spec.ts"(exports) {
    init_testing();
    init_home_component3();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component).toBeTruthy();
      }));
      it("should initialize with default values", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component.currentPartyType).toBe("");
        expect(component.currentPartyNumber).toBe(0);
      }));
      it("should handle new party event", () => __async(null, null, function* () {
        yield fixture.whenStable();
        component.onNewParty(1);
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.currentPartyNumber).toBe(1);
        expect(component.currentPartyType).toBe("");
      }));
      it("should handle party type change", () => __async(null, null, function* () {
        yield fixture.whenStable();
        component.onPartyTypeChange("Loto");
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.currentPartyType).toBe("Loto");
      }));
      it("should handle numbers change event", () => __async(null, null, function* () {
        yield fixture.whenStable();
        const event = { selectedNumbers: [1, 2, 3], lastNumber: 3 };
        component.onNumbersChange(event);
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component).toBeTruthy();
      }));
    });
  }
});
export default require_home_component_spec();
//# sourceMappingURL=spec-app-pages-home-home.component.spec.js.map
