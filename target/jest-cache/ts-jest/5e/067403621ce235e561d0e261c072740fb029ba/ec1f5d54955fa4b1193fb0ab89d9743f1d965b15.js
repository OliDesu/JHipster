"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let OrderDetailComponent = class OrderDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.order = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ order }) => (this.order = order));
    }
    previousState() {
        window.history.back();
    }
};
OrderDetailComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-order-detail',
        template: require('./order-detail.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLWRldGFpbC5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWtEO0FBQ2xELDRDQUFpRDtBQVFqRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUcvQixZQUFzQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGcEQsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFFMkIsQ0FBQztJQUV4RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBWlksb0JBQW9CO0lBSmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGtCQUFhLCtCQUErQixDQUFBO0tBQzdDLENBQUM7NkNBSXNDLHVCQUFjO0dBSHpDLG9CQUFvQixDQVloQztBQVpZLG9EQUFvQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb3JkZXIvb3JkZXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJT3JkZXIgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL29yZGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLW9yZGVyLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3JkZXI6IElPcmRlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBvcmRlciB9KSA9PiAodGhpcy5vcmRlciA9IG9yZGVyKSk7XG4gIH1cblxuICBwcmV2aW91c1N0YXRlKCk6IHZvaWQge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9