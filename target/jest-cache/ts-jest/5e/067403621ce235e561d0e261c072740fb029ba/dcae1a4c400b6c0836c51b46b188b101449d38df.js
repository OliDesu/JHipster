"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let UserManagementDetailComponent = class UserManagementDetailComponent {
    constructor(route) {
        this.route = route;
        this.user = null;
    }
    ngOnInit() {
        this.route.data.subscribe(({ user }) => (this.user = user));
    }
};
UserManagementDetailComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: require('./user-management-detail.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], UserManagementDetailComponent);
exports.UserManagementDetailComponent = UserManagementDetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFDbEQsNENBQWlEO0FBUWpELElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBR3hDLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRnpDLFNBQUksR0FBZ0IsSUFBSSxDQUFDO0lBRW1CLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRixDQUFBO0FBUlksNkJBQTZCO0lBSnpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLGtCQUFhLHlDQUF5QyxDQUFBO0tBQ3ZELENBQUM7NkNBSTJCLHVCQUFjO0dBSDlCLDZCQUE2QixDQVF6QztBQVJZLHNFQUE2QiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlbWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IHVzZXIgfSkgPT4gKHRoaXMudXNlciA9IHVzZXIpKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9