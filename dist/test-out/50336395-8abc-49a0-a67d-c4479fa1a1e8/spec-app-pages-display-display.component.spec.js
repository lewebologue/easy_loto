import {
  LotoStateService,
  init_loto_state_service
} from "./chunk-IY3OHCLB.js";
import {
  CommonModule,
  init_common
} from "./chunk-LJE6WZTT.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  TestBed,
  __decorate,
  fakeAsync,
  flush,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-IZAMKDET.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-O76QEXRV.js";

// angular:jit:template:src\app\pages\display\display.component.html
var display_component_default;
var init_display_component = __esm({
  "angular:jit:template:src\\app\\pages\\display\\display.component.html"() {
    display_component_default = `<div class="display-wrapper">\r
  <header class="top-bar">\r
    <div class="party-info">\r
      @if (hasParty) {\r
        <div class="party-badge-group">\r
          <span class="party-badge">\r
            <span class="party-badge__label">Partie</span>\r
            <span class="party-badge__number">{{ state.partyNumber }}</span>\r
          </span>\r
          @if (partyLabel) {\r
            <span class="party-type">{{ partyLabel }}</span>\r
          }\r
        </div>\r
      } @else {\r
        <span class="party-waiting">En attente d'une nouvelle partie\u2026</span>\r
      }\r
    </div>\r
\r
    <div class="top-actions">\r
      @if (drawnCount > 0) {\r
        <div class="drawn-counter">\r
          <span class="drawn-counter__value">{{ drawnCount }}</span>\r
          <span class="drawn-counter__sep">/</span>\r
          <span class="drawn-counter__total">90</span>\r
        </div>\r
      }\r
      <button class="fullscreen-btn" (click)="toggleFullscreen()" [title]="isFullscreen ? 'Quitter le plein \xE9cran' : 'Plein \xE9cran'">\r
        @if (!isFullscreen) {\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
            <polyline points="15 3 21 3 21 9"></polyline>\r
            <polyline points="9 21 3 21 3 15"></polyline>\r
            <line x1="21" y1="3" x2="14" y2="10"></line>\r
            <line x1="3" y1="21" x2="10" y2="14"></line>\r
          </svg>\r
        } @else {\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
            <polyline points="8 3 3 3 3 8"></polyline>\r
            <polyline points="21 8 21 3 16 3"></polyline>\r
            <polyline points="3 16 3 21 8 21"></polyline>\r
            <polyline points="16 21 21 21 21 16"></polyline>\r
          </svg>\r
        }\r
      </button>\r
    </div>\r
  </header>\r
\r
  <!-- Main number display -->\r
  <main class="main-display">\r
    @if (state.lastNumber !== null) {\r
      <div class="number-stage" [class.animating]="isAnimating">\r
        <div class="number-ring outer"></div>\r
        <div class="number-ring inner"></div>\r
        <div class="number-card" [ngClass]="getNumberDecade(state.lastNumber)">\r
          <span class="current-number">{{ state.lastNumber }}</span>\r
        </div>\r
        <span class="number-sublabel">Dernier tirage</span>\r
      </div>\r
    } @else {\r
      <div class="placeholder">\r
        <div class="placeholder-orb"></div>\r
        <p>Aucun num\xE9ro tir\xE9</p>\r
        <p class="placeholder-hint">S\xE9lectionnez un num\xE9ro dans la grille</p>\r
      </div>\r
    }\r
  </main>\r
\r
  <!-- History -->\r
  <footer class="history" [class.visible]="drawnCount > 0">\r
    <div class="history-header">\r
      <span class="history-title">Historique des tirages</span>\r
    </div>\r
    <div class="history-numbers">\r
      @for (num of state.selectedNumbers; track num) {\r
        <span class="hist-chip" [ngClass]="getNumberDecade(num)" [class.hist-chip--latest]="num === state.lastNumber">\r
          {{ num }}\r
        </span>\r
      }\r
    </div>\r
  </footer>\r
\r
</div>\r
\r
`;
  }
});

// angular:jit:style:src\app\pages\display\display.component.scss
var display_component_default2;
var init_display_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\display\\display.component.scss"() {
    display_component_default2 = '/* src/app/pages/display/display.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  width: 100vw;\n  background: #000000;\n  overflow: hidden;\n}\n.display-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: #000000;\n  color: #ffffff;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n}\n.top-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.4rem 2.5rem;\n  background: #141414;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.18);\n  flex-shrink: 0;\n  z-index: 10;\n}\n.party-badge-group {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.party-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(8, 204, 10, 0.22);\n  border: 2px solid #08cc0a;\n  border-radius: 999px;\n  padding: 0.5rem 1.2rem;\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n.party-badge__label {\n  color: #b0b0b0;\n  font-weight: 500;\n}\n.party-badge__number {\n  color: #08cc0a;\n  font-size: 1.6rem;\n  font-weight: 900;\n}\n.party-type {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1.2rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.party-waiting {\n  font-size: 1.3rem;\n  color: #b0b0b0;\n  font-style: italic;\n}\n.top-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.drawn-counter {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n  font-weight: 700;\n}\n.drawn-counter__value {\n  font-size: 2.8rem;\n  color: #08cc0a;\n  font-weight: 900;\n  text-shadow: 0 0 20px rgba(8, 204, 10, 0.6);\n}\n.drawn-counter__sep {\n  font-size: 1.8rem;\n  color: #b0b0b0;\n}\n.drawn-counter__total {\n  font-size: 1.8rem;\n  color: #b0b0b0;\n}\n.fullscreen-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.6rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  color: #b0b0b0;\n  cursor: pointer;\n  transition:\n    background 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease;\n}\n.fullscreen-btn svg {\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.fullscreen-btn:hover {\n  background: rgba(8, 204, 10, 0.22);\n  border-color: #08cc0a;\n  color: #08cc0a;\n}\n.main-display {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.main-display::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 65% 55% at 50% 50%,\n      rgba(8, 204, 10, 0.12),\n      transparent 70%);\n  pointer-events: none;\n}\n.number-stage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n.number-ring {\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  pointer-events: none;\n}\n.number-ring.outer {\n  width: clamp(280px, 40vmin, 520px);\n  height: clamp(280px, 40vmin, 520px);\n  border-top-color: rgba(8, 204, 10, 0.65);\n  border-right-color: rgba(8, 204, 10, 0.3);\n  animation: spin-cw 6s linear infinite;\n}\n.number-ring.inner {\n  width: clamp(240px, 35vmin, 450px);\n  height: clamp(240px, 35vmin, 450px);\n  border-bottom-color: rgba(8, 204, 10, 0.5);\n  border-left-color: rgba(8, 204, 10, 0.2);\n  animation: spin-ccw 4s linear infinite;\n}\n.number-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: clamp(200px, 28vmin, 380px);\n  height: clamp(200px, 28vmin, 380px);\n  border-radius: 50%;\n  background: #141414;\n  border: 5px solid #08cc0a;\n  box-shadow:\n    0 0 60px rgba(8, 204, 10, 0.5),\n    0 0 120px rgba(8, 204, 10, 0.2),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-1 {\n  border-color: #08cc0a;\n  box-shadow:\n    0 0 60px rgba(8, 204, 10, 0.55),\n    0 0 120px rgba(8, 204, 10, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-2 {\n  border-color: #00b4d8;\n  box-shadow:\n    0 0 60px rgba(0, 180, 216, 0.55),\n    0 0 120px rgba(0, 180, 216, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-3 {\n  border-color: #e040fb;\n  box-shadow:\n    0 0 60px rgba(224, 64, 251, 0.55),\n    0 0 120px rgba(224, 64, 251, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-4 {\n  border-color: #ff9800;\n  box-shadow:\n    0 0 60px rgba(255, 152, 0, 0.55),\n    0 0 120px rgba(255, 152, 0, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-5 {\n  border-color: #f44336;\n  box-shadow:\n    0 0 60px rgba(244, 67, 54, 0.55),\n    0 0 120px rgba(244, 67, 54, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-6 {\n  border-color: #26c6da;\n  box-shadow:\n    0 0 60px rgba(38, 198, 218, 0.55),\n    0 0 120px rgba(38, 198, 218, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-7 {\n  border-color: #ffeb3b;\n  box-shadow:\n    0 0 60px rgba(255, 235, 59, 0.55),\n    0 0 120px rgba(255, 235, 59, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-8 {\n  border-color: #ab47bc;\n  box-shadow:\n    0 0 60px rgba(171, 71, 188, 0.55),\n    0 0 120px rgba(171, 71, 188, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.number-card.decade-9 {\n  border-color: #78909c;\n  box-shadow:\n    0 0 60px rgba(120, 144, 156, 0.55),\n    0 0 120px rgba(120, 144, 156, 0.22),\n    inset 0 0 40px rgba(0, 0, 0, 0.5);\n}\n.current-number {\n  font-size: clamp(5rem, 15vmin, 13rem);\n  font-weight: 900;\n  color: #08cc0a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  font-variant-numeric: tabular-nums;\n  text-shadow: 0 0 40px rgba(8, 204, 10, 0.7);\n}\n.number-card.decade-1 .current-number {\n  color: #08cc0a;\n  text-shadow: 0 0 40px rgba(8, 204, 10, 0.75);\n}\n.number-card.decade-2 .current-number {\n  color: #00b4d8;\n  text-shadow: 0 0 40px rgba(0, 180, 216, 0.75);\n}\n.number-card.decade-3 .current-number {\n  color: #e040fb;\n  text-shadow: 0 0 40px rgba(224, 64, 251, 0.75);\n}\n.number-card.decade-4 .current-number {\n  color: #ff9800;\n  text-shadow: 0 0 40px rgba(255, 152, 0, 0.75);\n}\n.number-card.decade-5 .current-number {\n  color: #f44336;\n  text-shadow: 0 0 40px rgba(244, 67, 54, 0.75);\n}\n.number-card.decade-6 .current-number {\n  color: #26c6da;\n  text-shadow: 0 0 40px rgba(38, 198, 218, 0.75);\n}\n.number-card.decade-7 .current-number {\n  color: #ffeb3b;\n  text-shadow: 0 0 40px rgba(255, 235, 59, 0.75);\n}\n.number-card.decade-8 .current-number {\n  color: #ab47bc;\n  text-shadow: 0 0 40px rgba(171, 71, 188, 0.75);\n}\n.number-card.decade-9 .current-number {\n  color: #78909c;\n  text-shadow: 0 0 40px rgba(120, 144, 156, 0.75);\n}\n.number-sublabel {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #b0b0b0;\n}\n.number-stage.animating .number-card {\n  animation: number-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.number-stage.animating .number-ring.outer {\n  animation: spin-cw 6s linear infinite, ring-pulse 0.6s ease-out;\n}\n.number-stage.animating .number-ring.inner {\n  animation: spin-ccw 4s linear infinite, ring-pulse 0.6s ease-out 0.1s;\n}\n@keyframes number-pop {\n  0% {\n    transform: scale(0.4) rotate(-8deg);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.08) rotate(2deg);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes ring-pulse {\n  0% {\n    opacity: 0.2;\n    transform: scale(0.85);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.06);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes spin-cw {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin-ccw {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n.placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  color: #b0b0b0;\n  animation: fade-in 0.5s ease;\n}\n.placeholder p {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: #ffffff;\n}\n.placeholder .placeholder-hint {\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: #b0b0b0;\n  opacity: 0.85;\n}\n.placeholder-orb {\n  width: clamp(150px, 22vmin, 260px);\n  height: clamp(150px, 22vmin, 260px);\n  border-radius: 50%;\n  border: 3px dashed rgba(8, 204, 10, 0.55);\n  background:\n    radial-gradient(\n      circle,\n      rgba(8, 204, 10, 0.06),\n      transparent);\n  animation: orb-pulse 3s ease-in-out infinite;\n}\n@keyframes orb-pulse {\n  0%, 100% {\n    transform: scale(1);\n    border-color: rgba(8, 204, 10, 0.45);\n  }\n  50% {\n    transform: scale(1.05);\n    border-color: rgba(8, 204, 10, 0.85);\n  }\n}\n.history {\n  flex-shrink: 0;\n  background: #141414;\n  border-top: 2px solid rgba(255, 255, 255, 0.18);\n  padding: 1rem 2.5rem 1.25rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n}\n.history.visible {\n  max-height: 220px;\n}\n.history-header {\n  margin-bottom: 0.75rem;\n}\n.history-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #b0b0b0;\n}\n.history-numbers {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  max-height: 130px;\n  overflow-y: auto;\n}\n.history-numbers::-webkit-scrollbar {\n  height: 4px;\n}\n.history-numbers::-webkit-scrollbar-track {\n  background: transparent;\n}\n.history-numbers::-webkit-scrollbar-thumb {\n  background: rgba(8, 204, 10, 0.45);\n  border-radius: 999px;\n}\n.hist-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.8rem;\n  height: 2.8rem;\n  padding: 0 0.6rem;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  font-weight: 800;\n  background: #222222;\n  border: 2px solid rgba(255, 255, 255, 0.12);\n  color: #b0b0b0;\n  transition: all 0.2s ease;\n  font-variant-numeric: tabular-nums;\n}\n.hist-chip.decade-1 {\n  border-color: rgba(8, 204, 10, 0.6);\n  color: #08cc0a;\n}\n.hist-chip.decade-2 {\n  border-color: rgba(0, 180, 216, 0.6);\n  color: #00b4d8;\n}\n.hist-chip.decade-3 {\n  border-color: rgba(224, 64, 251, 0.6);\n  color: #e040fb;\n}\n.hist-chip.decade-4 {\n  border-color: rgba(255, 152, 0, 0.6);\n  color: #ff9800;\n}\n.hist-chip.decade-5 {\n  border-color: rgba(244, 67, 54, 0.6);\n  color: #f44336;\n}\n.hist-chip.decade-6 {\n  border-color: rgba(38, 198, 218, 0.6);\n  color: #26c6da;\n}\n.hist-chip.decade-7 {\n  border-color: rgba(255, 235, 59, 0.6);\n  color: #ffeb3b;\n}\n.hist-chip.decade-8 {\n  border-color: rgba(171, 71, 188, 0.6);\n  color: #ab47bc;\n}\n.hist-chip.decade-9 {\n  border-color: rgba(120, 144, 156, 0.6);\n  color: #78909c;\n}\n.hist-chip--latest {\n  transform: scale(1.2);\n  box-shadow: 0 0 16px rgba(8, 204, 10, 0.6);\n  border-color: #08cc0a !important;\n  color: #08cc0a !important;\n  background: rgba(8, 204, 10, 0.15);\n  animation: chip-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes chip-pop {\n  0% {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host {\n  display: block;\n  height: 100vh;\n  width: 100vw;\n  background: #000000;\n  overflow: hidden;\n}\n.display-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: #000000;\n  color: #ffffff;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n}\n.top-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  background: #141414;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 10;\n}\n.party-badge-group {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.party-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: rgba(8, 204, 10, 0.22);\n  border: 1px solid #08cc0a;\n  border-radius: 999px;\n  padding: 0.3rem 0.85rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.party-badge__label {\n  color: #b0b0b0;\n  font-weight: 400;\n}\n.party-badge__number {\n  color: #08cc0a;\n  font-size: 1.1rem;\n}\n.party-type {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.3rem 0.9rem;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.party-waiting {\n  font-size: 0.9rem;\n  color: #b0b0b0;\n  font-style: italic;\n}\n.top-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.drawn-counter {\n  display: flex;\n  align-items: baseline;\n  gap: 0.2rem;\n  font-weight: 700;\n}\n.drawn-counter__value {\n  font-size: 1.5rem;\n  color: #08cc0a;\n}\n.drawn-counter__sep {\n  font-size: 1rem;\n  color: #b0b0b0;\n}\n.drawn-counter__total {\n  font-size: 1rem;\n  color: #b0b0b0;\n}\n.fullscreen-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #b0b0b0;\n  cursor: pointer;\n  transition:\n    background 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease;\n}\n.fullscreen-btn svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.fullscreen-btn:hover {\n  background: rgba(8, 204, 10, 0.22);\n  border-color: #08cc0a;\n  color: #08cc0a;\n}\n.main-display {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.main-display::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 60% 50% at 50% 50%,\n      rgba(8, 204, 10, 0.05),\n      transparent 70%);\n  pointer-events: none;\n}\n.number-stage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n}\n.number-ring {\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  pointer-events: none;\n}\n.number-ring.outer {\n  width: clamp(220px, 30vmin, 380px);\n  height: clamp(220px, 30vmin, 380px);\n  border-top-color: rgba(8, 204, 10, 0.3);\n  border-right-color: rgba(8, 204, 10, 0.1);\n  animation: spin-cw 6s linear infinite;\n}\n.number-ring.inner {\n  width: clamp(190px, 26vmin, 330px);\n  height: clamp(190px, 26vmin, 330px);\n  border-bottom-color: rgba(8, 204, 10, 0.2);\n  border-left-color: rgba(8, 204, 10, 0.08);\n  animation: spin-ccw 4s linear infinite;\n}\n.number-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: clamp(160px, 22vmin, 280px);\n  height: clamp(160px, 22vmin, 280px);\n  border-radius: 50%;\n  background: #141414;\n  border: 3px solid #08cc0a;\n  box-shadow:\n    0 0 40px rgba(8, 204, 10, 0.2),\n    0 0 80px rgba(8, 204, 10, 0.08),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-1 {\n  border-color: #08cc0a;\n  box-shadow:\n    0 0 40px rgba(8, 204, 10, 0.3),\n    0 0 80px rgba(8, 204, 10, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-2 {\n  border-color: #00b4d8;\n  box-shadow:\n    0 0 40px rgba(0, 180, 216, 0.3),\n    0 0 80px rgba(0, 180, 216, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-3 {\n  border-color: #e040fb;\n  box-shadow:\n    0 0 40px rgba(224, 64, 251, 0.3),\n    0 0 80px rgba(224, 64, 251, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-4 {\n  border-color: #ff9800;\n  box-shadow:\n    0 0 40px rgba(255, 152, 0, 0.3),\n    0 0 80px rgba(255, 152, 0, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-5 {\n  border-color: #f44336;\n  box-shadow:\n    0 0 40px rgba(244, 67, 54, 0.3),\n    0 0 80px rgba(244, 67, 54, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-6 {\n  border-color: #26c6da;\n  box-shadow:\n    0 0 40px rgba(38, 198, 218, 0.3),\n    0 0 80px rgba(38, 198, 218, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-7 {\n  border-color: #ffeb3b;\n  box-shadow:\n    0 0 40px rgba(255, 235, 59, 0.3),\n    0 0 80px rgba(255, 235, 59, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-8 {\n  border-color: #ab47bc;\n  box-shadow:\n    0 0 40px rgba(171, 71, 188, 0.3),\n    0 0 80px rgba(171, 71, 188, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.number-card.decade-9 {\n  border-color: #78909c;\n  box-shadow:\n    0 0 40px rgba(120, 144, 156, 0.3),\n    0 0 80px rgba(120, 144, 156, 0.1),\n    inset 0 0 30px rgba(0, 0, 0, 0.4);\n}\n.current-number {\n  font-size: clamp(4rem, 12vmin, 9rem);\n  font-weight: 900;\n  color: #08cc0a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  font-variant-numeric: tabular-nums;\n}\n.number-card.decade-1 .current-number {\n  color: #08cc0a;\n  text-shadow: 0 0 30px rgba(8, 204, 10, 0.5);\n}\n.number-card.decade-2 .current-number {\n  color: #00b4d8;\n  text-shadow: 0 0 30px rgba(0, 180, 216, 0.5);\n}\n.number-card.decade-3 .current-number {\n  color: #e040fb;\n  text-shadow: 0 0 30px rgba(224, 64, 251, 0.5);\n}\n.number-card.decade-4 .current-number {\n  color: #ff9800;\n  text-shadow: 0 0 30px rgba(255, 152, 0, 0.5);\n}\n.number-card.decade-5 .current-number {\n  color: #f44336;\n  text-shadow: 0 0 30px rgba(244, 67, 54, 0.5);\n}\n.number-card.decade-6 .current-number {\n  color: #26c6da;\n  text-shadow: 0 0 30px rgba(38, 198, 218, 0.5);\n}\n.number-card.decade-7 .current-number {\n  color: #ffeb3b;\n  text-shadow: 0 0 30px rgba(255, 235, 59, 0.5);\n}\n.number-card.decade-8 .current-number {\n  color: #ab47bc;\n  text-shadow: 0 0 30px rgba(171, 71, 188, 0.5);\n}\n.number-card.decade-9 .current-number {\n  color: #78909c;\n  text-shadow: 0 0 30px rgba(120, 144, 156, 0.5);\n}\n.number-sublabel {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #b0b0b0;\n}\n.number-stage.animating .number-card {\n  animation: number-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.number-stage.animating .number-ring.outer {\n  animation: spin-cw 6s linear infinite, ring-pulse 0.6s ease-out;\n}\n.number-stage.animating .number-ring.inner {\n  animation: spin-ccw 4s linear infinite, ring-pulse 0.6s ease-out 0.1s;\n}\n@keyframes number-pop {\n  0% {\n    transform: scale(0.4) rotate(-8deg);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.08) rotate(2deg);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes ring-pulse {\n  0% {\n    opacity: 0.2;\n    transform: scale(0.85);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.06);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes spin-cw {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin-ccw {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n.placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  color: #b0b0b0;\n  animation: fade-in 0.5s ease;\n}\n.placeholder p {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.placeholder .placeholder-hint {\n  font-size: 0.8rem;\n  opacity: 0.6;\n}\n.placeholder-orb {\n  width: clamp(120px, 18vmin, 200px);\n  height: clamp(120px, 18vmin, 200px);\n  border-radius: 50%;\n  border: 2px dashed rgba(8, 204, 10, 0.25);\n  background:\n    radial-gradient(\n      circle,\n      rgba(8, 204, 10, 0.03),\n      transparent);\n  animation: orb-pulse 3s ease-in-out infinite;\n}\n@keyframes orb-pulse {\n  0%, 100% {\n    transform: scale(1);\n    border-color: rgba(8, 204, 10, 0.2);\n  }\n  50% {\n    transform: scale(1.05);\n    border-color: rgba(8, 204, 10, 0.5);\n  }\n}\n.history {\n  flex-shrink: 0;\n  background: #141414;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 1rem 1.5rem 1.25rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n}\n.history.visible {\n  max-height: 240px;\n}\n.history-header {\n  margin-bottom: 0.6rem;\n}\n.history-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #b0b0b0;\n}\n.history-numbers {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  max-height: 160px;\n  overflow-y: auto;\n}\n.history-numbers::-webkit-scrollbar {\n  height: 3px;\n}\n.history-numbers::-webkit-scrollbar-track {\n  background: transparent;\n}\n.history-numbers::-webkit-scrollbar-thumb {\n  background: rgba(8, 204, 10, 0.3);\n  border-radius: 999px;\n}\n.hist-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.4rem;\n  height: 2.4rem;\n  padding: 0 0.5rem;\n  border-radius: 0.4rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  background: #222222;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #b0b0b0;\n  transition: all 0.2s ease;\n  font-variant-numeric: tabular-nums;\n}\n.hist-chip.decade-1 {\n  border-color: rgba(8, 204, 10, 0.35);\n  color: #08cc0a;\n}\n.hist-chip.decade-2 {\n  border-color: rgba(0, 180, 216, 0.35);\n  color: #00b4d8;\n}\n.hist-chip.decade-3 {\n  border-color: rgba(224, 64, 251, 0.35);\n  color: #e040fb;\n}\n.hist-chip.decade-4 {\n  border-color: rgba(255, 152, 0, 0.35);\n  color: #ff9800;\n}\n.hist-chip.decade-5 {\n  border-color: rgba(244, 67, 54, 0.35);\n  color: #f44336;\n}\n.hist-chip.decade-6 {\n  border-color: rgba(38, 198, 218, 0.35);\n  color: #26c6da;\n}\n.hist-chip.decade-7 {\n  border-color: rgba(255, 235, 59, 0.35);\n  color: #ffeb3b;\n}\n.hist-chip.decade-8 {\n  border-color: rgba(171, 71, 188, 0.35);\n  color: #ab47bc;\n}\n.hist-chip.decade-9 {\n  border-color: rgba(120, 144, 156, 0.35);\n  color: #78909c;\n}\n.hist-chip--latest {\n  transform: scale(1.15);\n  box-shadow: 0 0 10px rgba(8, 204, 10, 0.4);\n  border-color: #08cc0a !important;\n  color: #08cc0a !important;\n  background: rgba(8, 204, 10, 0.12);\n  animation: chip-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes chip-pop {\n  0% {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 1;\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=display.component.css.map */\n';
  }
});

// src/app/pages/display/display.component.ts
var DisplayComponent;
var init_display_component3 = __esm({
  "src/app/pages/display/display.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_display_component();
    init_display_component2();
    init_core();
    init_common();
    init_loto_state_service();
    DisplayComponent = class DisplayComponent2 {
      constructor(lotoState, cdr) {
        this.lotoState = lotoState;
        this.cdr = cdr;
        this.state = {
          partyNumber: 0,
          partyType: "",
          lastNumber: null,
          selectedNumbers: []
        };
        this.isAnimating = false;
        this.isFullscreen = false;
      }
      ngOnInit() {
        this.subscription = this.lotoState.state$.subscribe((newState) => {
          const numberChanged = newState.lastNumber !== this.state.lastNumber;
          this.state = newState;
          if (numberChanged && newState.lastNumber !== null) {
            this.triggerAnimation();
          }
          this.cdr.markForCheck();
        });
      }
      ngOnDestroy() {
        this.subscription?.unsubscribe();
        clearTimeout(this.animationTimeout);
      }
      triggerAnimation() {
        this.isAnimating = false;
        this.cdr.detectChanges();
        this.animationTimeout = setTimeout(() => {
          this.isAnimating = true;
          this.cdr.markForCheck();
        }, 10);
      }
      toggleFullscreen() {
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
      onFullscreenChange() {
        this.isFullscreen = !!document.fullscreenElement;
      }
      getNumberDecade(num) {
        if (num <= 9)
          return "decade-1";
        if (num <= 19)
          return "decade-2";
        if (num <= 29)
          return "decade-3";
        if (num <= 39)
          return "decade-4";
        if (num <= 49)
          return "decade-5";
        if (num <= 59)
          return "decade-6";
        if (num <= 69)
          return "decade-7";
        if (num <= 79)
          return "decade-8";
        return "decade-9";
      }
      get drawnCount() {
        return this.state.selectedNumbers.length;
      }
      get partyLabel() {
        if (!this.state.partyType)
          return "";
        return this.state.partyType;
      }
      get hasParty() {
        return this.state.partyNumber > 0 || this.state.partyType !== "";
      }
      static {
        this.ctorParameters = () => [
          { type: LotoStateService },
          { type: ChangeDetectorRef }
        ];
      }
      static {
        this.propDecorators = {
          onFullscreenChange: [{ type: HostListener, args: ["document:fullscreenchange"] }]
        };
      }
    };
    DisplayComponent = __decorate([
      Component({
        selector: "app-display",
        imports: [CommonModule],
        template: display_component_default,
        styles: [display_component_default2]
      })
    ], DisplayComponent);
  }
});

// src/app/pages/display/display.component.spec.ts
var require_display_component_spec = __commonJS({
  "src/app/pages/display/display.component.spec.ts"(exports) {
    init_testing();
    init_display_component3();
    describe("DisplayComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DisplayComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => __async(null, null, function* () {
        yield fixture.whenStable();
        expect(component).toBeTruthy();
      }));
      it("should handle animation timing with zone coalescing", fakeAsync(() => {
        fixture.detectChanges();
        expect(component.isAnimating).toBeFalsy();
        component["triggerAnimation"]();
        expect(component.isAnimating).toBeFalsy();
        flush();
        expect(component.isAnimating).toBeTruthy();
      }));
      it("should properly cleanup on destroy", fakeAsync(() => {
        fixture.detectChanges();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component["subscription"]).toBeDefined();
        component.ngOnDestroy();
        expect(component).toBeTruthy();
      }));
    });
  }
});
export default require_display_component_spec();
//# sourceMappingURL=spec-app-pages-display-display.component.spec.js.map
