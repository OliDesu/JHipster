"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const error_constants_1 = require("app/shared/constants/error.constants");
const register_service_1 = require("app/account/register/register.service");
const register_component_1 = require("app/account/register/register.component");
describe('Component Tests', () => {
    describe('RegisterComponent', () => {
        let fixture;
        let comp;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [register_component_1.RegisterComponent],
                providers: [forms_1.FormBuilder]
            })
                .overrideTemplate(register_component_1.RegisterComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(register_component_1.RegisterComponent);
            comp = fixture.componentInstance;
        });
        it('should ensure the two passwords entered match', () => {
            comp.registerForm.patchValue({
                password: 'password',
                confirmPassword: 'non-matching'
            });
            comp.register();
            expect(comp.doNotMatch).toBe(true);
        });
        it('should update success to true after creating an account', testing_1.inject([register_service_1.RegisterService, ng_jhipster_1.JhiLanguageService], testing_1.fakeAsync((service, mockTranslate) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.of({}));
            comp.registerForm.patchValue({
                password: 'password',
                confirmPassword: 'password'
            });
            comp.register();
            testing_1.tick();
            expect(service.save).toHaveBeenCalledWith({
                email: '',
                password: 'password',
                login: '',
                langKey: 'en'
            });
            expect(comp.success).toBe(true);
            expect(mockTranslate.getCurrentLanguageSpy).toHaveBeenCalled();
            expect(comp.errorUserExists).toBe(false);
            expect(comp.errorEmailExists).toBe(false);
            expect(comp.error).toBe(false);
        })));
        it('should notify of user existence upon 400/login already in use', testing_1.inject([register_service_1.RegisterService], testing_1.fakeAsync((service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 400,
                error: { type: error_constants_1.LOGIN_ALREADY_USED_TYPE }
            }));
            comp.registerForm.patchValue({
                password: 'password',
                confirmPassword: 'password'
            });
            comp.register();
            testing_1.tick();
            expect(comp.errorUserExists).toBe(true);
            expect(comp.errorEmailExists).toBe(false);
            expect(comp.error).toBe(false);
        })));
        it('should notify of email existence upon 400/email address already in use', testing_1.inject([register_service_1.RegisterService], testing_1.fakeAsync((service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 400,
                error: { type: error_constants_1.EMAIL_ALREADY_USED_TYPE }
            }));
            comp.registerForm.patchValue({
                password: 'password',
                confirmPassword: 'password'
            });
            comp.register();
            testing_1.tick();
            expect(comp.errorEmailExists).toBe(true);
            expect(comp.errorUserExists).toBe(false);
            expect(comp.error).toBe(false);
        })));
        it('should notify of generic error', testing_1.inject([register_service_1.RegisterService], testing_1.fakeAsync((service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 503
            }));
            comp.registerForm.patchValue({
                password: 'password',
                confirmPassword: 'password'
            });
            comp.register();
            testing_1.tick();
            expect(comp.errorUserExists).toBe(false);
            expect(comp.errorEmailExists).toBe(false);
            expect(comp.error).toBe(true);
        })));
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0c7QUFDbEcsMENBQTZDO0FBQzdDLCtCQUFzQztBQUN0Qyw2Q0FBaUQ7QUFHakQsc0RBQTJEO0FBQzNELDBFQUF3RztBQUN4Ryw0RUFBd0U7QUFDeEUsZ0ZBQTRFO0FBRTVFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUNqQyxJQUFJLE9BQTRDLENBQUM7UUFDakQsSUFBSSxJQUF1QixDQUFDO1FBRTVCLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQzthQUN6QixDQUFDO2lCQUNDLGdCQUFnQixDQUFDLHNDQUFpQixFQUFFLEVBQUUsQ0FBQztpQkFDdkMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxzQ0FBaUIsQ0FBQyxDQUFDO1lBQ3JELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsK0NBQStDLEVBQUUsR0FBRyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUMzQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZUFBZSxFQUFFLGNBQWM7YUFDaEMsQ0FBQyxDQUFDO1lBRUgsSUFB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SyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBhc3luYywgaW5qZWN0LCB0aWNrLCBmYWtlQXN5bmMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBNb2NrTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLWxhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IEVNQUlMX0FMUkVBRFlfVVNFRF9UWVBFLCBMT0dJTl9BTFJFQURZX1VTRURfVFlQRSB9IGZyb20gJ2FwcC9zaGFyZWQvY29uc3RhbnRzL2Vycm9yLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBSZWdpc3RlclNlcnZpY2UgfSBmcm9tICdhcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1JlZ2lzdGVyQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFJlZ2lzdGVyQ29tcG9uZW50PjtcbiAgICBsZXQgY29tcDogUmVnaXN0ZXJDb21wb25lbnQ7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFJlZ2lzdGVyQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUmVnaXN0ZXJDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGVuc3VyZSB0aGUgdHdvIHBhc3N3b3JkcyBlbnRlcmVkIG1hdGNoJywgKCkgPT4ge1xuICAgICAgY29tcC5yZWdpc3RlckZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICdub24tbWF0Y2hpbmcnXG4gICAgICB9KTtcblxuICAgICAgY29tcC5yZWdpc3RlcigpO1xuXG4gICAgICBleHBlY3QoY29tcC5kb05vdE1hdGNoKS50b0JlKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1cGRhdGUgc3VjY2VzcyB0byB0cnVlIGFmdGVyIGNyZWF0aW5nIGFuIGFjY291bnQnLCBpbmplY3QoXG4gICAgICBbUmVnaXN0ZXJTZXJ2aWNlLCBKaGlMYW5ndWFnZVNlcnZpY2VdLFxuICAgICAgZmFrZUFzeW5jKChzZXJ2aWNlOiBSZWdpc3RlclNlcnZpY2UsIG1vY2tUcmFuc2xhdGU6IE1vY2tMYW5ndWFnZVNlcnZpY2UpID0+IHtcbiAgICAgICAgc3B5T24oc2VydmljZSwgJ3NhdmUnKS5hbmQucmV0dXJuVmFsdWUob2Yoe30pKTtcbiAgICAgICAgY29tcC5yZWdpc3RlckZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXAucmVnaXN0ZXIoKTtcbiAgICAgICAgdGljaygpO1xuXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLnNhdmUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHtcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgbG9naW46ICcnLFxuICAgICAgICAgIGxhbmdLZXk6ICdlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChjb21wLnN1Y2Nlc3MpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChtb2NrVHJhbnNsYXRlLmdldEN1cnJlbnRMYW5ndWFnZVNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QoY29tcC5lcnJvclVzZXJFeGlzdHMpLnRvQmUoZmFsc2UpO1xuICAgICAgICBleHBlY3QoY29tcC5lcnJvckVtYWlsRXhpc3RzKS50b0JlKGZhbHNlKTtcbiAgICAgICAgZXhwZWN0KGNvbXAuZXJyb3IpLnRvQmUoZmFsc2UpO1xuICAgICAgfSlcbiAgICApKTtcblxuICAgIGl0KCdzaG91bGQgbm90aWZ5IG9mIHVzZXIgZXhpc3RlbmNlIHVwb24gNDAwL2xvZ2luIGFscmVhZHkgaW4gdXNlJywgaW5qZWN0KFxuICAgICAgW1JlZ2lzdGVyU2VydmljZV0sXG4gICAgICBmYWtlQXN5bmMoKHNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSkgPT4ge1xuICAgICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZShcbiAgICAgICAgICB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgZXJyb3I6IHsgdHlwZTogTE9HSU5fQUxSRUFEWV9VU0VEX1RZUEUgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIGNvbXAucmVnaXN0ZXJGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wLnJlZ2lzdGVyKCk7XG4gICAgICAgIHRpY2soKTtcblxuICAgICAgICBleHBlY3QoY29tcC5lcnJvclVzZXJFeGlzdHMpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yRW1haWxFeGlzdHMpLnRvQmUoZmFsc2UpO1xuICAgICAgICBleHBlY3QoY29tcC5lcnJvcikudG9CZShmYWxzZSk7XG4gICAgICB9KVxuICAgICkpO1xuXG4gICAgaXQoJ3Nob3VsZCBub3RpZnkgb2YgZW1haWwgZXhpc3RlbmNlIHVwb24gNDAwL2VtYWlsIGFkZHJlc3MgYWxyZWFkeSBpbiB1c2UnLCBpbmplY3QoXG4gICAgICBbUmVnaXN0ZXJTZXJ2aWNlXSxcbiAgICAgIGZha2VBc3luYygoc2VydmljZTogUmVnaXN0ZXJTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdzYXZlJykuYW5kLnJldHVyblZhbHVlKFxuICAgICAgICAgIHRocm93RXJyb3Ioe1xuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBlcnJvcjogeyB0eXBlOiBFTUFJTF9BTFJFQURZX1VTRURfVFlQRSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgY29tcC5yZWdpc3RlckZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXAucmVnaXN0ZXIoKTtcbiAgICAgICAgdGljaygpO1xuXG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yRW1haWxFeGlzdHMpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yVXNlckV4aXN0cykudG9CZShmYWxzZSk7XG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yKS50b0JlKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKSk7XG5cbiAgICBpdCgnc2hvdWxkIG5vdGlmeSBvZiBnZW5lcmljIGVycm9yJywgaW5qZWN0KFxuICAgICAgW1JlZ2lzdGVyU2VydmljZV0sXG4gICAgICBmYWtlQXN5bmMoKHNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSkgPT4ge1xuICAgICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZShcbiAgICAgICAgICB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogNTAzXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgY29tcC5yZWdpc3RlckZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXAucmVnaXN0ZXIoKTtcbiAgICAgICAgdGljaygpO1xuXG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yVXNlckV4aXN0cykudG9CZShmYWxzZSk7XG4gICAgICAgIGV4cGVjdChjb21wLmVycm9yRW1haWxFeGlzdHMpLnRvQmUoZmFsc2UpO1xuICAgICAgICBleHBlY3QoY29tcC5lcnJvcikudG9CZSh0cnVlKTtcbiAgICAgIH0pXG4gICAgKSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=