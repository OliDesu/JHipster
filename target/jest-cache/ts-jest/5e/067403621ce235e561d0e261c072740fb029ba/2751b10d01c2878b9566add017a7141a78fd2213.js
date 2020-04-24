"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_jhipster_1 = require("ng-jhipster");
const error_constants_1 = require("app/shared/constants/error.constants");
const login_modal_service_1 = require("app/core/login/login-modal.service");
const register_service_1 = require("./register.service");
let RegisterComponent = class RegisterComponent {
    constructor(languageService, loginModalService, registerService, fb) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.fb = fb;
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        this.success = false;
        this.registerForm = this.fb.group({
            login: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50), forms_1.Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(254), forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
            confirmPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]]
        });
    }
    ngAfterViewInit() {
        if (this.login) {
            this.login.nativeElement.focus();
        }
    }
    register() {
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        const password = this.registerForm.get(['password']).value;
        if (password !== this.registerForm.get(['confirmPassword']).value) {
            this.doNotMatch = true;
        }
        else {
            const login = this.registerForm.get(['login']).value;
            const email = this.registerForm.get(['email']).value;
            this.registerService.save({ login, email, password, langKey: this.languageService.getCurrentLanguage() }).subscribe(() => (this.success = true), response => this.processError(response));
        }
    }
    openLogin() {
        this.loginModalService.open();
    }
    processError(response) {
        if (response.status === 400 && response.error.type === error_constants_1.LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = true;
        }
        else if (response.status === 400 && response.error.type === error_constants_1.EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = true;
        }
        else {
            this.error = true;
        }
    }
};
tslib_1.__decorate([
    core_1.ViewChild('login', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], RegisterComponent.prototype, "login", void 0);
RegisterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: require('./register.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        login_modal_service_1.LoginModalService,
        register_service_1.RegisterService,
        forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFnRjtBQUVoRiwwQ0FBeUQ7QUFDekQsNkNBQWlEO0FBRWpELDBFQUF3RztBQUN4Ryw0RUFBdUU7QUFDdkUseURBQXFEO0FBTXJELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBaUI1QixZQUNVLGVBQW1DLEVBQ25DLGlCQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxFQUFlO1FBSGYsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFqQnpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQy9ILEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFVLENBQUMsS0FBSyxDQUFD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QUFrQjtRQUNoQix1Q0FBaUI7UUFDbkIsa0NBQWU7UUFDNUIsbUJBQVc7R0FyQmQsaUJBQWlCLENBOEQ3QjtBQTlEWSw4Q0FBaUIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBFTUFJTF9BTFJFQURZX1VTRURfVFlQRSwgTE9HSU5fQUxSRUFEWV9VU0VEX1RZUEUgfSBmcm9tICdhcHAvc2hhcmVkL2NvbnN0YW50cy9lcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4vcmVnaXN0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbG9naW4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgbG9naW4/OiBFbGVtZW50UmVmO1xuXG4gIGRvTm90TWF0Y2ggPSBmYWxzZTtcbiAgZXJyb3IgPSBmYWxzZTtcbiAgZXJyb3JFbWFpbEV4aXN0cyA9IGZhbHNlO1xuICBlcnJvclVzZXJFeGlzdHMgPSBmYWxzZTtcbiAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIHJlZ2lzdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGxvZ2luOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApLCBWYWxpZGF0b3JzLnBhdHRlcm4oJ15bXy5AQS1aYS16MC05LV0qJCcpXV0sXG4gICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTQpLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldXSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldXVxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVnaXN0ZXJTZXJ2aWNlOiBSZWdpc3RlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2dpbikge1xuICAgICAgdGhpcy5sb2dpbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb05vdE1hdGNoID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JFbWFpbEV4aXN0cyA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMucmVnaXN0ZXJGb3JtLmdldChbJ3Bhc3N3b3JkJ10pIS52YWx1ZTtcbiAgICBpZiAocGFzc3dvcmQgIT09IHRoaXMucmVnaXN0ZXJGb3JtLmdldChbJ2NvbmZpcm1QYXNzd29yZCddKSEudmFsdWUpIHtcbiAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvZ2luID0gdGhpcy5yZWdpc3RlckZvcm0uZ2V0KFsnbG9naW4nXSkhLnZhbHVlO1xuICAgICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoWydlbWFpbCddKSEudmFsdWU7XG4gICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5zYXZlKHsgbG9naW4sIGVtYWlsLCBwYXNzd29yZCwgbGFuZ0tleTogdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0Q3VycmVudExhbmd1YWdlKCkgfSkuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiAodGhpcy5zdWNjZXNzID0gdHJ1ZSksXG4gICAgICAgIHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTG9naW4oKTogdm9pZCB7XG4gICAgdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NFcnJvcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuZXJyb3IudHlwZSA9PT0gTE9HSU5fQUxSRUFEWV9VU0VEX1RZUEUpIHtcbiAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLmVycm9yLnR5cGUgPT09IEVNQUlMX0FMUkVBRFlfVVNFRF9UWVBFKSB7XG4gICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==