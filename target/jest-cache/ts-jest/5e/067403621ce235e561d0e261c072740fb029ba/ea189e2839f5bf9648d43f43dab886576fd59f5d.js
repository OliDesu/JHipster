"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const ng_jhipster_1 = require("ng-jhipster");
const restaurant_service_1 = require("./restaurant.service");
let RestaurantDeleteDialogComponent = class RestaurantDeleteDialogComponent {
    constructor(restaurantService, activeModal, eventManager) {
        this.restaurantService = restaurantService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.restaurantService.delete(id).subscribe(() => {
            this.eventManager.broadcast('restaurantListModification');
            this.activeModal.close();
        });
    }
};
RestaurantDeleteDialogComponent = tslib_1.__decorate([
    core_1.Component({
        template: require('./restaurant-delete-dialog.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiEventManager])
], RestaurantDeleteDialogComponent);
exports.RestaurantDeleteDialogComponent = RestaurantDeleteDialogComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMEM7QUFDMUMsNkRBQTREO0FBQzVELDZDQUE4QztBQUc5Qyw2REFBeUQ7QUFLekQsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFHMUMsWUFDWSxpQkFBb0MsRUFDdkMsV0FBMkIsRUFDeEIsWUFBNkI7UUFGN0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWlCO0lBQ3RDLENBQUM7SUFFSixNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBbkJZLCtCQUErQjtJQUgzQyxnQkFBUyxDQUFDO1FBQ1Qsa0JBQWEsMkNBQTJDLENBQUE7S0FDekQsQ0FBQzs2Q0FLK0Isc0NBQWlCO1FBQzFCLDZCQUFjO1FBQ1YsNkJBQWU7R0FOOUIsK0JBQStCLENBbUIzQztBQW5CWSwwRUFBK0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBJUmVzdGF1cmFudCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcmVzdGF1cmFudC5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gJy4vcmVzdGF1cmFudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0YXVyYW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RhdXJhbnREZWxldGVEaWFsb2dDb21wb25lbnQge1xuICByZXN0YXVyYW50PzogSVJlc3RhdXJhbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlc3RhdXJhbnRTZXJ2aWNlOiBSZXN0YXVyYW50U2VydmljZSxcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByb3RlY3RlZCBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlclxuICApIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygpO1xuICB9XG5cbiAgY29uZmlybURlbGV0ZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0YXVyYW50U2VydmljZS5kZWxldGUoaWQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoJ3Jlc3RhdXJhbnRMaXN0TW9kaWZpY2F0aW9uJyk7XG4gICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==