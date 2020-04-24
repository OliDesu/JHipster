"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
const basket_model_1 = require("app/shared/model/basket.model");
const basket_service_1 = require("./basket.service");
const user_service_1 = require("app/core/user/user.service");
const course_service_1 = require("app/entities/course/course.service");
let BasketUpdateComponent = class BasketUpdateComponent {
    constructor(basketService, userService, courseService, activatedRoute, fb) {
        this.basketService = basketService;
        this.userService = userService;
        this.courseService = courseService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.users = [];
        this.courses = [];
        this.editForm = this.fb.group({
            id: [],
            basketId: [null, [forms_1.Validators.required]],
            basketState: [null, [forms_1.Validators.required]],
            user: [],
            course: [],
            customer: []
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ basket }) => {
            this.updateForm(basket);
            this.userService.query().subscribe((res) => (this.users = res.body || []));
            this.courseService
                .query({ filter: 'basket-is-null' })
                .pipe(operators_1.map((res) => {
                return res.body || [];
            }))
                .subscribe((resBody) => {
                if (!basket.course || !basket.course.id) {
                    this.courses = resBody;
                }
                else {
                    this.courseService
                        .find(basket.course.id)
                        .pipe(operators_1.map((subRes) => {
                        return subRes.body ? [subRes.body].concat(resBody) : resBody;
                    }))
                        .subscribe((concatRes) => (this.courses = concatRes));
                }
            });
        });
    }
    updateForm(basket) {
        this.editForm.patchValue({
            id: basket.id,
            basketId: basket.basketId,
            basketState: basket.basketState,
            user: basket.user,
            course: basket.course,
            customer: basket.customer
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const basket = this.createFromForm();
        if (basket.id !== undefined) {
            this.subscribeToSaveResponse(this.basketService.update(basket));
        }
        else {
            this.subscribeToSaveResponse(this.basketService.create(basket));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new basket_model_1.Basket()), { id: this.editForm.get(['id']).value, basketId: this.editForm.get(['basketId']).value, basketState: this.editForm.get(['basketState']).value, user: this.editForm.get(['user']).value, course: this.editForm.get(['course']).value, customer: this.editForm.get(['customer']).value });
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
    trackById(index, item) {
        return item.id;
    }
};
BasketUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-basket-update',
        template: require('./basket-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [basket_service_1.BasketService,
        user_service_1.UserService,
        course_service_1.CourseService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], BasketUpdateComponent);
exports.BasketUpdateComponent = BasketUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtdXBkYXRlLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFFbEQsNkRBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw0Q0FBaUQ7QUFFakQsOENBQXFDO0FBRXJDLGdFQUFnRTtBQUNoRSxxREFBaUQ7QUFFakQsNkRBQXlEO0FBRXpELHVFQUFtRTtBQVFuRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWNoQyxZQUNZLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGNBQThCLEVBQ2hDLEVBQWU7UUFKYixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDaEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWxCekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsYUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsRUFBRSxFQUFFO1lBQ04sUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQztJQVFBLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEVB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bWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtdXBkYXRlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElCYXNrZXQsIEJhc2tldCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvYmFza2V0Lm1vZGVsJztcbmltcG9ydCB7IEJhc2tldFNlcnZpY2UgfSBmcm9tICcuL2Jhc2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnYXBwL2NvcmUvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvdXJzZSB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY291cnNlLm1vZGVsJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcblxudHlwZSBTZWxlY3RhYmxlRW50aXR5ID0gSVVzZXIgfCBJQ291cnNlO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktYmFza2V0LXVwZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNrZXQtdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNrZXRVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc1NhdmluZyA9IGZhbHNlO1xuICB1c2VyczogSVVzZXJbXSA9IFtdO1xuICBjb3Vyc2VzOiBJQ291cnNlW10gPSBbXTtcblxuICBlZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGlkOiBbXSxcbiAgICBiYXNrZXRJZDogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgYmFza2V0U3RhdGU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIHVzZXI6IFtdLFxuICAgIGNvdXJzZTogW10sXG4gICAgY3VzdG9tZXI6IFtdXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBiYXNrZXRTZXJ2aWNlOiBCYXNrZXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBiYXNrZXQgfSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVGb3JtKGJhc2tldCk7XG5cbiAgICAgIHRoaXMudXNlclNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoKHJlczogSHR0cFJlc3BvbnNlPElVc2VyW10+KSA9PiAodGhpcy51c2VycyA9IHJlcy5ib2R5IHx8IFtdKSk7XG5cbiAgICAgIHRoaXMuY291cnNlU2VydmljZVxuICAgICAgICAucXVlcnkoeyBmaWx0ZXI6ICdiYXNrZXQtaXMtbnVsbCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJQ291cnNlW10+KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmJvZHkgfHwgW107XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNCb2R5OiBJQ291cnNlW10pID0+IHtcbiAgICAgICAgICBpZiAoIWJhc2tldC5jb3Vyc2UgfHwgIWJhc2tldC5jb3Vyc2UuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291cnNlcyA9IHJlc0JvZHk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZVxuICAgICAgICAgICAgICAuZmluZChiYXNrZXQuY291cnNlLmlkKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHN1YlJlczogSHR0cFJlc3BvbnNlPElDb3Vyc2U+KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3ViUmVzLmJvZHkgPyBbc3ViUmVzLmJvZHldLmNvbmNhdChyZXNCb2R5KSA6IHJlc0JvZHk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChjb25jYXRSZXM6IElDb3Vyc2VbXSkgPT4gKHRoaXMuY291cnNlcyA9IGNvbmNhdFJlcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGb3JtKGJhc2tldDogSUJhc2tldCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBpZDogYmFza2V0LmlkLFxuICAgICAgYmFza2V0SWQ6IGJhc2tldC5iYXNrZXRJZCxcbiAgICAgIGJhc2tldFN0YXRlOiBiYXNrZXQuYmFza2V0U3RhdGUsXG4gICAgICB1c2VyOiBiYXNrZXQudXNlcixcbiAgICAgIGNvdXJzZTogYmFza2V0LmNvdXJzZSxcbiAgICAgIGN1c3RvbWVyOiBiYXNrZXQuY3VzdG9tZXJcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBiYXNrZXQgPSB0aGlzLmNyZWF0ZUZyb21Gb3JtKCk7XG4gICAgaWYgKGJhc2tldC5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMuYmFza2V0U2VydmljZS51cGRhdGUoYmFza2V0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UodGhpcy5iYXNrZXRTZXJ2aWNlLmNyZWF0ZShiYXNrZXQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZyb21Gb3JtKCk6IElCYXNrZXQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5uZXcgQmFza2V0KCksXG4gICAgICBpZDogdGhpcy5lZGl0Rm9ybS5nZXQoWydpZCddKSEudmFsdWUsXG4gICAgICBiYXNrZXRJZDogdGhpcy5lZGl0Rm9ybS5nZXQoWydiYXNrZXRJZCddKSEudmFsdWUsXG4gICAgICBiYXNrZXRTdGF0ZTogdGhpcy5lZGl0Rm9ybS5nZXQoWydiYXNrZXRTdGF0ZSddKSEudmFsdWUsXG4gICAgICB1c2VyOiB0aGlzLmVkaXRGb3JtLmdldChbJ3VzZXInXSkhLnZhbHVlLFxuICAgICAgY291cnNlOiB0aGlzLmVkaXRGb3JtLmdldChbJ2NvdXJzZSddKSEudmFsdWUsXG4gICAgICBjdXN0b21lcjogdGhpcy5lZGl0Rm9ybS5nZXQoWydjdXN0b21lciddKSEudmFsdWVcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHJlc3VsdDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8SUJhc2tldD4+KTogdm9pZCB7XG4gICAgcmVzdWx0LnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMub25TYXZlU3VjY2VzcygpLFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVFcnJvcigpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU3RhdGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogU2VsZWN0YWJsZUVudGl0eSk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==