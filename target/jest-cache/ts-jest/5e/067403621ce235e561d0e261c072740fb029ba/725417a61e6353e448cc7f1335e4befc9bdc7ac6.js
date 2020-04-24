"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let PaymentDetailComponent = class PaymentDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.payment = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ payment }) => (this.payment = payment));
    }
    previousState() {
        window.history.back();
    }
};
PaymentDetailComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-payment-detail',
        template: require('./payment-detail.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], PaymentDetailComponent);
exports.PaymentDetailComponent = PaymentDetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFRakQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFHakMsWUFBc0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRnBELFlBQU8sR0FBb0IsSUFBSSxDQUFDO0lBRXVCLENBQUM7SUFFeEQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQVpZLHNCQUFzQjtJQUpsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixrQkFBYSxpQ0FBaUMsQ0FBQTtLQUMvQyxDQUFDOzZDQUlzQyx1QkFBYztHQUh6QyxzQkFBc0IsQ0FZbEM7QUFaWSx3REFBc0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IElQYXltZW50IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9wYXltZW50Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXBheW1lbnQtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGF5bWVudDogSVBheW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKHsgcGF5bWVudCB9KSA9PiAodGhpcy5wYXltZW50ID0gcGF5bWVudCkpO1xuICB9XG5cbiAgcHJldmlvdXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==