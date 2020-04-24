"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const app_constants_1 = require("app/app.constants");
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    save(account) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/register', account);
    }
};
RegisterService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0MsK0NBQWtEO0FBR2xELHFEQUFtRDtBQUluRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBQzFCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDLElBQUksQ0FBQyxPQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQWMsR0FBRyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNGLENBQUE7QUFOWSxlQUFlO0lBRDNCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBRVAsaUJBQVU7R0FEekIsZUFBZSxDQU0zQjtBQU5ZLDBDQUFlIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkwgfSBmcm9tICdhcHAvYXBwLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvdXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHNhdmUoYWNjb3VudDogSVVzZXIpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFNFUlZFUl9BUElfVVJMICsgJ2FwaS9yZWdpc3RlcicsIGFjY291bnQpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=