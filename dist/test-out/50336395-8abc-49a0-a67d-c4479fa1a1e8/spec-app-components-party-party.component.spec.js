import {
  PartyComponent,
  init_party_component
} from "./chunk-UEU36MZH.js";
import {
  TestBed,
  init_testing
} from "./chunk-IZAMKDET.js";
import {
  __async,
  __commonJS
} from "./chunk-O76QEXRV.js";

// src/app/components/party/party.component.spec.ts
var require_party_component_spec = __commonJS({
  "src/app/components/party/party.component.spec.ts"(exports) {
    init_testing();
    init_party_component();
    describe("PartyComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PartyComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PartyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component).toBeTruthy();
      }));
      it("should emit newPartyEvent when newParty is called", () => __async(null, null, function* () {
        yield fixture.whenStable();
        spyOn(component.newPartyEvent, "emit");
        spyOn(component.partyTypeChange, "emit");
        component.newParty();
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.counter).toBe(1);
        expect(component.newPartyEvent.emit).toHaveBeenCalledWith(1);
        expect(component.partyTypeChange.emit).toHaveBeenCalledWith("");
      }));
      it("should update party type and emit event", () => __async(null, null, function* () {
        yield fixture.whenStable();
        spyOn(component.partyTypeChange, "emit");
        component.setPartyType("Loto");
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.partyType).toBe("Loto");
        expect(component.partyTypeChange.emit).toHaveBeenCalledWith("Loto");
      }));
      it("should increment counter on multiple new parties", () => __async(null, null, function* () {
        yield fixture.whenStable();
        component.newParty();
        fixture.detectChanges();
        expect(component.counter).toBe(1);
        component.newParty();
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.counter).toBe(2);
      }));
    });
  }
});
export default require_party_component_spec();
//# sourceMappingURL=spec-app-components-party-party.component.spec.js.map
