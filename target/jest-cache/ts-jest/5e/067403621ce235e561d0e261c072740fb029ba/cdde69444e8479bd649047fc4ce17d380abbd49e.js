"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const account_service_1 = require("app/core/auth/account.service");
const auth_jwt_service_1 = require("app/core/auth/auth-jwt.service");
let LoginService = class LoginService {
    constructor(accountService, authServerProvider) {
        this.accountService = accountService;
        this.authServerProvider = authServerProvider;
    }
    login(credentials) {
        return this.authServerProvider.login(credentials).pipe(operators_1.flatMap(() => this.accountService.identity(true)));
    }
    logout() {
        this.authServerProvider.logout().subscribe(null, null, () => this.accountService.authenticate(null));
    }
};
LoginService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvbG9naW4vbG9naW4uc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFFM0MsOENBQXlDO0FBR3pDLG1FQUErRDtBQUMvRCxxRUFBb0U7QUFJcEUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUFvQixjQUE4QixFQUFVLGtCQUFzQztRQUE5RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUcsQ0FBQztJQUV0RyxLQUFLLENBQUMsV0FBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Q0FDRixDQUFBO0FBVlksWUFBWTtJQUR4QixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZDQUVHLGdDQUFjLEVBQThCLHFDQUFrQjtHQUR2RixZQUFZLENBVXhCO0FBVlksb0NBQVkiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnYXBwL2NvcmUvdXNlci9hY2NvdW50Lm1vZGVsJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvYXV0aC9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZlclByb3ZpZGVyIH0gZnJvbSAnYXBwL2NvcmUvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi9sb2dpbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZlclByb3ZpZGVyOiBBdXRoU2VydmVyUHJvdmlkZXIpIHt9XG5cbiAgbG9naW4oY3JlZGVudGlhbHM6IExvZ2luKTogT2JzZXJ2YWJsZTxBY2NvdW50IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dpbihjcmVkZW50aWFscykucGlwZShmbGF0TWFwKCgpID0+IHRoaXMuYWNjb3VudFNlcnZpY2UuaWRlbnRpdHkodHJ1ZSkpKTtcbiAgfVxuXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dvdXQoKS5zdWJzY3JpYmUobnVsbCwgbnVsbCwgKCkgPT4gdGhpcy5hY2NvdW50U2VydmljZS5hdXRoZW50aWNhdGUobnVsbCkpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=