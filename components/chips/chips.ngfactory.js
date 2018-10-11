"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./chips");
var i2 = require("@angular/common");
var i3 = require("../inputtext/inputtext");
var i4 = require("../common/shared");
var i5 = require("@angular/forms");
var i6 = require("../dom/domhandler");
var ChipsModuleNgFactory = i0.ɵcmf(i1.ChipsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.InputTextModule, i3.InputTextModule, []), i0.ɵmpd(1073742336, i4.SharedModule, i4.SharedModule, []), i0.ɵmpd(1073742336, i1.ChipsModule, i1.ChipsModule, [])]); });
exports.ChipsModuleNgFactory = ChipsModuleNgFactory;
var styles_Chips = [];
var RenderType_Chips = i0.ɵcrt({ encapsulation: 2, styles: styles_Chips, data: {} });
exports.RenderType_Chips = RenderType_Chips;
function View_Chips_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [["class", "ui-chips-token-icon pi pi-fw pi-times"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeItem($event, _v.parent.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_Chips_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-chips-token-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.field ? _co.resolveFieldData(_v.parent.context.$implicit, _co.field) : _v.parent.context.$implicit); _ck(_v, 1, 0, currVal_0); }); }
function View_Chips_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_Chips_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [["token", 1]], null, 7, "li", [["class", "ui-chips-token ui-state-highlight ui-corner-all"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Chips_2)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Chips_3)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_Chips_4)), i0.ɵdid(6, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(7, { $implicit: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.disabled; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.itemTemplate; _ck(_v, 4, 0, currVal_1); var currVal_2 = _ck(_v, 7, 0, _v.context.$implicit); var currVal_3 = _co.itemTemplate; _ck(_v, 6, 0, currVal_2, currVal_3); }, null); }
function View_Chips_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { inputViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 10, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 7, "ul", [], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(6, { "ui-inputtext ui-state-default ui-corner-all": 0, "ui-state-focus": 1, "ui-state-disabled": 2 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Chips_1)), i0.ɵdid(8, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(9, 0, null, null, 2, "li", [["class", "ui-chips-input-token"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, [[1, 0], ["inputtext", 1]], null, 1, "input", [["type", "text"]], [[1, "id", 0], [1, "placeholder", 0], [1, "tabindex", 0], [8, "disabled", 0], [8, "className", 0]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co.onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_co.onInputFocus($event) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_co.onInputBlur($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(11, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-chips ui-widget"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _ck(_v, 6, 0, true, _co.focus, _co.disabled); _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.value; _ck(_v, 8, 0, currVal_4); var currVal_10 = _co.inputStyle; _ck(_v, 11, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.inputId; var currVal_6 = ((_co.value && _co.value.length) ? null : _co.placeholder); var currVal_7 = _co.tabindex; var currVal_8 = _co.disabled; var currVal_9 = _co.inputStyleClass; _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
exports.View_Chips_0 = View_Chips_0;
function View_Chips_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "p-chips", [], null, null, null, View_Chips_0, RenderType_Chips)), i0.ɵprd(5120, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.Chips]), i0.ɵprd(512, null, i6.DomHandler, i6.DomHandler, []), i0.ɵdid(3, 1097728, null, 1, i1.Chips, [i0.ElementRef, i6.DomHandler], null, null), i0.ɵqud(603979776, 1, { templates: 1 })], null, null); }
exports.View_Chips_Host_0 = View_Chips_Host_0;
var ChipsNgFactory = i0.ɵccf("p-chips", i1.Chips, View_Chips_Host_0, { style: "style", styleClass: "styleClass", disabled: "disabled", field: "field", placeholder: "placeholder", max: "max", tabindex: "tabindex", inputId: "inputId", allowDuplicate: "allowDuplicate", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass", addOnTab: "addOnTab", addOnBlur: "addOnBlur" }, { onAdd: "onAdd", onRemove: "onRemove", onFocus: "onFocus", onBlur: "onBlur" }, []);
exports.ChipsNgFactory = ChipsNgFactory;
//# sourceMappingURL=chips.ngfactory.js.map