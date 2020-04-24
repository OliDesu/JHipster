"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const router_1 = require("@angular/router");
const login_service_1 = require("app/core/login/login.service");
let LoginModalComponent = class LoginModalComponent {
    constructor(loginService, router, activeModal, fb) {
        this.loginService = loginService;
        this.router = router;
        this.activeModal = activeModal;
        this.fb = fb;
        this.authenticationError = false;
        this.loginForm = this.fb.group({
            username: [''],
            password: [''],
            rememberMe: [false]
        });
    }
    ngAfterViewInit() {
        if (this.username) {
            this.username.nativeElement.focus();
        }
    }
    cancel() {
        this.authenticationError = false;
        this.loginForm.patchValue({
            username: '',
            password: ''
        });
        this.activeModal.dismiss('cancel');
    }
    login() {
        this.loginService
            .login({
            username: this.loginForm.get('username').value,
            password: this.loginForm.get('password').value,
            rememberMe: this.loginForm.get('rememberMe').value
        })
            .subscribe(() => {
            this.authenticationError = false;
            this.activeModal.close();
            if (this.router.url === '/account/register' ||
                this.router.url.startsWith('/account/activate') ||
                this.router.url.startsWith('/account/reset/')) {
                this.router.navigate(['']);
            }
        }, () => (this.authenticationError = true));
    }
    register() {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/account/register']);
    }
    requestResetPassword() {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/account/reset', 'request']);
    }
};
tslib_1.__decorate([
    core_1.ViewChild('username', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], LoginModalComponent.prototype, "username", void 0);
LoginModalComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: require('./login.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder])
], LoginModalComponent);
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWdGO0FBQ2hGLDBDQUE2QztBQUM3Qyw2REFBNEQ7QUFDNUQsNENBQXlDO0FBRXpDLGdFQUE0RDtBQU01RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVk5QixZQUFvQixZQUEwQixFQUFVLE1BQWMsRUFBUyxXQUEyQixFQUFVLEVBQWU7UUFBL0csaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVJuSSx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFNUIsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDLENBQUM7SUFFbUksQ0FBQztJQUV2SSxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZO2FBQ2QsS0FBSyxDQUFDO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxDQUFDLEtBQUs7WUFDL0MsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxDQUFDLEtBQUs7WUFDL0MsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUs7U0FDcEQsQ0FBQzthQUNELFNBQVMsQ0FDUixHQUFHLEVBQUU7WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxtQkFBbUI7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQzdDO2dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsRUFDRCxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FDeEMsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBO0FBM0RDO0lBREMsZ0JBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQzlCLGlCQUFVO3FEQUFDO0FBRlgsbUJBQW1CO0lBSi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGtCQUFhLHdCQUF3QixDQUFBO0tBQ3RDLENBQUM7NkNBYWtDLDRCQUFZLEVBQWtCLGVBQU0sRUFBc0IsNkJBQWMsRUFBYyxtQkFBVztHQVp4SCxtQkFBbUIsQ0E2RC9CO0FBN0RZLGtEQUFtQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktbG9naW4tbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndXNlcm5hbWUnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdXNlcm5hbWU/OiBFbGVtZW50UmVmO1xuXG4gIGF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcblxuICBsb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB1c2VybmFtZTogWycnXSxcbiAgICBwYXNzd29yZDogWycnXSxcbiAgICByZW1lbWJlck1lOiBbZmFsc2VdXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VybmFtZSkge1xuICAgICAgdGhpcy51c2VybmFtZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgIHRoaXMubG9naW5Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMubG9naW5TZXJ2aWNlXG4gICAgICAubG9naW4oe1xuICAgICAgICB1c2VybmFtZTogdGhpcy5sb2dpbkZvcm0uZ2V0KCd1c2VybmFtZScpIS52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKSEudmFsdWUsXG4gICAgICAgIHJlbWVtYmVyTWU6IHRoaXMubG9naW5Gb3JtLmdldCgncmVtZW1iZXJNZScpIS52YWx1ZVxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsID09PSAnL2FjY291bnQvcmVnaXN0ZXInIHx8XG4gICAgICAgICAgICB0aGlzLnJvdXRlci51cmwuc3RhcnRzV2l0aCgnL2FjY291bnQvYWN0aXZhdGUnKSB8fFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsLnN0YXJ0c1dpdGgoJy9hY2NvdW50L3Jlc2V0LycpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+ICh0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSB0cnVlKVxuICAgICAgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVnaXN0ZXInKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L3JlZ2lzdGVyJ10pO1xuICB9XG5cbiAgcmVxdWVzdFJlc2V0UGFzc3dvcmQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCd0byBzdGF0ZSByZXF1ZXN0UmVzZXQnKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==