"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const ng_jhipster_1 = require("ng-jhipster");
const ngx_webstorage_1 = require("ngx-webstorage");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const state_storage_service_1 = require("app/core/auth/state-storage.service");
const app_constants_1 = require("app/app.constants");
let AccountService = class AccountService {
    constructor(languageService, sessionStorage, http, stateStorageService, router) {
        this.languageService = languageService;
        this.sessionStorage = sessionStorage;
        this.http = http;
        this.stateStorageService = stateStorageService;
        this.router = router;
        this.userIdentity = null;
        this.authenticationState = new rxjs_1.ReplaySubject(1);
    }
    save(account) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/account', account);
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }
    hasAnyAuthority(authorities) {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority) => authorities.includes(authority));
    }
    identity(force) {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(operators_1.catchError(() => {
                return rxjs_1.of(null);
            }), operators_1.tap((account) => {
                this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                if (account && account.langKey) {
                    const langKey = this.sessionStorage.retrieve('locale') || account.langKey;
                    this.languageService.changeLanguage(langKey);
                }
                if (account) {
                    this.navigateToStoredUrl();
                }
            }), operators_1.shareReplay());
        }
        return this.accountCache$;
    }
    isAuthenticated() {
        return this.userIdentity !== null;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    getImageUrl() {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }
    fetch() {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/account');
    }
    navigateToStoredUrl() {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
};
AccountService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ngx_webstorage_1.SessionStorageService,
        http_1.HttpClient,
        state_storage_service_1.StateStorageService,
        router_1.Router])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTJDO0FBQzNDLDRDQUF5QztBQUN6QywrQ0FBa0Q7QUFDbEQsNkNBQWlEO0FBQ2pELG1EQUF1RDtBQUN2RCwrQkFBcUQ7QUFDckQsOENBQThEO0FBQzlELCtFQUEwRTtBQUUxRSxxREFBbUQ7QUFJbkQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUt6QixZQUNVLGVBQW1DLEVBQ25DLGNBQXFDLEVBQ3JDLElBQWdCLEVBQ2hCLG1CQUF3QyxFQUN4QyxNQUFjO1FBSmQsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRoQixpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxvQkFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztJQVNoRSxDQUFDO0lBRUosSUFBSSxDQUFDLE9BQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQWMsR0FBRyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQThCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDeEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9CLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLHNCQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxFQUNGLGVBQUcsQ0FBQyxDQUFDLE9BQXVCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFM0IsbUVBQW1FO2dCQUNuRSxrRUFBa0U7Z0JBQ2xFLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQzFFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsRUFDRix1QkFBVyxFQUFFLENBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFTyxLQUFLO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSw4QkFBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsMkZBQTJGO1FBQzNGLDZFQUE2RTtRQUM3RSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEQsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5GWSxjQUFjO0lBRDFCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBT04sZ0NBQWtCO1FBQ25CLHNDQUFxQjtRQUMvQixpQkFBVTtRQUNLLDJDQUFtQjtRQUNoQyxlQUFNO0dBVmIsY0FBYyxDQW1GMUI7QUFuRlksd0NBQWMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZ3gtd2Vic3RvcmFnZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmVSZXBsYXksIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbmltcG9ydCB7IFNFUlZFUl9BUElfVVJMIH0gZnJvbSAnYXBwL2FwcC5jb25zdGFudHMnO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvYWNjb3VudC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xuICBwcml2YXRlIHVzZXJJZGVudGl0eTogQWNjb3VudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU3RhdGUgPSBuZXcgUmVwbGF5U3ViamVjdDxBY2NvdW50IHwgbnVsbD4oMSk7XG4gIHByaXZhdGUgYWNjb3VudENhY2hlJD86IE9ic2VydmFibGU8QWNjb3VudCB8IG51bGw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgc2F2ZShhY2NvdW50OiBBY2NvdW50KTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChTRVJWRVJfQVBJX1VSTCArICdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xuICB9XG5cbiAgYXV0aGVudGljYXRlKGlkZW50aXR5OiBBY2NvdW50IHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudXNlcklkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICB9XG5cbiAgaGFzQW55QXV0aG9yaXR5KGF1dGhvcml0aWVzOiBzdHJpbmdbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy51c2VySWRlbnRpdHkgfHwgIXRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShhdXRob3JpdGllcykpIHtcbiAgICAgIGF1dGhvcml0aWVzID0gW2F1dGhvcml0aWVzXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzLnNvbWUoKGF1dGhvcml0eTogc3RyaW5nKSA9PiBhdXRob3JpdGllcy5pbmNsdWRlcyhhdXRob3JpdHkpKTtcbiAgfVxuXG4gIGlkZW50aXR5KGZvcmNlPzogYm9vbGVhbik6IE9ic2VydmFibGU8QWNjb3VudCB8IG51bGw+IHtcbiAgICBpZiAoIXRoaXMuYWNjb3VudENhY2hlJCB8fCBmb3JjZSB8fCAhdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdGhpcy5hY2NvdW50Q2FjaGUkID0gdGhpcy5mZXRjaCgpLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCgoYWNjb3VudDogQWNjb3VudCB8IG51bGwpID0+IHtcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZShhY2NvdW50KTtcblxuICAgICAgICAgIC8vIEFmdGVyIHJldHJpZXZlIHRoZSBhY2NvdW50IGluZm8sIHRoZSBsYW5ndWFnZSB3aWxsIGJlIGNoYW5nZWQgdG9cbiAgICAgICAgICAvLyB0aGUgdXNlcidzIHByZWZlcnJlZCBsYW5ndWFnZSBjb25maWd1cmVkIGluIHRoZSBhY2NvdW50IHNldHRpbmdcbiAgICAgICAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LmxhbmdLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhbmdLZXkgPSB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdsb2NhbGUnKSB8fCBhY2NvdW50LmxhbmdLZXk7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5jaGFuZ2VMYW5ndWFnZShsYW5nS2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvU3RvcmVkVXJsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWNjb3VudENhY2hlJDtcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgIT09IG51bGw7XG4gIH1cblxuICBnZXRBdXRoZW50aWNhdGlvblN0YXRlKCk6IE9ic2VydmFibGU8QWNjb3VudCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0SW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgPyB0aGlzLnVzZXJJZGVudGl0eS5pbWFnZVVybCA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaCgpOiBPYnNlcnZhYmxlPEFjY291bnQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxBY2NvdW50PihTRVJWRVJfQVBJX1VSTCArICdhcGkvYWNjb3VudCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0ZVRvU3RvcmVkVXJsKCk6IHZvaWQge1xuICAgIC8vIHByZXZpb3VzU3RhdGUgY2FuIGJlIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBhbmQgaW4gdGhlIHVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VcbiAgICAvLyBpZiBsb2dpbiBpcyBzdWNjZXNzZnVsLCBnbyB0byBzdG9yZWQgcHJldmlvdXNTdGF0ZSBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZVxuICAgIGNvbnN0IHByZXZpb3VzVXJsID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFVybCgpO1xuICAgIGlmIChwcmV2aW91c1VybCkge1xuICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmNsZWFyVXJsKCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHByZXZpb3VzVXJsKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==