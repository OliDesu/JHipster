"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const payment_model_1 = require("app/shared/model/payment.model");
const payment_service_1 = require("./payment.service");
let PaymentUpdateComponent = class PaymentUpdateComponent {
    constructor(paymentService, activatedRoute, fb) {
        this.paymentService = paymentService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.editForm = this.fb.group({
            id: [],
            paymentMethod: [null, [forms_1.Validators.required]]
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ payment }) => {
            this.updateForm(payment);
        });
    }
    updateForm(payment) {
        this.editForm.patchValue({
            id: payment.id,
            paymentMethod: payment.paymentMethod
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const payment = this.createFromForm();
        if (payment.id !== undefined) {
            this.subscribeToSaveResponse(this.paymentService.update(payment));
        }
        else {
            this.subscribeToSaveResponse(this.paymentService.create(payment));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new payment_model_1.Payment()), { id: this.editForm.get(['id']).value, paymentMethod: this.editForm.get(['paymentMethod']).value });
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
PaymentUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-payment-update',
        template: require('./payment-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [payment_service_1.PaymentService, router_1.ActivatedRoute, forms_1.FormBuilder])
], PaymentUpdateComponent);
exports.PaymentUpdateComponent = PaymentUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC11cGRhdGUuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCw2REFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELDRDQUFpRDtBQUdqRCxrRUFBbUU7QUFDbkUsdURBQW1EO0FBTW5ELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBUWpDLFlBQXNCLGNBQThCLEVBQVksY0FBOEIsRUFBVSxFQUFlO1FBQWpHLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFZLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFQdkgsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixhQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsRUFBRSxFQUFFLEVBQUU7WUFDTixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztJQUV1SCxDQUFDO0lBRTNILFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBaUI7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ2QsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLHVDQUNLLElBQUksdUJBQU8sRUFBRSxLQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDLEtBQUssRUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUUsQ0FBQyxLQUFLLElBQzFEO0lBQ0osQ0FBQztJQUVTLHVCQUF1QixDQUFDLE1BQTBDO1FBQzFFLE1BQU0sQ0FBQyxTQUFTLENBQ2QsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUMxQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQ3pCLENBQUM7SUFDSixDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUNGLENBQUE7QUE1RFksc0JBQXNCO0lBSmxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGtCQUFhLGlDQUFpQyxDQUFBO0tBQy9DLENBQUM7NkNBU3NDLGdDQUFjLEVBQTRCLHVCQUFjLEVBQWMsbUJBQVc7R0FSNUcsc0JBQXNCLENBNERsQztBQTVEWSx3REFBc0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC11cGRhdGUuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSVBheW1lbnQsIFBheW1lbnQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL3BheW1lbnQubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1wYXltZW50LXVwZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LXVwZGF0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzU2F2aW5nID0gZmFsc2U7XG5cbiAgZWRpdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBpZDogW10sXG4gICAgcGF5bWVudE1ldGhvZDogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBwYXltZW50IH0pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRm9ybShwYXltZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvcm0ocGF5bWVudDogSVBheW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgaWQ6IHBheW1lbnQuaWQsXG4gICAgICBwYXltZW50TWV0aG9kOiBwYXltZW50LnBheW1lbnRNZXRob2RcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBwYXltZW50ID0gdGhpcy5jcmVhdGVGcm9tRm9ybSgpO1xuICAgIGlmIChwYXltZW50LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UodGhpcy5wYXltZW50U2VydmljZS51cGRhdGUocGF5bWVudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMucGF5bWVudFNlcnZpY2UuY3JlYXRlKHBheW1lbnQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZyb21Gb3JtKCk6IElQYXltZW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubmV3IFBheW1lbnQoKSxcbiAgICAgIGlkOiB0aGlzLmVkaXRGb3JtLmdldChbJ2lkJ10pIS52YWx1ZSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IHRoaXMuZWRpdEZvcm0uZ2V0KFsncGF5bWVudE1ldGhvZCddKSEudmFsdWVcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHJlc3VsdDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8SVBheW1lbnQ+Pik6IHZvaWQge1xuICAgIHJlc3VsdC5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MoKSxcbiAgICAgICgpID0+IHRoaXMub25TYXZlRXJyb3IoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TYXZlU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c1N0YXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TYXZlRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=