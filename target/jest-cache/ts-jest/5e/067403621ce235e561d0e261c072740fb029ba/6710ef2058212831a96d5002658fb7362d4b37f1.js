"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const password_reset_init_service_1 = require("./password-reset-init.service");
let PasswordResetInitComponent = class PasswordResetInitComponent {
    constructor(passwordResetInitService, fb) {
        this.passwordResetInitService = passwordResetInitService;
        this.fb = fb;
        this.success = false;
        this.resetRequestForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(254), forms_1.Validators.email]]
        });
    }
    ngAfterViewInit() {
        if (this.email) {
            this.email.nativeElement.focus();
        }
    }
    requestReset() {
        this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(() => (this.success = true));
    }
};
tslib_1.__decorate([
    core_1.ViewChild('email', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], PasswordResetInitComponent.prototype, "email", void 0);
PasswordResetInitComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: require('./password-reset-init.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInitService, forms_1.FormBuilder])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBZ0Y7QUFDaEYsMENBQXlEO0FBRXpELCtFQUF5RTtBQU16RSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVNyQyxZQUFvQix3QkFBa0QsRUFBVSxFQUFlO1FBQTNFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBTC9GLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6RyxDQUFDLENBQUM7SUFFK0YsQ0FBQztJQUVuRyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pILENBQUM7Q0FDRixDQUFBO0FBbEJDO0lBREMsZ0JBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQzlCLGlCQUFVO3lEQUFDO0FBRlIsMEJBQTBCO0lBSnRDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLGtCQUFhLHNDQUFzQyxDQUFBO0tBQ3BELENBQUM7NkNBVThDLHNEQUF3QixFQUFjLG1CQUFXO0dBVHBGLDBCQUEwQixDQW9CdEM7QUFwQlksZ0VBQTBCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2UgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1pbml0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2VtYWlsJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGVtYWlsPzogRWxlbWVudFJlZjtcblxuICBzdWNjZXNzID0gZmFsc2U7XG4gIHJlc2V0UmVxdWVzdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NCksIFZhbGlkYXRvcnMuZW1haWxdXVxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhc3N3b3JkUmVzZXRJbml0U2VydmljZTogUGFzc3dvcmRSZXNldEluaXRTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW1haWwpIHtcbiAgICAgIHRoaXMuZW1haWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RSZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhc3N3b3JkUmVzZXRJbml0U2VydmljZS5zYXZlKHRoaXMucmVzZXRSZXF1ZXN0Rm9ybS5nZXQoWydlbWFpbCddKSEudmFsdWUpLnN1YnNjcmliZSgoKSA9PiAodGhpcy5zdWNjZXNzID0gdHJ1ZSkpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=