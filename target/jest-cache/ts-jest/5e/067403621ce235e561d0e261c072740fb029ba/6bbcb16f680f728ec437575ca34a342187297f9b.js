"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
let HealthModalComponent = class HealthModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    readableValue(value) {
        if (this.health && this.health.key === 'diskSpace') {
            // Should display storage space in an human readable unit
            const val = value / 1073741824;
            if (val > 1) {
                // Value
                return val.toFixed(2) + ' GB';
            }
            else {
                return (value / 1048576).toFixed(2) + ' MB';
            }
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        else {
            return value.toString();
        }
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
HealthModalComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: require('./health-modal.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], HealthModalComponent);
exports.HealthModalComponent = HealthModalComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEwQztBQUMxQyw2REFBNEQ7QUFRNUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFHL0IsWUFBbUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQUcsQ0FBQztJQUVsRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQ2xELHlEQUF5RDtZQUN6RCxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQy9CLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDWCxRQUFRO2dCQUNSLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBO0FBM0JZLG9CQUFvQjtJQUpoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixrQkFBYSwrQkFBK0IsQ0FBQTtLQUM3QyxDQUFDOzZDQUlnQyw2QkFBYztHQUhuQyxvQkFBb0IsQ0EyQmhDO0FBM0JZLG9EQUFvQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSGVhbHRoS2V5LCBIZWFsdGhEZXRhaWxzIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1oZWFsdGgtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFsdGhNb2RhbENvbXBvbmVudCB7XG4gIGhlYWx0aD86IHsga2V5OiBIZWFsdGhLZXk7IHZhbHVlOiBIZWFsdGhEZXRhaWxzIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICByZWFkYWJsZVZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhlYWx0aCAmJiB0aGlzLmhlYWx0aC5rZXkgPT09ICdkaXNrU3BhY2UnKSB7XG4gICAgICAvLyBTaG91bGQgZGlzcGxheSBzdG9yYWdlIHNwYWNlIGluIGFuIGh1bWFuIHJlYWRhYmxlIHVuaXRcbiAgICAgIGNvbnN0IHZhbCA9IHZhbHVlIC8gMTA3Mzc0MTgyNDtcbiAgICAgIGlmICh2YWwgPiAxKSB7XG4gICAgICAgIC8vIFZhbHVlXG4gICAgICAgIHJldHVybiB2YWwudG9GaXhlZCgyKSArICcgR0InO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAvIDEwNDg1NzYpLnRvRml4ZWQoMikgKyAnIE1CJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZGlzbWlzcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9