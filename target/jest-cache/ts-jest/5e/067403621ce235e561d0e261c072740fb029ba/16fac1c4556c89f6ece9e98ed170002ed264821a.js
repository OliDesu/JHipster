"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const restaurant_model_1 = require("app/shared/model/restaurant.model");
const restaurant_service_1 = require("./restaurant.service");
let RestaurantUpdateComponent = class RestaurantUpdateComponent {
    constructor(restaurantService, activatedRoute, fb) {
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.editForm = this.fb.group({
            id: [],
            restaurantId: [null, [forms_1.Validators.required]],
            name: [null, [forms_1.Validators.required]],
            description: []
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ restaurant }) => {
            this.updateForm(restaurant);
        });
    }
    updateForm(restaurant) {
        this.editForm.patchValue({
            id: restaurant.id,
            restaurantId: restaurant.restaurantId,
            name: restaurant.name,
            description: restaurant.description
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const restaurant = this.createFromForm();
        if (restaurant.id !== undefined) {
            this.subscribeToSaveResponse(this.restaurantService.update(restaurant));
        }
        else {
            this.subscribeToSaveResponse(this.restaurantService.create(restaurant));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new restaurant_model_1.Restaurant()), { id: this.editForm.get(['id']).value, restaurantId: this.editForm.get(['restaurantId']).value, name: this.editForm.get(['name']).value, description: this.editForm.get(['description']).value });
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
RestaurantUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-restaurant-update',
        template: require('./restaurant-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [restaurant_service_1.RestaurantService, router_1.ActivatedRoute, forms_1.FormBuilder])
], RestaurantUpdateComponent);
exports.RestaurantUpdateComponent = RestaurantUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC11cGRhdGUuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCw2REFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELDRDQUFpRDtBQUdqRCx3RUFBNEU7QUFDNUUsNkRBQXlEO0FBTXpELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBVXBDLFlBQXNCLGlCQUFvQyxFQUFZLGNBQThCLEVBQVUsRUFBZTtRQUF2RyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVQ3SCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRTtZQUNOLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7SUFFNkgsQ0FBQztJQUVqSSxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQXVCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTtZQUNqQixZQUFZLEVBQUUsVUFBVSxDQUFDLFlBQVk7WUFDckMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLFdBQVcsRUFBRSxVQUFVLENBQUMsV0FBVztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxVQUFVLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVPLGNBQWM7UUFDcEIsdUNBQ0ssSUFBSSw2QkFBVSxFQUFFLEtBQ25CLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUMsS0FBSyxFQUNwQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBRSxDQUFDLEtBQUssRUFDeEQsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQ3hDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFFLENBQUMsS0FBSyxJQUN0RDtJQUNKLENBQUM7SUFFUyx1QkFBdUIsQ0FBQyxNQUE2QztRQUM3RSxNQUFNLENBQUMsU0FBUyxDQUNkLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFDMUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVTLGFBQWE7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBbEVZLHlCQUF5QjtJQUpyQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxrQkFBYSxvQ0FBb0MsQ0FBQTtLQUNsRCxDQUFDOzZDQVd5QyxzQ0FBaUIsRUFBNEIsdUJBQWMsRUFBYyxtQkFBVztHQVZsSCx5QkFBeUIsQ0FrRXJDO0FBbEVZLDhEQUF5QiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50LXVwZGF0ZS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJUmVzdGF1cmFudCwgUmVzdGF1cmFudCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcmVzdGF1cmFudC5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gJy4vcmVzdGF1cmFudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXJlc3RhdXJhbnQtdXBkYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3RhdXJhbnQtdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0YXVyYW50VXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNTYXZpbmcgPSBmYWxzZTtcblxuICBlZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGlkOiBbXSxcbiAgICByZXN0YXVyYW50SWQ6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIG5hbWU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIGRlc2NyaXB0aW9uOiBbXVxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVzdGF1cmFudFNlcnZpY2U6IFJlc3RhdXJhbnRTZXJ2aWNlLCBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IHJlc3RhdXJhbnQgfSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVGb3JtKHJlc3RhdXJhbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRm9ybShyZXN0YXVyYW50OiBJUmVzdGF1cmFudCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBpZDogcmVzdGF1cmFudC5pZCxcbiAgICAgIHJlc3RhdXJhbnRJZDogcmVzdGF1cmFudC5yZXN0YXVyYW50SWQsXG4gICAgICBuYW1lOiByZXN0YXVyYW50Lm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdGF1cmFudC5kZXNjcmlwdGlvblxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlvdXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSB0aGlzLmNyZWF0ZUZyb21Gb3JtKCk7XG4gICAgaWYgKHJlc3RhdXJhbnQuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLnJlc3RhdXJhbnRTZXJ2aWNlLnVwZGF0ZShyZXN0YXVyYW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UodGhpcy5yZXN0YXVyYW50U2VydmljZS5jcmVhdGUocmVzdGF1cmFudCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRnJvbUZvcm0oKTogSVJlc3RhdXJhbnQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5uZXcgUmVzdGF1cmFudCgpLFxuICAgICAgaWQ6IHRoaXMuZWRpdEZvcm0uZ2V0KFsnaWQnXSkhLnZhbHVlLFxuICAgICAgcmVzdGF1cmFudElkOiB0aGlzLmVkaXRGb3JtLmdldChbJ3Jlc3RhdXJhbnRJZCddKSEudmFsdWUsXG4gICAgICBuYW1lOiB0aGlzLmVkaXRGb3JtLmdldChbJ25hbWUnXSkhLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZWRpdEZvcm0uZ2V0KFsnZGVzY3JpcHRpb24nXSkhLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPElSZXN0YXVyYW50Pj4pOiB2b2lkIHtcbiAgICByZXN1bHQuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKCksXG4gICAgICAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2F2ZVN1Y2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNTdGF0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2F2ZUVycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9