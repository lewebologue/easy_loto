import {
  Component,
  EventEmitter,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-IZAMKDET.js";
import {
  __esm
} from "./chunk-O76QEXRV.js";

// angular:jit:template:src\app\components\party\party.component.html
var party_component_default;
var init_party_component = __esm({
  "angular:jit:template:src\\app\\components\\party\\party.component.html"() {
    party_component_default = `<nav class="party-nav">\r
  <button class="party-btn" (click)="newParty()">\r
    Nouvelle partie\r
    @if (counter > 0) {\r
      <span class="counter">{{ counter }}</span>\r
    }\r
  </button>\r
  <button \r
    class="party-btn" \r
    [class.active]="partyType === 'QUINE SIMPLE'"\r
    (click)="setPartyType('QUINE SIMPLE')">\r
    Quine simple\r
  </button>\r
  <button \r
    class="party-btn" \r
    [class.active]="partyType === 'DOUBLE QUINE'"\r
    (click)="setPartyType('DOUBLE QUINE')">\r
    Double Quine\r
  </button>\r
  <button \r
    class="party-btn" \r
    [class.active]="partyType === 'CARTON PLEIN'"\r
    (click)="setPartyType('CARTON PLEIN')">\r
    Carton plein\r
  </button>\r
</nav>\r
`;
  }
});

// angular:jit:style:src\app\components\party\party.component.scss
var party_component_default2;
var init_party_component2 = __esm({
  "angular:jit:style:src\\app\\components\\party\\party.component.scss"() {
    party_component_default2 = "/* src/app/components/party/party.component.scss */\n.party-nav {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: fit-content;\n  justify-content: center;\n}\n.party-btn {\n  position: relative;\n  padding: 0.875rem 1.75rem;\n  background: #08CC0A;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(8, 204, 10, 0.2);\n}\n.party-btn:hover {\n  background: #07b309;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(8, 204, 10, 0.3);\n}\n.party-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(8, 204, 10, 0.2);\n}\n.party-btn.active {\n  background: #06a008;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.party-btn .counter {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #ff4444;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  min-width: 24px;\n  text-align: center;\n}\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=party.component.css.map */\n";
  }
});

// src/app/components/party/party.component.ts
var PartyComponent;
var init_party_component3 = __esm({
  "src/app/components/party/party.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_party_component();
    init_party_component2();
    init_core();
    PartyComponent = class PartyComponent2 {
      constructor() {
        this.counter = 0;
        this.partyType = "";
        this.newPartyEvent = new EventEmitter();
        this.partyTypeChange = new EventEmitter();
      }
      newParty() {
        this.counter++;
        this.partyType = "";
        this.partyTypeChange.emit(this.partyType);
        this.newPartyEvent.emit(this.counter);
      }
      setPartyType(type) {
        this.partyType = type;
        this.partyTypeChange.emit(this.partyType);
      }
      static {
        this.propDecorators = {
          newPartyEvent: [{ type: Output }],
          partyTypeChange: [{ type: Output }]
        };
      }
    };
    PartyComponent = __decorate([
      Component({
        selector: "app-party",
        imports: [],
        template: party_component_default,
        styles: [party_component_default2]
      })
    ], PartyComponent);
  }
});

export {
  PartyComponent,
  init_party_component3 as init_party_component
};
//# sourceMappingURL=chunk-UEU36MZH.js.map
