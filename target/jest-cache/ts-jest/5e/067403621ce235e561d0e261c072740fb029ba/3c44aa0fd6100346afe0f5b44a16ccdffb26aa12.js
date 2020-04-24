"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const cooperative_model_1 = require("app/shared/model/cooperative.model");
const cooperative_service_1 = require("./cooperative.service");
const restaurant_service_1 = require("app/entities/restaurant/restaurant.service");
let CooperativeUpdateComponent = class CooperativeUpdateComponent {
    constructor(cooperativeService, restaurantService, activatedRoute, fb) {
        this.cooperativeService = cooperativeService;
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.restaurants = [];
        this.editForm = this.fb.group({
            id: [],
            cooperativeId: [null, [forms_1.Validators.required]],
            name: [],
            area: [],
            restaurants: []
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ cooperative }) => {
            this.updateForm(cooperative);
            this.restaurantService.query().subscribe((res) => (this.restaurants = res.body || []));
        });
    }
    updateForm(cooperative) {
        this.editForm.patchValue({
            id: cooperative.id,
            cooperativeId: cooperative.cooperativeId,
            name: cooperative.name,
            area: cooperative.area,
            restaurants: cooperative.restaurants
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const cooperative = this.createFromForm();
        if (cooperative.id !== undefined) {
            this.subscribeToSaveResponse(this.cooperativeService.update(cooperative));
        }
        else {
            this.subscribeToSaveResponse(this.cooperativeService.create(cooperative));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new cooperative_model_1.Cooperative()), { id: this.editForm.get(['id']).value, cooperativeId: this.editForm.get(['cooperativeId']).value, name: this.editForm.get(['name']).value, area: this.editForm.get(['area']).value, restaurants: this.editForm.get(['restaurants']).value });
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
    getSelected(selectedVals, option) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
};
CooperativeUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-cooperative-update',
        template: require('./cooperative-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [cooperative_service_1.CooperativeService,
        restaurant_service_1.RestaurantService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], CooperativeUpdateComponent);
exports.CooperativeUpdateComponent = CooperativeUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLXVwZGF0ZS5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWtEO0FBRWxELDZEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsNENBQWlEO0FBR2pELDBFQUErRTtBQUMvRSwrREFBMkQ7QUFFM0QsbUZBQStFO0FBTS9FLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBWXJDLFlBQ1ksa0JBQXNDLEVBQ3RDLGlCQUFvQyxFQUNwQyxjQUE4QixFQUNoQyxFQUFlO1FBSGIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBZnpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBRWhDLGFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRTtZQUNOLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztJQU9BLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWdDLEVBQUUsRUFBRSxD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O0NBQ0YsQ0FBQTtBQTVGWSwwQkFBMEI7SUFKdEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsa0JBQWEscUNBQXFDLENBQUE7S0FDbkQsQ0FBQzs2Q0FjZ0Msd0NBQWtCO1FBQ25CLHNDQUFpQjtRQUNwQix1QkFBYztRQUM1QixtQkFBVztHQWhCZCwwQkFBMEIsQ0E0RnRDO0FBNUZZLGdFQUEwQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY29vcGVyYXRpdmUvY29vcGVyYXRpdmUtdXBkYXRlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElDb29wZXJhdGl2ZSwgQ29vcGVyYXRpdmUgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL2Nvb3BlcmF0aXZlLm1vZGVsJztcbmltcG9ydCB7IENvb3BlcmF0aXZlU2VydmljZSB9IGZyb20gJy4vY29vcGVyYXRpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBJUmVzdGF1cmFudCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcmVzdGF1cmFudC5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1jb29wZXJhdGl2ZS11cGRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29vcGVyYXRpdmUtdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb29wZXJhdGl2ZVVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzU2F2aW5nID0gZmFsc2U7XG4gIHJlc3RhdXJhbnRzOiBJUmVzdGF1cmFudFtdID0gW107XG5cbiAgZWRpdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBpZDogW10sXG4gICAgY29vcGVyYXRpdmVJZDogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgbmFtZTogW10sXG4gICAgYXJlYTogW10sXG4gICAgcmVzdGF1cmFudHM6IFtdXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb29wZXJhdGl2ZVNlcnZpY2U6IENvb3BlcmF0aXZlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVzdGF1cmFudFNlcnZpY2U6IFJlc3RhdXJhbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKHsgY29vcGVyYXRpdmUgfSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVGb3JtKGNvb3BlcmF0aXZlKTtcblxuICAgICAgdGhpcy5yZXN0YXVyYW50U2VydmljZS5xdWVyeSgpLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8SVJlc3RhdXJhbnRbXT4pID0+ICh0aGlzLnJlc3RhdXJhbnRzID0gcmVzLmJvZHkgfHwgW10pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvcm0oY29vcGVyYXRpdmU6IElDb29wZXJhdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBpZDogY29vcGVyYXRpdmUuaWQsXG4gICAgICBjb29wZXJhdGl2ZUlkOiBjb29wZXJhdGl2ZS5jb29wZXJhdGl2ZUlkLFxuICAgICAgbmFtZTogY29vcGVyYXRpdmUubmFtZSxcbiAgICAgIGFyZWE6IGNvb3BlcmF0aXZlLmFyZWEsXG4gICAgICByZXN0YXVyYW50czogY29vcGVyYXRpdmUucmVzdGF1cmFudHNcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb29wZXJhdGl2ZSA9IHRoaXMuY3JlYXRlRnJvbUZvcm0oKTtcbiAgICBpZiAoY29vcGVyYXRpdmUuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLmNvb3BlcmF0aXZlU2VydmljZS51cGRhdGUoY29vcGVyYXRpdmUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLmNvb3BlcmF0aXZlU2VydmljZS5jcmVhdGUoY29vcGVyYXRpdmUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZyb21Gb3JtKCk6IElDb29wZXJhdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm5ldyBDb29wZXJhdGl2ZSgpLFxuICAgICAgaWQ6IHRoaXMuZWRpdEZvcm0uZ2V0KFsnaWQnXSkhLnZhbHVlLFxuICAgICAgY29vcGVyYXRpdmVJZDogdGhpcy5lZGl0Rm9ybS5nZXQoWydjb29wZXJhdGl2ZUlkJ10pIS52YWx1ZSxcbiAgICAgIG5hbWU6IHRoaXMuZWRpdEZvcm0uZ2V0KFsnbmFtZSddKSEudmFsdWUsXG4gICAgICBhcmVhOiB0aGlzLmVkaXRGb3JtLmdldChbJ2FyZWEnXSkhLnZhbHVlLFxuICAgICAgcmVzdGF1cmFudHM6IHRoaXMuZWRpdEZvcm0uZ2V0KFsncmVzdGF1cmFudHMnXSkhLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPElDb29wZXJhdGl2ZT4+KTogdm9pZCB7XG4gICAgcmVzdWx0LnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMub25TYXZlU3VjY2VzcygpLFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVFcnJvcigpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU3RhdGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogSVJlc3RhdXJhbnQpOiBhbnkge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWQoc2VsZWN0ZWRWYWxzOiBJUmVzdGF1cmFudFtdLCBvcHRpb246IElSZXN0YXVyYW50KTogSVJlc3RhdXJhbnQge1xuICAgIGlmIChzZWxlY3RlZFZhbHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvcHRpb24uaWQgPT09IHNlbGVjdGVkVmFsc1tpXS5pZCkge1xuICAgICAgICAgIHJldHVybiBzZWxlY3RlZFZhbHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9