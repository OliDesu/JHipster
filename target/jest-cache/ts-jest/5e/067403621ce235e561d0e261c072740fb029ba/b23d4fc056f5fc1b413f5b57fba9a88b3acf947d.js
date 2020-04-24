"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ngx_webstorage_1 = require("ngx-webstorage");
const app_constants_1 = require("app/app.constants");
let AuthServerProvider = class AuthServerProvider {
    constructor(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken') || '';
    }
    login(credentials) {
        return this.http
            .post(app_constants_1.SERVER_API_URL + 'api/authenticate', credentials)
            .pipe(operators_1.map(response => this.authenticateSuccess(response, credentials.rememberMe)));
    }
    logout() {
        return new rxjs_1.Observable(observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }
    authenticateSuccess(response, rememberMe) {
        const jwt = response.id_token;
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }
};
AuthServerProvider = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEyQztBQUMzQywrQ0FBa0Q7QUFDbEQsK0JBQWtDO0FBQ2xDLDhDQUFxQztBQUNyQyxtREFBNEU7QUFFNUUscURBQW1EO0FBUW5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9CLElBQWdCLEVBQVUsYUFBa0MsRUFBVSxlQUFzQztRQUE1RyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQUcsQ0FBQztJQUVwSSxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFILENBQUM7SUFFRCxLQUFLLENBQUMsV0FBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBVyw4QkFBYyxHQUFHLGtCQUFrQixFQUFFLFdBQVcsQ0FBQzthQUNoRSxJQUFJLENBQUMsZUFBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLGlCQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxRQUFrQixFQUFFLFVBQW1CO1FBQ2pFLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTdCWSxrQkFBa0I7SUFEOUIsaUJBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FFUCxpQkFBVSxFQUF5QixvQ0FBbUIsRUFBMkIsc0NBQXFCO0dBRHJILGtCQUFrQixDQTZCOUI7QUE3QlksZ0RBQWtCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9jb3JlL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmd4LXdlYnN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBTRVJWRVJfQVBJX1VSTCB9IGZyb20gJ2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnYXBwL2NvcmUvbG9naW4vbG9naW4ubW9kZWwnO1xuXG50eXBlIEp3dFRva2VuID0ge1xuICBpZF90b2tlbjogc3RyaW5nO1xufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmVyUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgJGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSkge31cblxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpIHx8ICcnO1xuICB9XG5cbiAgbG9naW4oY3JlZGVudGlhbHM6IExvZ2luKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Snd0VG9rZW4+KFNFUlZFUl9BUElfVVJMICsgJ2FwaS9hdXRoZW50aWNhdGUnLCBjcmVkZW50aWFscylcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiB0aGlzLmF1dGhlbnRpY2F0ZVN1Y2Nlc3MocmVzcG9uc2UsIGNyZWRlbnRpYWxzLnJlbWVtYmVyTWUpKSk7XG4gIH1cblxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF1dGhlbnRpY2F0ZVN1Y2Nlc3MocmVzcG9uc2U6IEp3dFRva2VuLCByZW1lbWJlck1lOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgand0ID0gcmVzcG9uc2UuaWRfdG9rZW47XG4gICAgaWYgKHJlbWVtYmVyTWUpIHtcbiAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5zdG9yZSgnYXV0aGVudGljYXRpb25Ub2tlbicsIGp3dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==