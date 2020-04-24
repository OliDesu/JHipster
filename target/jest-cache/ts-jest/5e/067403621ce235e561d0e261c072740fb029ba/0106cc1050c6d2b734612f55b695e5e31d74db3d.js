"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const app_constants_1 = require("app/app.constants");
let ActivateService = class ActivateService {
    constructor(http) {
        this.http = http;
    }
    get(key) {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/activate', {
            params: new http_1.HttpParams().set('key', key)
        });
    }
};
ActivateService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], ActivateService);
exports.ActivateService = ActivateService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0MsK0NBQThEO0FBRzlELHFEQUFtRDtBQUduRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBQzFCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw4QkFBYyxHQUFHLGNBQWMsRUFBRTtZQUNwRCxNQUFNLEVBQUUsSUFBSSxpQkFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFSWSxlQUFlO0lBRDNCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBRVAsaUJBQVU7R0FEekIsZUFBZSxDQVEzQjtBQVJZLDBDQUFlIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkwgfSBmcm9tICdhcHAvYXBwLmNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChTRVJWRVJfQVBJX1VSTCArICdhcGkvYWN0aXZhdGUnLCB7XG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdrZXknLCBrZXkpXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==