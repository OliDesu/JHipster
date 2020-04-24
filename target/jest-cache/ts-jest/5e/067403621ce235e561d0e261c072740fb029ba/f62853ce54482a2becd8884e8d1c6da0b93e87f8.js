"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const password_component_1 = require("app/account/password/password.component");
const password_service_1 = require("app/account/password/password.service");
describe('Component Tests', () => {
    describe('PasswordComponent', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [password_component_1.PasswordComponent],
                providers: [forms_1.FormBuilder]
            })
                .overrideTemplate(password_component_1.PasswordComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(password_component_1.PasswordComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(password_service_1.PasswordService);
        });
        it('should show error if passwords do not match', () => {
            // GIVEN
            comp.passwordForm.patchValue({
                newPassword: 'password1',
                confirmPassword: 'password2'
            });
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBe(true);
            expect(comp.error).toBe(false);
            expect(comp.success).toBe(false);
        });
        it('should call Auth.changePassword when passwords match', () => {
            // GIVEN
            const passwordValues = {
                currentPassword: 'oldPassword',
                newPassword: 'myPassword'
            };
            spyOn(service, 'save').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: true })));
            comp.passwordForm.patchValue({
                currentPassword: passwordValues.currentPassword,
                newPassword: passwordValues.newPassword,
                confirmPassword: passwordValues.newPassword
            });
            // WHEN
            comp.changePassword();
            // THEN
            expect(service.save).toHaveBeenCalledWith(passwordValues.newPassword, passwordValues.currentPassword);
        });
        it('should set success to true upon success', () => {
            // GIVEN
            spyOn(service, 'save').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: true })));
            comp.passwordForm.patchValue({
                newPassword: 'myPassword',
                confirmPassword: 'myPassword'
            });
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBe(false);
            expect(comp.error).toBe(false);
            expect(comp.success).toBe(true);
        });
        it('should notify of error if change password fails', () => {
            // GIVEN
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError('ERROR'));
            comp.passwordForm.patchValue({
                newPassword: 'myPassword',
                confirmPassword: 'myPassword'
            });
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBe(false);
            expect(comp.success).toBe(false);
            expect(comp.error).toBe(true);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUU7QUFDekUsK0NBQW9EO0FBQ3BELDBDQUE2QztBQUM3QywrQkFBc0M7QUFFdEMsc0RBQTJEO0FBQzNELGdGQUE0RTtBQUM1RSw0RUFBd0U7QUFFeEUsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLElBQUksSUFBdUIsQ0FBQztRQUM1QixJQUFJLE9BQTRDLENBQUM7UUFDakQsSUFBSSxPQUF3QixDQUFDO1FBRTdCLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQzthQUN6QixDQUFDO2lCQUNDLGdCQUFnQixDQUFDLHNDQUFpQixFQUFFLEVBQUUsQ0FBQztpQkFDdkMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxzQ0FBaUIsQ0FBQyxDQUFDO1lBQ3JELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQ0FBZSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsR0FBRyxFQUFFO1lBQ3JELFFBQVE7WUFDUixJQUFJLENB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QUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIGFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gJ2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUGFzc3dvcmRDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFBhc3N3b3JkQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFBhc3N3b3JkQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogUGFzc3dvcmRTZXJ2aWNlO1xuXG4gICAgYmVmb3JlRWFjaChhc3luYygoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbQ29vcGN5Y2xlVGVzdE1vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Bhc3N3b3JkQ29tcG9uZW50XSxcbiAgICAgICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXJdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShQYXNzd29yZENvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgIH0pKTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFBhc3N3b3JkQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChQYXNzd29yZFNlcnZpY2UpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBzaG93IGVycm9yIGlmIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLCAoKSA9PiB7XG4gICAgICAvLyBHSVZFTlxuICAgICAgY29tcC5wYXNzd29yZEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIG5ld1Bhc3N3b3JkOiAncGFzc3dvcmQxJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAncGFzc3dvcmQyJ1xuICAgICAgfSk7XG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLmNoYW5nZVBhc3N3b3JkKCk7XG4gICAgICAvLyBUSEVOXG4gICAgICBleHBlY3QoY29tcC5kb05vdE1hdGNoKS50b0JlKHRydWUpO1xuICAgICAgZXhwZWN0KGNvbXAuZXJyb3IpLnRvQmUoZmFsc2UpO1xuICAgICAgZXhwZWN0KGNvbXAuc3VjY2VzcykudG9CZShmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGNhbGwgQXV0aC5jaGFuZ2VQYXNzd29yZCB3aGVuIHBhc3N3b3JkcyBtYXRjaCcsICgpID0+IHtcbiAgICAgIC8vIEdJVkVOXG4gICAgICBjb25zdCBwYXNzd29yZFZhbHVlcyA9IHtcbiAgICAgICAgY3VycmVudFBhc3N3b3JkOiAnb2xkUGFzc3dvcmQnLFxuICAgICAgICBuZXdQYXNzd29yZDogJ215UGFzc3dvcmQnXG4gICAgICB9O1xuXG4gICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZShvZihuZXcgSHR0cFJlc3BvbnNlKHsgYm9keTogdHJ1ZSB9KSkpO1xuXG4gICAgICBjb21wLnBhc3N3b3JkRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgY3VycmVudFBhc3N3b3JkOiBwYXNzd29yZFZhbHVlcy5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBwYXNzd29yZFZhbHVlcy5uZXdQYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBwYXNzd29yZFZhbHVlcy5uZXdQYXNzd29yZFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFdIRU5cbiAgICAgIGNvbXAuY2hhbmdlUGFzc3dvcmQoKTtcblxuICAgICAgLy8gVEhFTlxuICAgICAgZXhwZWN0KHNlcnZpY2Uuc2F2ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgocGFzc3dvcmRWYWx1ZXMubmV3UGFzc3dvcmQsIHBhc3N3b3JkVmFsdWVzLmN1cnJlbnRQYXNzd29yZCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHNldCBzdWNjZXNzIHRvIHRydWUgdXBvbiBzdWNjZXNzJywgKCkgPT4ge1xuICAgICAgLy8gR0lWRU5cbiAgICAgIHNweU9uKHNlcnZpY2UsICdzYXZlJykuYW5kLnJldHVyblZhbHVlKG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBib2R5OiB0cnVlIH0pKSk7XG4gICAgICBjb21wLnBhc3N3b3JkRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgbmV3UGFzc3dvcmQ6ICdteVBhc3N3b3JkJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnbXlQYXNzd29yZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLmNoYW5nZVBhc3N3b3JkKCk7XG5cbiAgICAgIC8vIFRIRU5cbiAgICAgIGV4cGVjdChjb21wLmRvTm90TWF0Y2gpLnRvQmUoZmFsc2UpO1xuICAgICAgZXhwZWN0KGNvbXAuZXJyb3IpLnRvQmUoZmFsc2UpO1xuICAgICAgZXhwZWN0KGNvbXAuc3VjY2VzcykudG9CZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbm90aWZ5IG9mIGVycm9yIGlmIGNoYW5nZSBwYXNzd29yZCBmYWlscycsICgpID0+IHtcbiAgICAgIC8vIEdJVkVOXG4gICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZSh0aHJvd0Vycm9yKCdFUlJPUicpKTtcbiAgICAgIGNvbXAucGFzc3dvcmRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICBuZXdQYXNzd29yZDogJ215UGFzc3dvcmQnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICdteVBhc3N3b3JkJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdIRU5cbiAgICAgIGNvbXAuY2hhbmdlUGFzc3dvcmQoKTtcblxuICAgICAgLy8gVEhFTlxuICAgICAgZXhwZWN0KGNvbXAuZG9Ob3RNYXRjaCkudG9CZShmYWxzZSk7XG4gICAgICBleHBlY3QoY29tcC5zdWNjZXNzKS50b0JlKGZhbHNlKTtcbiAgICAgIGV4cGVjdChjb21wLmVycm9yKS50b0JlKHRydWUpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9