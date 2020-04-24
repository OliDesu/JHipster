"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const operators_1 = require("rxjs/operators");
const router_1 = require("@angular/router");
const ng_jhipster_1 = require("ng-jhipster");
const pagination_constants_1 = require("app/shared/constants/pagination.constants");
const account_service_1 = require("app/core/auth/account.service");
const user_service_1 = require("app/core/user/user.service");
const user_management_delete_dialog_component_1 = require("./user-management-delete-dialog.component");
let UserManagementComponent = class UserManagementComponent {
    constructor(userService, accountService, activatedRoute, router, eventManager, modalService) {
        this.userService = userService;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eventManager = eventManager;
        this.modalService = modalService;
        this.currentAccount = null;
        this.users = null;
        this.totalItems = 0;
        this.itemsPerPage = pagination_constants_1.ITEMS_PER_PAGE;
    }
    ngOnInit() {
        this.activatedRoute.data
            .pipe(operators_1.flatMap(() => this.accountService.identity(), (data, account) => {
            this.page = data.pagingParams.page;
            this.previousPage = data.pagingParams.page;
            this.ascending = data.pagingParams.ascending;
            this.predicate = data.pagingParams.predicate;
            this.currentAccount = account;
            this.loadAll();
            this.userListSubscription = this.eventManager.subscribe('userListModification', () => this.loadAll());
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.userListSubscription) {
            this.eventManager.destroy(this.userListSubscription);
        }
    }
    setActive(user, isActivated) {
        this.userService.update(Object.assign(Object.assign({}, user), { activated: isActivated })).subscribe(() => this.loadAll());
    }
    trackIdentity(index, item) {
        return item.id;
    }
    loadPage(page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute.parent,
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }
    deleteUser(user) {
        const modalRef = this.modalService.open(user_management_delete_dialog_component_1.UserManagementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
    }
    loadAll() {
        this.userService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe((res) => this.onSuccess(res.body, res.headers));
    }
    sort() {
        const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    onSuccess(users, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.users = users;
    }
};
UserManagementComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: require('./user-management.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService,
        account_service_1.AccountService,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.JhiEventManager,
        ng_bootstrap_1.NgbModal])
], UserManagementComponent);
exports.UserManagementComponent = UserManagementComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUE2RDtBQUU3RCw2REFBc0Q7QUFFdEQsOENBQXlDO0FBQ3pDLDRDQUF5RDtBQUN6RCw2Q0FBOEM7QUFFOUMsb0ZBQTJFO0FBQzNFLG1FQUErRDtBQUUvRCw2REFBeUQ7QUFFekQsdUdBQWdHO0FBTWhHLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBV2xDLFlBQ1UsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLFlBQTZCLEVBQzdCLFlBQXNCO1FBTHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQWhCaEMsbUJBQWMsR0FBbUIsSUFBSSxDQUFDO1FBQ3RDLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRTVCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLHFDQUFjLENBQUM7SUFhM0IsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7YUFDckIsSUFBSSxDQUNILG1CQUFPLENBQ0wsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFDcEMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFD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UUFDMUUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFvQixFQUFFLE9BQW9CO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTtBQWxHWSx1QkFBdUI7SUFKbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLGtCQUFhLGtDQUFrQyxDQUFBO0tBQ2hELENBQUM7NkNBYXVCLDBCQUFXO1FBQ1IsZ0NBQWM7UUFDZCx1QkFBYztRQUN0QixlQUFNO1FBQ0EsNkJBQWU7UUFDZix1QkFBUTtHQWpCckIsdUJBQXVCLENBa0duQztBQWxHWSwwREFBdUIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJ2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvYXV0aC9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvYWNjb3VudC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlck1hbmFnZW1lbnREZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY3VycmVudEFjY291bnQ6IEFjY291bnQgfCBudWxsID0gbnVsbDtcbiAgdXNlcnM6IFVzZXJbXSB8IG51bGwgPSBudWxsO1xuICB1c2VyTGlzdFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcbiAgdG90YWxJdGVtcyA9IDA7XG4gIGl0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICBwYWdlITogbnVtYmVyO1xuICBwcmVkaWNhdGUhOiBzdHJpbmc7XG4gIHByZXZpb3VzUGFnZSE6IG51bWJlcjtcbiAgYXNjZW5kaW5nITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGFcbiAgICAgIC5waXBlKFxuICAgICAgICBmbGF0TWFwKFxuICAgICAgICAgICgpID0+IHRoaXMuYWNjb3VudFNlcnZpY2UuaWRlbnRpdHkoKSxcbiAgICAgICAgICAoZGF0YSwgYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlID0gZGF0YS5wYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gZGF0YS5wYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgICAgIHRoaXMuYXNjZW5kaW5nID0gZGF0YS5wYWdpbmdQYXJhbXMuYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhLnBhZ2luZ1BhcmFtcy5wcmVkaWNhdGU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdFN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgndXNlckxpc3RNb2RpZmljYXRpb24nLCAoKSA9PiB0aGlzLmxvYWRBbGwoKSk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VyTGlzdFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLnVzZXJMaXN0U3Vic2NyaXB0aW9uKTtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmUodXNlcjogVXNlciwgaXNBY3RpdmF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh7IC4uLnVzZXIsIGFjdGl2YXRlZDogaXNBY3RpdmF0ZWQgfSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZEFsbCgpKTtcbiAgfVxuXG4gIHRyYWNrSWRlbnRpdHkoaW5kZXg6IG51bWJlciwgaXRlbTogVXNlcik6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBsb2FkUGFnZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAocGFnZSAhPT0gdGhpcy5wcmV2aW91c1BhZ2UpIHtcbiAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gcGFnZTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLyddLCB7XG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmVudCxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5hc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxvYWRBbGwoKTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXIodXNlcjogVXNlcik6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihVc2VyTWFuYWdlbWVudERlbGV0ZURpYWxvZ0NvbXBvbmVudCwgeyBzaXplOiAnbGcnLCBiYWNrZHJvcDogJ3N0YXRpYycgfSk7XG4gICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudXNlciA9IHVzZXI7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcGFnZTogdGhpcy5wYWdlIC0gMSxcbiAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgIHNvcnQ6IHRoaXMuc29ydCgpXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8VXNlcltdPikgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmJvZHksIHJlcy5oZWFkZXJzKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnQoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFt0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLmFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgb25TdWNjZXNzKHVzZXJzOiBVc2VyW10gfCBudWxsLCBoZWFkZXJzOiBIdHRwSGVhZGVycyk6IHZvaWQge1xuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcihoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpKTtcbiAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==