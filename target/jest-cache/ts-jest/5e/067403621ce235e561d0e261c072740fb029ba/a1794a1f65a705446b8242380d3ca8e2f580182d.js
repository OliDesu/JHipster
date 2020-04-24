"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let ProductDetailComponent = class ProductDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.product = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ product }) => (this.product = product));
    }
    previousState() {
        window.history.back();
    }
};
ProductDetailComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-product-detail',
        template: require('./product-detail.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFRakQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFHakMsWUFBc0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRnBELFlBQU8sR0FBb0IsSUFBSSxDQUFDO0lBRXVCLENBQUM7SUFFeEQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQVpZLHNCQUFzQjtJQUpsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixrQkFBYSxpQ0FBaUMsQ0FBQTtLQUMvQyxDQUFDOzZDQUlzQyx1QkFBYztHQUh6QyxzQkFBc0IsQ0FZbEM7QUFaWSx3REFBc0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXByb2R1Y3QtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZHVjdDogSVByb2R1Y3QgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKHsgcHJvZHVjdCB9KSA9PiAodGhpcy5wcm9kdWN0ID0gcHJvZHVjdCkpO1xuICB9XG5cbiAgcHJldmlvdXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==