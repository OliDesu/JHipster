"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const product_model_1 = require("app/shared/model/product.model");
const product_service_1 = require("./product.service");
const basket_service_1 = require("app/entities/basket/basket.service");
const restaurant_service_1 = require("app/entities/restaurant/restaurant.service");
let ProductUpdateComponent = class ProductUpdateComponent {
    constructor(productService, basketService, restaurantService, activatedRoute, fb) {
        this.productService = productService;
        this.basketService = basketService;
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.baskets = [];
        this.restaurants = [];
        this.editForm = this.fb.group({
            id: [],
            price: [null, [forms_1.Validators.required, forms_1.Validators.min(0)]],
            disponibility: [],
            description: [],
            basket: [],
            restaurant: []
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ product }) => {
            this.updateForm(product);
            this.basketService.query().subscribe((res) => (this.baskets = res.body || []));
            this.restaurantService.query().subscribe((res) => (this.restaurants = res.body || []));
        });
    }
    updateForm(product) {
        this.editForm.patchValue({
            id: product.id,
            price: product.price,
            disponibility: product.disponibility,
            description: product.description,
            basket: product.basket,
            restaurant: product.restaurant
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const product = this.createFromForm();
        if (product.id !== undefined) {
            this.subscribeToSaveResponse(this.productService.update(product));
        }
        else {
            this.subscribeToSaveResponse(this.productService.create(product));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new product_model_1.Product()), { id: this.editForm.get(['id']).value, price: this.editForm.get(['price']).value, disponibility: this.editForm.get(['disponibility']).value, description: this.editForm.get(['description']).value, basket: this.editForm.get(['basket']).value, restaurant: this.editForm.get(['restaurant']).value });
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
ProductUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-product-update',
        template: require('./product-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [product_service_1.ProductService,
        basket_service_1.BasketService,
        restaurant_service_1.RestaurantService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], ProductUpdateComponent);
exports.ProductUpdateComponent = ProductUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Byb2R1Y3QvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCw2REFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELDRDQUFpRDtBQUdqRCxrRUFBbUU7QUFDbkUsdURBQW1EO0FBRW5ELHVFQUFtRTtBQUVuRSxtRkFBK0U7QUFRL0UsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFjakMsWUFDWSxjQUE4QixFQUM5QixhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDaEMsRUFBZTtRQUpiLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBbEJ6QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBRWhDLGFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO0lBUUEsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFF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eEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBc0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFBO0FBeEZZLHNCQUFzQjtJQUpsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixrQkFBYSxpQ0FBaUMsQ0FBQTtLQUMvQyxDQUFDOzZDQWdCNEIsZ0NBQWM7UUFDZiw4QkFBYTtRQUNULHNDQUFpQjtRQUNwQix1QkFBYztRQUM1QixtQkFBVztHQW5CZCxzQkFBc0IsQ0F3RmxDO0FBeEZZLHdEQUFzQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcHJvZHVjdC9wcm9kdWN0LXVwZGF0ZS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJUHJvZHVjdCwgUHJvZHVjdCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IElCYXNrZXQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL2Jhc2tldC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNrZXRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBJUmVzdGF1cmFudCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcmVzdGF1cmFudC5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQuc2VydmljZSc7XG5cbnR5cGUgU2VsZWN0YWJsZUVudGl0eSA9IElCYXNrZXQgfCBJUmVzdGF1cmFudDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXByb2R1Y3QtdXBkYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNTYXZpbmcgPSBmYWxzZTtcbiAgYmFza2V0czogSUJhc2tldFtdID0gW107XG4gIHJlc3RhdXJhbnRzOiBJUmVzdGF1cmFudFtdID0gW107XG5cbiAgZWRpdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBpZDogW10sXG4gICAgcHJpY2U6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW4oMCldXSxcbiAgICBkaXNwb25pYmlsaXR5OiBbXSxcbiAgICBkZXNjcmlwdGlvbjogW10sXG4gICAgYmFza2V0OiBbXSxcbiAgICByZXN0YXVyYW50OiBbXVxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBiYXNrZXRTZXJ2aWNlOiBCYXNrZXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXN0YXVyYW50U2VydmljZTogUmVzdGF1cmFudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBwcm9kdWN0IH0pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRm9ybShwcm9kdWN0KTtcblxuICAgICAgdGhpcy5iYXNrZXRTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKChyZXM6IEh0dHBSZXNwb25zZTxJQmFza2V0W10+KSA9PiAodGhpcy5iYXNrZXRzID0gcmVzLmJvZHkgfHwgW10pKTtcblxuICAgICAgdGhpcy5yZXN0YXVyYW50U2VydmljZS5xdWVyeSgpLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8SVJlc3RhdXJhbnRbXT4pID0+ICh0aGlzLnJlc3RhdXJhbnRzID0gcmVzLmJvZHkgfHwgW10pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvcm0ocHJvZHVjdDogSVByb2R1Y3QpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcbiAgICAgIGRpc3BvbmliaWxpdHk6IHByb2R1Y3QuZGlzcG9uaWJpbGl0eSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgYmFza2V0OiBwcm9kdWN0LmJhc2tldCxcbiAgICAgIHJlc3RhdXJhbnQ6IHByb2R1Y3QucmVzdGF1cmFudFxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlvdXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLmNyZWF0ZUZyb21Gb3JtKCk7XG4gICAgaWYgKHByb2R1Y3QuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLnByb2R1Y3RTZXJ2aWNlLnVwZGF0ZShwcm9kdWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UodGhpcy5wcm9kdWN0U2VydmljZS5jcmVhdGUocHJvZHVjdCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRnJvbUZvcm0oKTogSVByb2R1Y3Qge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5uZXcgUHJvZHVjdCgpLFxuICAgICAgaWQ6IHRoaXMuZWRpdEZvcm0uZ2V0KFsnaWQnXSkhLnZhbHVlLFxuICAgICAgcHJpY2U6IHRoaXMuZWRpdEZvcm0uZ2V0KFsncHJpY2UnXSkhLnZhbHVlLFxuICAgICAgZGlzcG9uaWJpbGl0eTogdGhpcy5lZGl0Rm9ybS5nZXQoWydkaXNwb25pYmlsaXR5J10pIS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmVkaXRGb3JtLmdldChbJ2Rlc2NyaXB0aW9uJ10pIS52YWx1ZSxcbiAgICAgIGJhc2tldDogdGhpcy5lZGl0Rm9ybS5nZXQoWydiYXNrZXQnXSkhLnZhbHVlLFxuICAgICAgcmVzdGF1cmFudDogdGhpcy5lZGl0Rm9ybS5nZXQoWydyZXN0YXVyYW50J10pIS52YWx1ZVxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UocmVzdWx0OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxJUHJvZHVjdD4+KTogdm9pZCB7XG4gICAgcmVzdWx0LnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMub25TYXZlU3VjY2VzcygpLFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVFcnJvcigpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU3RhdGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNhdmVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogU2VsZWN0YWJsZUVudGl0eSk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==