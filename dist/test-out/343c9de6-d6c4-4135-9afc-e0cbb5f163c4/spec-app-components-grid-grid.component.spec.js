import {
  GridComponent,
  init_grid_component
} from "./chunk-BX5DWTQY.js";
import "./chunk-LERPEAFT.js";
import {
  TestBed,
  init_testing
} from "./chunk-7JJV64JO.js";
import {
  __async,
  __commonJS
} from "./chunk-O76QEXRV.js";

// src/app/components/grid/grid.component.spec.ts
var require_grid_component_spec = __commonJS({
  "src/app/components/grid/grid.component.spec.ts"(exports) {
    init_testing();
    init_grid_component();
    describe("GridComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [GridComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(GridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component).toBeTruthy();
      }));
      it("should initialize with 90 numbers", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component.numbers.length).toBe(90);
      }));
      it("should toggle number selection and emit change", () => __async(null, null, function* () {
        yield fixture.whenStable();
        spyOn(component.numbersChange, "emit");
        component.toggleNumber(1);
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.isSelected(1)).toBeTruthy();
        expect(component.numbersChange.emit).toHaveBeenCalled();
      }));
      it("should reset grid correctly", () => __async(null, null, function* () {
        yield fixture.whenStable();
        component.toggleNumber(5);
        component.toggleNumber(15);
        fixture.detectChanges();
        expect(component.selectedNumbers.size).toBe(2);
        component.resetGrid();
        fixture.detectChanges();
        yield fixture.whenStable();
        expect(component.selectedNumbers.size).toBe(0);
        expect(component.lastNumber).toBeNull();
      }));
    });
  }
});
export default require_grid_component_spec();
//# sourceMappingURL=spec-app-components-grid-grid.component.spec.js.map
