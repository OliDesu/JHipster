"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const login_service_1 = require("app/core/login/login.service");
const login_component_1 = require("app/shared/login/login.component");
const test_module_1 = require("../../../test.module");
const mock_login_service_1 = require("../../../helpers/mock-login.service");
describe('Component Tests', () => {
    describe('LoginComponent', () => {
        let comp;
        let fixture;
        let mockLoginService;
        let mockRouter;
        let mockActiveModal;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [login_component_1.LoginModalComponent],
                providers: [
                    forms_1.FormBuilder,
                    {
                        provide: login_service_1.LoginService,
                        useClass: mock_login_service_1.MockLoginService
                    }
                ]
            })
                .overrideTemplate(login_component_1.LoginModalComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(login_component_1.LoginModalComponent);
            comp = fixture.componentInstance;
            mockLoginService = testing_1.TestBed.get(login_service_1.LoginService);
            mockRouter = testing_1.TestBed.get(router_1.Router);
            mockActiveModal = testing_1.TestBed.get(ng_bootstrap_1.NgbActiveModal);
        });
        it('should authenticate the user', testing_1.inject([], testing_1.fakeAsync(() => {
            // GIVEN
            const credentials = {
                username: 'admin',
                password: 'admin',
                rememberMe: true
            };
            comp.loginForm.patchValue({
                username: 'admin',
                password: 'admin',
                rememberMe: true
            });
            mockLoginService.setResponse({});
            mockRouter.url = '/admin/metrics';
            // WHEN/
            comp.login();
            testing_1.tick(); // simulate async
            // THEN
            expect(comp.authenticationError).toEqual(false);
            expect(mockActiveModal.closeSpy).toHaveBeenCalled();
            expect(mockLoginService.loginSpy).toHaveBeenCalledWith(credentials);
        })));
        it('should empty the credentials upon cancel', () => {
            // GIVEN
            comp.loginForm.patchValue({
                username: 'admin',
                password: 'admin'
            });
            const expected = {
                username: '',
                password: '',
                rememberMe: false
            };
            // WHEN
            comp.cancel();
            // THEN
            expect(comp.authenticationError).toEqual(false);
            expect(comp.loginForm.get('username').value).toEqual(expected.username);
            expect(comp.loginForm.get('password').value).toEqual(expected.password);
            expect(comp.loginForm.get('rememberMe').value).toEqual(expected.rememberMe);
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('cancel');
        });
        it('should redirect user when register', () => {
            // WHEN
            comp.register();
            // THEN
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('to state register');
            expect(mockRouter.navigateSpy).toHaveBeenCalledWith(['/account/register']);
        });
        it('should redirect user when request password', () => {
            // WHEN
            comp.requestResetPassword();
            // THEN
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('to state requestReset');
            expect(mockRouter.navigateSpy).toHaveBeenCalledWith(['/account/reset', 'request']);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRztBQUNsRywwQ0FBNkM7QUFDN0MsNENBQXlDO0FBQ3pDLDZEQUE0RDtBQUU1RCxnRUFBNEQ7QUFDNUQsc0VBQXVFO0FBQ3ZFLHNEQUEyRDtBQUMzRCw0RUFBdUU7QUFJdkUsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQzlCLElBQUksSUFBeUIsQ0FBQztRQUM5QixJQUFJLE9BQThDLENBQUM7UUFDbkQsSUFBSSxnQkFBa0MsQ0FBQztRQUN2QyxJQUFJLFVBQXNCLENBQUM7UUFDM0IsSUFBSSxlQUFnQyxDQUFDO1FBRXJDLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxxQ0FBbUIsQ0FBQztnQkFDbkMsU0FBUyxFQUFFO29CQUNULG1CQUFXO29CQUNYO3dCQUNFLE9BQU8sRUFBRSw0QkFBWTt3QkFDckIsUUFBUSxFQUFFLHFDQUFnQjtxQkFDM0I7aUJBQ0Y7YUFDRixDQUFDO2lCQUNDLGdCQUFnQixDQUFDLHFDQUFtQixFQUFFLEVBQUUsQ0FBQztpQkFDekMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxxQ0FBbUIsQ0FBQyxDQUFDO1lBQ3ZELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsZ0JBQWdCLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsNEJB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QUFvQixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsRUFBRTtZQUNwRCxPQUFPO1lBQ1AsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFFNUIsT0FBTztZQUNQLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNqRixNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBhc3luYywgaW5qZWN0LCBmYWtlQXN5bmMsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gJ2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNb2NrTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLWxvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1JvdXRlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9jay1yb3V0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tBY3RpdmVNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9jay1hY3RpdmUtbW9kYWwuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdMb2dpbkNvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogTG9naW5Nb2RhbENvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxMb2dpbk1vZGFsQ29tcG9uZW50PjtcbiAgICBsZXQgbW9ja0xvZ2luU2VydmljZTogTW9ja0xvZ2luU2VydmljZTtcbiAgICBsZXQgbW9ja1JvdXRlcjogTW9ja1JvdXRlcjtcbiAgICBsZXQgbW9ja0FjdGl2ZU1vZGFsOiBNb2NrQWN0aXZlTW9kYWw7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbTG9naW5Nb2RhbENvbXBvbmVudF0sXG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgIEZvcm1CdWlsZGVyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBNb2NrTG9naW5TZXJ2aWNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShMb2dpbk1vZGFsQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoTG9naW5Nb2RhbENvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIG1vY2tMb2dpblNlcnZpY2UgPSBUZXN0QmVkLmdldChMb2dpblNlcnZpY2UpO1xuICAgICAgbW9ja1JvdXRlciA9IFRlc3RCZWQuZ2V0KFJvdXRlcik7XG4gICAgICBtb2NrQWN0aXZlTW9kYWwgPSBUZXN0QmVkLmdldChOZ2JBY3RpdmVNb2RhbCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGF1dGhlbnRpY2F0ZSB0aGUgdXNlcicsIGluamVjdChcbiAgICAgIFtdLFxuICAgICAgZmFrZUFzeW5jKCgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXG4gICAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAubG9naW5Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxuICAgICAgICAgIHBhc3N3b3JkOiAnYWRtaW4nLFxuICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG1vY2tMb2dpblNlcnZpY2Uuc2V0UmVzcG9uc2Uoe30pO1xuICAgICAgICBtb2NrUm91dGVyLnVybCA9ICcvYWRtaW4vbWV0cmljcyc7XG5cbiAgICAgICAgLy8gV0hFTi9cbiAgICAgICAgY29tcC5sb2dpbigpO1xuICAgICAgICB0aWNrKCk7IC8vIHNpbXVsYXRlIGFzeW5jXG5cbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3QoY29tcC5hdXRoZW50aWNhdGlvbkVycm9yKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgZXhwZWN0KG1vY2tBY3RpdmVNb2RhbC5jbG9zZVNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QobW9ja0xvZ2luU2VydmljZS5sb2dpblNweSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoY3JlZGVudGlhbHMpO1xuICAgICAgfSlcbiAgICApKTtcblxuICAgIGl0KCdzaG91bGQgZW1wdHkgdGhlIGNyZWRlbnRpYWxzIHVwb24gY2FuY2VsJywgKCkgPT4ge1xuICAgICAgLy8gR0lWRU5cbiAgICAgIGNvbXAubG9naW5Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICB1c2VybmFtZTogJ2FkbWluJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdhZG1pbidcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHJlbWVtYmVyTWU6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLmNhbmNlbCgpO1xuXG4gICAgICAvLyBUSEVOXG4gICAgICBleHBlY3QoY29tcC5hdXRoZW50aWNhdGlvbkVycm9yKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgIGV4cGVjdChjb21wLmxvZ2luRm9ybS5nZXQoJ3VzZXJuYW1lJykhLnZhbHVlKS50b0VxdWFsKGV4cGVjdGVkLnVzZXJuYW1lKTtcbiAgICAgIGV4cGVjdChjb21wLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykhLnZhbHVlKS50b0VxdWFsKGV4cGVjdGVkLnBhc3N3b3JkKTtcbiAgICAgIGV4cGVjdChjb21wLmxvZ2luRm9ybS5nZXQoJ3JlbWVtYmVyTWUnKSEudmFsdWUpLnRvRXF1YWwoZXhwZWN0ZWQucmVtZW1iZXJNZSk7XG4gICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmRpc21pc3NTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdjYW5jZWwnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmVkaXJlY3QgdXNlciB3aGVuIHJlZ2lzdGVyJywgKCkgPT4ge1xuICAgICAgLy8gV0hFTlxuICAgICAgY29tcC5yZWdpc3RlcigpO1xuXG4gICAgICAvLyBUSEVOXG4gICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmRpc21pc3NTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd0byBzdGF0ZSByZWdpc3RlcicpO1xuICAgICAgZXhwZWN0KG1vY2tSb3V0ZXIubmF2aWdhdGVTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFsnL2FjY291bnQvcmVnaXN0ZXInXSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJlZGlyZWN0IHVzZXIgd2hlbiByZXF1ZXN0IHBhc3N3b3JkJywgKCkgPT4ge1xuICAgICAgLy8gV0hFTlxuICAgICAgY29tcC5yZXF1ZXN0UmVzZXRQYXNzd29yZCgpO1xuXG4gICAgICAvLyBUSEVOXG4gICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmRpc21pc3NTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd0byBzdGF0ZSByZXF1ZXN0UmVzZXQnKTtcbiAgICAgIGV4cGVjdChtb2NrUm91dGVyLm5hdmlnYXRlU3B5KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbJy9hY2NvdW50L3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=