"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const login_component_1 = require("app/shared/login/login.component");
let LoginModalService = class LoginModalService {
    constructor(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    open() {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(login_component_1.LoginModalComponent);
        modalRef.result.finally(() => (this.isOpen = false));
    }
};
LoginModalService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvbG9naW4vbG9naW4tbW9kYWwuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0MsNkRBQW1FO0FBRW5FLHNFQUF1RTtBQUd2RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUc1QixZQUFvQixZQUFzQjtRQUF0QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUZsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRXNCLENBQUM7SUFFOUMsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQ0FBbUIsQ0FBQyxDQUFDO1FBQzFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRixDQUFBO0FBYlksaUJBQWlCO0lBRDdCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBSUMsdUJBQVE7R0FIL0IsaUJBQWlCLENBYTdCO0FBYlksOENBQWlCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9jb3JlL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHt9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIGNvbnN0IG1vZGFsUmVmOiBOZ2JNb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTG9naW5Nb2RhbENvbXBvbmVudCk7XG4gICAgbW9kYWxSZWYucmVzdWx0LmZpbmFsbHkoKCkgPT4gKHRoaXMuaXNPcGVuID0gZmFsc2UpKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9