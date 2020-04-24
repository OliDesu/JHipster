"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const ng_jhipster_1 = require("ng-jhipster");
const order_service_1 = require("./order.service");
let OrderDeleteDialogComponent = class OrderDeleteDialogComponent {
    constructor(orderService, activeModal, eventManager) {
        this.orderService = orderService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.orderService.delete(id).subscribe(() => {
            this.eventManager.broadcast('orderListModification');
            this.activeModal.close();
        });
    }
};
OrderDeleteDialogComponent = tslib_1.__decorate([
    core_1.Component({
        template: require('./order-delete-dialog.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [order_service_1.OrderService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
], OrderDeleteDialogComponent);
exports.OrderDeleteDialogComponent = OrderDeleteDialogComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEwQztBQUMxQyw2REFBNEQ7QUFDNUQsNkNBQThDO0FBRzlDLG1EQUErQztBQUsvQyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUdyQyxZQUFzQixZQUEwQixFQUFTLFdBQTJCLEVBQVksWUFBNkI7UUFBdkcsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7SUFBRyxDQUFDO0lBRWpJLE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBZlksMEJBQTBCO0lBSHRDLGdCQUFTLENBQUM7UUFDVCxrQkFBYSxzQ0FBc0MsQ0FBQTtLQUNwRCxDQUFDOzZDQUlvQyw0QkFBWSxFQUFzQiw2QkFBYyxFQUEwQiw2QkFBZTtHQUhsSCwwQkFBMEIsQ0FldEM7QUFmWSxnRUFBMEIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IElPcmRlciB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCB7XG4gIG9yZGVyPzogSU9yZGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJvdGVjdGVkIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyKSB7fVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoKTtcbiAgfVxuXG4gIGNvbmZpcm1EZWxldGUoaWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMub3JkZXJTZXJ2aWNlLmRlbGV0ZShpZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCgnb3JkZXJMaXN0TW9kaWZpY2F0aW9uJyk7XG4gICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==