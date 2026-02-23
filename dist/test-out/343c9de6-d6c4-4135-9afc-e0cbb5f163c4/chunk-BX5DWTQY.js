import {
  LotoStateService,
  init_loto_state_service
} from "./chunk-LERPEAFT.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-7JJV64JO.js";
import {
  __esm
} from "./chunk-O76QEXRV.js";

// angular:jit:template:src\app\components\grid\grid.component.html
var grid_component_default;
var init_grid_component = __esm({
  "angular:jit:template:src\\app\\components\\grid\\grid.component.html"() {
    grid_component_default = '<div class="loto-container">\n  <div class="loto-grid">\n    @for (num of numbers; track num) {\n      <div\n        class="loto-cell"\n        [class.selected]="isSelected(num)"\n        (click)="toggleNumber(num)"\n        >\n        {{ num }}\n      </div>\n    }\n  </div>\n\n  <div class="selected-numbers">\n    @if (partyType) {\n      <h2>{{ partyType }}</h2>\n    }\n    @if (lastNumber !== null) {\n      <div class="last-number-display">\n        <p class="last-number-label">Dernier num\xE9ro :</p>\n        <div class="last-number-value">{{ lastNumber }}</div>\n      </div>\n    }\n    <h3>Num\xE9ros tir\xE9s :</h3>\n    <div class="numbers-by-dozen">\n      @for (dozen of getSelectedNumbersByDozen(); track $index) {\n        <div\n          class="dozen-column"\n          [class.has-numbers]="dozen.length > 0"\n          >\n          @for (num of dozen; track num) {\n            <span class="selected-badge">\n              {{ num }}\n            </span>\n          }\n        </div>\n      }\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src\app\components\grid\grid.component.scss
var grid_component_default2;
var init_grid_component2 = __esm({
  "angular:jit:style:src\\app\\components\\grid\\grid.component.scss"() {
    grid_component_default2 = '/* src/app/components/grid/grid.component.scss */\n.loto-container {\n  padding: 2rem;\n  display: flex;\n  gap: 5rem;\n  align-items: flex-start;\n}\n.loto-grid {\n  display: grid;\n  max-width: 55%;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n  padding: 1rem;\n  flex: 1;\n}\n.loto-cell {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #000;\n  background: #fff;\n  border: 3px solid #000;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family: "Roboto", sans-serif;\n}\n.loto-cell:hover {\n  background: #08CC0A;\n  color: white;\n}\n.loto-cell.selected {\n  background: #08CC0A;\n  color: white;\n}\n.selected-numbers {\n  min-width: 300px;\n  padding: 1.5rem;\n  background: #ffffff;\n  border: 4px solid #2c3e50;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.selected-numbers h2 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #08CC0A;\n  font-family: "Roboto", sans-serif;\n  text-align: center;\n}\n.selected-numbers h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #2c3e50;\n  font-family: "Roboto", sans-serif;\n}\n.numbers-list {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.75rem;\n}\n.selected-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 50px;\n  padding: 0.5rem;\n  background: #08CC0A;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 900;\n  border-radius: 50%;\n  box-shadow: 0 3px 8px rgba(8, 204, 10, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2);\n  font-family: "Roboto", sans-serif;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.last-number-display {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f5f5f5;\n  border-radius: 4px;\n  border-left: 4px solid #08cc0a;\n  text-align: center;\n}\n.last-number-label {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.last-number-value {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: #08cc0a;\n  font-family: "Roboto", sans-serif;\n  text-shadow: 0 2px 4px rgba(8, 204, 10, 0.3);\n}\n.numbers-by-dozen {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  overflow-y: auto;\n  align-content: flex-start;\n}\n.dozen-column {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.dozen-column.has-numbers {\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=grid.component.css.map */\n';
  }
});

// src/app/components/grid/grid.component.ts
var GridComponent;
var init_grid_component3 = __esm({
  "src/app/components/grid/grid.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_grid_component();
    init_grid_component2();
    init_core();
    init_loto_state_service();
    GridComponent = class GridComponent2 {
      constructor(lotoStateService) {
        this.lotoStateService = lotoStateService;
        this.partyType = "";
        this.numbersChange = new EventEmitter();
        this.numbers = Array.from({ length: 90 }, (_, i) => i + 1);
        this.selectedNumbers = /* @__PURE__ */ new Set();
        this.lastNumber = null;
      }
      toggleNumber(num) {
        let lastNumber;
        if (this.selectedNumbers.has(num)) {
          this.selectedNumbers.delete(num);
          const sorted2 = this.getSelectedNumbersSorted();
          lastNumber = sorted2.length > 0 ? sorted2[sorted2.length - 1] : null;
        } else {
          this.selectedNumbers.add(num);
          lastNumber = num;
        }
        const sorted = this.getSelectedNumbersSorted();
        this.lastNumber = lastNumber;
        this.numbersChange.emit({ selectedNumbers: sorted, lastNumber });
        this.lotoStateService.updateNumbers(sorted, lastNumber);
      }
      isSelected(num) {
        return this.selectedNumbers.has(num);
      }
      getSelectedNumbersSorted() {
        return Array.from(this.selectedNumbers).sort((a, b) => a - b);
      }
      getSelectedNumbersByDozen() {
        const dozens = Array.from({ length: 9 }, () => []);
        const sorted = this.getSelectedNumbersSorted();
        for (let num of sorted) {
          const dozenIndex = Math.floor((num - 1) / 10);
          dozens[dozenIndex].push(num);
        }
        return dozens;
      }
      resetGrid() {
        this.selectedNumbers.clear();
        this.lastNumber = null;
        this.numbersChange.emit({ selectedNumbers: [], lastNumber: null });
        this.lotoStateService.updateNumbers([], null);
      }
      ngOnInit() {
        this.lotoStateService.state$.subscribe((state) => {
          this.lastNumber = state.lastNumber;
        });
      }
      static {
        this.ctorParameters = () => [
          { type: LotoStateService }
        ];
      }
      static {
        this.propDecorators = {
          partyType: [{ type: Input }],
          numbersChange: [{ type: Output }]
        };
      }
    };
    GridComponent = __decorate([
      Component({
        selector: "app-grid",
        imports: [],
        template: grid_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [grid_component_default2]
      })
    ], GridComponent);
  }
});

export {
  GridComponent,
  init_grid_component3 as init_grid_component
};
//# sourceMappingURL=chunk-BX5DWTQY.js.map
