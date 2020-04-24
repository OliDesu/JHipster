"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const account_service_1 = require("app/core/auth/account.service");
const password_service_1 = require("./password.service");
let PasswordComponent = class PasswordComponent {
    constructor(passwordService, accountService, fb) {
        this.passwordService = passwordService;
        this.accountService = accountService;
        this.fb = fb;
        this.doNotMatch = false;
        this.error = false;
        this.success = false;
        this.passwordForm = this.fb.group({
            currentPassword: ['', [forms_1.Validators.required]],
            newPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
            confirmPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]]
        });
    }
    ngOnInit() {
        this.account$ = this.accountService.identity();
    }
    changePassword() {
        this.error = false;
        this.success = false;
        this.doNotMatch = false;
        const newPassword = this.passwordForm.get(['newPassword']).value;
        if (newPassword !== this.passwordForm.get(['confirmPassword']).value) {
            this.doNotMatch = true;
        }
        else {
            this.passwordService.save(newPassword, this.passwordForm.get(['currentPassword']).value).subscribe(() => (this.success = true), () => (this.error = true));
        }
    }
};
PasswordComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: require('./password.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [password_service_1.PasswordService, account_service_1.AccountService, forms_1.FormBuilder])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFHekQsbUVBQStEO0FBRS9ELHlEQUFxRDtBQU1yRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQVc1QixZQUFvQixlQUFnQyxFQUFVLGNBQThCLEVBQVUsRUFBZTtRQUFqRyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBVnJILGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUJBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0YsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRyxDQUFDLENBQUM7SUFFcUgsQ0FBQztJQUV6SCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUNsRSxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQ2pHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFDM0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUMxQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWhDWSxpQkFBaUI7SUFKN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGtCQUFhLDJCQUEyQixDQUFBO0tBQ3pDLENBQUM7NkNBWXFDLGtDQUFlLEVBQTBCLGdDQUFjLEVBQWMsbUJBQVc7R0FYMUcsaUJBQWlCLENBZ0M3QjtBQWhDWSw4Q0FBaUIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9hdXRoL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnYXBwL2NvcmUvdXNlci9hY2NvdW50Lm1vZGVsJztcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4vcGFzc3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkb05vdE1hdGNoID0gZmFsc2U7XG4gIGVycm9yID0gZmFsc2U7XG4gIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgYWNjb3VudCQ/OiBPYnNlcnZhYmxlPEFjY291bnQgfCBudWxsPjtcbiAgcGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgY3VycmVudFBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgbmV3UGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldXSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldXVxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLCBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY2NvdW50JCA9IHRoaXMuYWNjb3VudFNlcnZpY2UuaWRlbnRpdHkoKTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmRvTm90TWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gdGhpcy5wYXNzd29yZEZvcm0uZ2V0KFsnbmV3UGFzc3dvcmQnXSkhLnZhbHVlO1xuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gdGhpcy5wYXNzd29yZEZvcm0uZ2V0KFsnY29uZmlybVBhc3N3b3JkJ10pIS52YWx1ZSkge1xuICAgICAgdGhpcy5kb05vdE1hdGNoID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXNzd29yZFNlcnZpY2Uuc2F2ZShuZXdQYXNzd29yZCwgdGhpcy5wYXNzd29yZEZvcm0uZ2V0KFsnY3VycmVudFBhc3N3b3JkJ10pIS52YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiAodGhpcy5zdWNjZXNzID0gdHJ1ZSksXG4gICAgICAgICgpID0+ICh0aGlzLmVycm9yID0gdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXSwidmVyc2lvbiI6M30=