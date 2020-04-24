"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const login_modal_service_1 = require("app/core/login/login-modal.service");
const password_reset_finish_service_1 = require("./password-reset-finish.service");
let PasswordResetFinishComponent = class PasswordResetFinishComponent {
    constructor(passwordResetFinishService, loginModalService, route, fb) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.loginModalService = loginModalService;
        this.route = route;
        this.fb = fb;
        this.initialized = false;
        this.doNotMatch = false;
        this.error = false;
        this.success = false;
        this.key = '';
        this.passwordForm = this.fb.group({
            newPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
            confirmPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]]
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['key']) {
                this.key = params['key'];
            }
            this.initialized = true;
        });
    }
    ngAfterViewInit() {
        if (this.newPassword) {
            this.newPassword.nativeElement.focus();
        }
    }
    finishReset() {
        this.doNotMatch = false;
        this.error = false;
        const newPassword = this.passwordForm.get(['newPassword']).value;
        const confirmPassword = this.passwordForm.get(['confirmPassword']).value;
        if (newPassword !== confirmPassword) {
            this.doNotMatch = true;
        }
        else {
            this.passwordResetFinishService.save(this.key, newPassword).subscribe(() => (this.success = true), () => (this.error = true));
        }
    }
    login() {
        this.loginModalService.open();
    }
};
tslib_1.__decorate([
    core_1.ViewChild('newPassword', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], PasswordResetFinishComponent.prototype, "newPassword", void 0);
PasswordResetFinishComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: require('./password-reset-finish.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinishService,
        login_modal_service_1.LoginModalService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXdGO0FBQ3hGLDBDQUF5RDtBQUN6RCw0Q0FBaUQ7QUFFakQsNEVBQXVFO0FBQ3ZFLG1GQUE2RTtBQU03RSxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQWV2QyxZQUNVLDBCQUFzRCxFQUN0RCxpQkFBb0MsRUFDcEMsS0FBcUIsRUFDckIsRUFBZTtRQUhmLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBZnpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUVULGlCQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRixlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hHLENBQUMsQ0FBQztJQU9BLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFFLENBQUMsS0FBSyxDQUFDO1FBRTFFLElBQUksV0FBVyxLQUFLLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDbkUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUMzQixHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQzFCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBO0FBdkRDO0lBREMsZ0JBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQzlCLGlCQUFVO2lFQUFDO0FBRmQsNEJBQTRCO0lBSnhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLGtCQUFhLHdDQUF3QyxDQUFBO0tBQ3RELENBQUM7NkNBaUJzQywwREFBMEI7UUFDbkMsdUNBQWlCO1FBQzdCLHVCQUFjO1FBQ2pCLG1CQUFXO0dBbkJkLDRCQUE0QixDQXlEeEM7QUF6RFksb0VBQTRCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2UgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXJlc2V0LWZpbmlzaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCduZXdQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBuZXdQYXNzd29yZD86IEVsZW1lbnRSZWY7XG5cbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgZG9Ob3RNYXRjaCA9IGZhbHNlO1xuICBlcnJvciA9IGZhbHNlO1xuICBzdWNjZXNzID0gZmFsc2U7XG4gIGtleSA9ICcnO1xuXG4gIHBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIG5ld1Bhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXV0sXG4gICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXV1cbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYXNzd29yZFJlc2V0RmluaXNoU2VydmljZTogUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBpZiAocGFyYW1zWydrZXknXSkge1xuICAgICAgICB0aGlzLmtleSA9IHBhcmFtc1sna2V5J107XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZXdQYXNzd29yZCkge1xuICAgICAgdGhpcy5uZXdQYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5kb05vdE1hdGNoID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5nZXQoWyduZXdQYXNzd29yZCddKSEudmFsdWU7XG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEZvcm0uZ2V0KFsnY29uZmlybVBhc3N3b3JkJ10pIS52YWx1ZTtcblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICB0aGlzLmRvTm90TWF0Y2ggPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlLnNhdmUodGhpcy5rZXksIG5ld1Bhc3N3b3JkKS5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+ICh0aGlzLnN1Y2Nlc3MgPSB0cnVlKSxcbiAgICAgICAgKCkgPT4gKHRoaXMuZXJyb3IgPSB0cnVlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9