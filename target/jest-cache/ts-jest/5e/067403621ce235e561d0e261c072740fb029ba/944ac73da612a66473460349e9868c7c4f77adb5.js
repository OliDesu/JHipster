"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const order_model_1 = require("app/shared/model/order.model");
const order_service_1 = require("./order.service");
let OrderUpdateComponent = class OrderUpdateComponent {
    constructor(orderService, activatedRoute, fb) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.editForm = this.fb.group({
            id: [],
            orderId: [null, [forms_1.Validators.required]]
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ order }) => {
            this.updateForm(order);
        });
    }
    updateForm(order) {
        this.editForm.patchValue({
            id: order.id,
            orderId: order.orderId
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const order = this.createFromForm();
        if (order.id !== undefined) {
            this.subscribeToSaveResponse(this.orderService.update(order));
        }
        else {
            this.subscribeToSaveResponse(this.orderService.create(order));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new order_model_1.Order()), { id: this.editForm.get(['id']).value, orderId: this.editForm.get(['orderId']).value });
    }
    subscribeToSaveResponse(result) {
        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
};
OrderUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-order-update',
        template: require('./order-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [order_service_1.OrderService, router_1.ActivatedRoute, forms_1.FormBuilder])
], OrderUpdateComponent);
exports.OrderUpdateComponent = OrderUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLXVwZGF0ZS5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWtEO0FBRWxELDZEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsNENBQWlEO0FBR2pELDhEQUE2RDtBQUM3RCxtREFBK0M7QUFNL0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFRL0IsWUFBc0IsWUFBMEIsRUFBWSxjQUE4QixFQUFVLEVBQWU7UUFBN0YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUG5ILGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsYUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFFbUgsQ0FBQztJQUV2SCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLHVDQUNLLElBQUksbUJBQUssRUFBRSxLQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUMsS0FBSyxFQUNwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBRSxDQUFDLEtBQUssSUFDOUM7SUFDSixDQUFDO0lBRVMsdUJBQXVCLENBQUMsTUFBd0M7UUFDeEUsTUFBTSxDQUFDLFNBQVMsQ0FDZCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQzFCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDekIsQ0FBQztJQUNKLENBQUM7SUFFUyxhQUFhO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQTVEWSxvQkFBb0I7SUFKaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsa0JBQWEsK0JBQStCLENBQUE7S0FDN0MsQ0FBQzs2Q0FTb0MsNEJBQVksRUFBNEIsdUJBQWMsRUFBYyxtQkFBVztHQVJ4RyxvQkFBb0IsQ0E0RGhDO0FBNURZLG9EQUFvQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb3JkZXIvb3JkZXItdXBkYXRlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElPcmRlciwgT3JkZXIgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vb3JkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1vcmRlci11cGRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlclVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzU2F2aW5nID0gZmFsc2U7XG5cbiAgZWRpdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBpZDogW10sXG4gICAgb3JkZXJJZDogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IG9yZGVyIH0pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRm9ybShvcmRlcik7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGb3JtKG9yZGVyOiBJT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgb3JkZXJJZDogb3JkZXIub3JkZXJJZFxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlvdXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5jcmVhdGVGcm9tRm9ybSgpO1xuICAgIGlmIChvcmRlci5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMub3JkZXJTZXJ2aWNlLnVwZGF0ZShvcmRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMub3JkZXJTZXJ2aWNlLmNyZWF0ZShvcmRlcikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRnJvbUZvcm0oKTogSU9yZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubmV3IE9yZGVyKCksXG4gICAgICBpZDogdGhpcy5lZGl0Rm9ybS5nZXQoWydpZCddKSEudmFsdWUsXG4gICAgICBvcmRlcklkOiB0aGlzLmVkaXRGb3JtLmdldChbJ29yZGVySWQnXSkhLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPElPcmRlcj4+KTogdm9pZCB7XG4gICAgcmVzdWx0LnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMub25TYXZlU3VjY2VzcygpLFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVFcnJvcigpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU3RhdGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==