"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_jhipster_1 = require("ng-jhipster");
const account_service_1 = require("app/core/auth/account.service");
const language_constants_1 = require("app/core/language/language.constants");
let SettingsComponent = class SettingsComponent {
    constructor(accountService, fb, languageService) {
        this.accountService = accountService;
        this.fb = fb;
        this.languageService = languageService;
        this.success = false;
        this.languages = language_constants_1.LANGUAGES;
        this.settingsForm = this.fb.group({
            firstName: [undefined, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]],
            lastName: [undefined, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]],
            email: [undefined, [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(254), forms_1.Validators.email]],
            langKey: [undefined]
        });
    }
    ngOnInit() {
        this.accountService.identity().subscribe(account => {
            if (account) {
                this.settingsForm.patchValue({
                    firstName: account.firstName,
                    lastName: account.lastName,
                    email: account.email,
                    langKey: account.langKey
                });
                this.account = account;
            }
        });
    }
    save() {
        this.success = false;
        this.account.firstName = this.settingsForm.get('firstName').value;
        this.account.lastName = this.settingsForm.get('lastName').value;
        this.account.email = this.settingsForm.get('email').value;
        this.account.langKey = this.settingsForm.get('langKey').value;
        this.accountService.save(this.account).subscribe(() => {
            this.success = true;
            this.accountService.authenticate(this.account);
            if (this.account.langKey !== this.languageService.getCurrentLanguage()) {
                this.languageService.changeLanguage(this.account.langKey);
            }
        });
    }
};
SettingsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: require('./settings.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder, ng_jhipster_1.JhiLanguageService])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsNkNBQWlEO0FBRWpELG1FQUErRDtBQUUvRCw2RUFBaUU7QUFNakUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFXNUIsWUFBb0IsY0FBOEIsRUFBVSxFQUFlLEVBQVUsZUFBbUM7UUFBcEcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQVR4SCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyw4QkFBUyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9GLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0csT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3JCLENBQUMsQ0FBQztJQUV3SCxDQUFDO0lBRTVILFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO29CQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7b0JBQzFCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDO1FBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUvQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUE5Q1ksaUJBQWlCO0lBSjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixrQkFBYSwyQkFBMkIsQ0FBQTtLQUN6QyxDQUFDOzZDQVlvQyxnQ0FBYyxFQUFjLG1CQUFXLEVBQTJCLGdDQUFrQjtHQVg3RyxpQkFBaUIsQ0E4QzdCO0FBOUNZLDhDQUFpQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL2F1dGgvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdhcHAvY29yZS91c2VyL2FjY291bnQubW9kZWwnO1xuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSAnYXBwL2NvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFjY291bnQhOiBBY2NvdW50O1xuICBzdWNjZXNzID0gZmFsc2U7XG4gIGxhbmd1YWdlcyA9IExBTkdVQUdFUztcbiAgc2V0dGluZ3NGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZmlyc3ROYW1lOiBbdW5kZWZpbmVkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxuICAgIGxhc3ROYW1lOiBbdW5kZWZpbmVkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxuICAgIGVtYWlsOiBbdW5kZWZpbmVkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NCksIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICBsYW5nS2V5OiBbdW5kZWZpbmVkXVxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY2NvdW50U2VydmljZS5pZGVudGl0eSgpLnN1YnNjcmliZShhY2NvdW50ID0+IHtcbiAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIGZpcnN0TmFtZTogYWNjb3VudC5maXJzdE5hbWUsXG4gICAgICAgICAgbGFzdE5hbWU6IGFjY291bnQubGFzdE5hbWUsXG4gICAgICAgICAgZW1haWw6IGFjY291bnQuZW1haWwsXG4gICAgICAgICAgbGFuZ0tleTogYWNjb3VudC5sYW5nS2V5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5hY2NvdW50LmZpcnN0TmFtZSA9IHRoaXMuc2V0dGluZ3NGb3JtLmdldCgnZmlyc3ROYW1lJykhLnZhbHVlO1xuICAgIHRoaXMuYWNjb3VudC5sYXN0TmFtZSA9IHRoaXMuc2V0dGluZ3NGb3JtLmdldCgnbGFzdE5hbWUnKSEudmFsdWU7XG4gICAgdGhpcy5hY2NvdW50LmVtYWlsID0gdGhpcy5zZXR0aW5nc0Zvcm0uZ2V0KCdlbWFpbCcpIS52YWx1ZTtcbiAgICB0aGlzLmFjY291bnQubGFuZ0tleSA9IHRoaXMuc2V0dGluZ3NGb3JtLmdldCgnbGFuZ0tleScpIS52YWx1ZTtcblxuICAgIHRoaXMuYWNjb3VudFNlcnZpY2Uuc2F2ZSh0aGlzLmFjY291bnQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmF1dGhlbnRpY2F0ZSh0aGlzLmFjY291bnQpO1xuXG4gICAgICBpZiAodGhpcy5hY2NvdW50LmxhbmdLZXkgIT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEN1cnJlbnRMYW5ndWFnZSgpKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKHRoaXMuYWNjb3VudC5sYW5nS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9