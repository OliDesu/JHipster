"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../../test.module");
const password_reset_init_component_1 = require("app/account/password-reset/init/password-reset-init.component");
const password_reset_init_service_1 = require("app/account/password-reset/init/password-reset-init.service");
describe('Component Tests', () => {
    describe('PasswordResetInitComponent', () => {
        let fixture;
        let comp;
        beforeEach(() => {
            fixture = testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [password_reset_init_component_1.PasswordResetInitComponent],
                providers: [forms_1.FormBuilder]
            })
                .overrideTemplate(password_reset_init_component_1.PasswordResetInitComponent, '')
                .createComponent(password_reset_init_component_1.PasswordResetInitComponent);
            comp = fixture.componentInstance;
        });
        it('sets focus after the view has been initialized', () => {
            const node = {
                focus() { }
            };
            comp.email = new core_1.ElementRef(node);
            spyOn(node, 'focus');
            comp.ngAfterViewInit();
            expect(node.focus).toHaveBeenCalled();
        });
        it('notifies of success upon successful requestReset', testing_1.inject([password_reset_init_service_1.PasswordResetInitService], (service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.of({}));
            comp.resetRequestForm.patchValue({
                email: 'user@domain.com'
            });
            comp.requestReset();
            expect(service.save).toHaveBeenCalledWith('user@domain.com');
            expect(comp.success).toBe(true);
        }));
        it('no notification of success upon error response', testing_1.inject([password_reset_init_service_1.PasswordResetInitService], (service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 503,
                data: 'something else'
            }));
            comp.resetRequestForm.patchValue({
                email: 'user@domain.com'
            });
            comp.requestReset();
            expect(service.save).toHaveBeenCalledWith('user@domain.com');
            expect(comp.success).toBe(false);
        }));
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLG1EQUEwRTtBQUMxRSwwQ0FBNkM7QUFDN0MsK0JBQXNDO0FBRXRDLHlEQUE4RDtBQUM5RCxpSEFBMkc7QUFDM0csNkdBQXVHO0FBRXZHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtRQUMxQyxJQUFJLE9BQXFELENBQUM7UUFDMUQsSUFBSSxJQUFnQyxDQUFDO1FBRXJDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLDBEQUEwQixDQUFDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO2FBQ3pCLENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsMERBQTBCLEVBQUUsRUFBRSxDQUFDO2lCQUNoRCxlQUFlLENBQUMsMERBQTBCLENBQUMsQ0FBQztZQUMvQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtZQUN4RCxNQUFNLElBQUksR0FBRztnQkFDWCxLQUFLLEtBQVUsQ0FBQzthQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLGdCQUFNLENBQUMsQ0FBQyxzREFBd0IsQ0FBQyxFQUFFLENBQUMsT0FBaUMsRUFBRSxFQUFFO1lBQzlILEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO2dCQUMvQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSxnQkFBTSxDQUFDLENBQUMsc0RBQXdCLENBQUMsRUFBRSxDQUFDLE9BQWlDLEVBQUUsRUFBRTtZQUM1SCxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQ3BDLGlCQUFVLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLGdCQUFnQjthQUN2QixDQUFDLENBQ0gsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxpQkFBaUI7YUFDekIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IH0gZnJvbSAnYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2UgfSBmcm9tICdhcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudD47XG4gICAgbGV0IGNvbXA6IFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50O1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudF0sXG4gICAgICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsICcnKVxuICAgICAgICAuY3JlYXRlQ29tcG9uZW50KFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIH0pO1xuXG4gICAgaXQoJ3NldHMgZm9jdXMgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gaW5pdGlhbGl6ZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICBmb2N1cygpOiB2b2lkIHt9XG4gICAgICB9O1xuICAgICAgY29tcC5lbWFpbCA9IG5ldyBFbGVtZW50UmVmKG5vZGUpO1xuICAgICAgc3B5T24obm9kZSwgJ2ZvY3VzJyk7XG5cbiAgICAgIGNvbXAubmdBZnRlclZpZXdJbml0KCk7XG5cbiAgICAgIGV4cGVjdChub2RlLmZvY3VzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbm90aWZpZXMgb2Ygc3VjY2VzcyB1cG9uIHN1Y2Nlc3NmdWwgcmVxdWVzdFJlc2V0JywgaW5qZWN0KFtQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2VdLCAoc2VydmljZTogUGFzc3dvcmRSZXNldEluaXRTZXJ2aWNlKSA9PiB7XG4gICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZShvZih7fSkpO1xuICAgICAgY29tcC5yZXNldFJlcXVlc3RGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICBlbWFpbDogJ3VzZXJAZG9tYWluLmNvbSdcbiAgICAgIH0pO1xuXG4gICAgICBjb21wLnJlcXVlc3RSZXNldCgpO1xuXG4gICAgICBleHBlY3Qoc2VydmljZS5zYXZlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgndXNlckBkb21haW4uY29tJyk7XG4gICAgICBleHBlY3QoY29tcC5zdWNjZXNzKS50b0JlKHRydWUpO1xuICAgIH0pKTtcblxuICAgIGl0KCdubyBub3RpZmljYXRpb24gb2Ygc3VjY2VzcyB1cG9uIGVycm9yIHJlc3BvbnNlJywgaW5qZWN0KFtQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2VdLCAoc2VydmljZTogUGFzc3dvcmRSZXNldEluaXRTZXJ2aWNlKSA9PiB7XG4gICAgICBzcHlPbihzZXJ2aWNlLCAnc2F2ZScpLmFuZC5yZXR1cm5WYWx1ZShcbiAgICAgICAgdGhyb3dFcnJvcih7XG4gICAgICAgICAgc3RhdHVzOiA1MDMsXG4gICAgICAgICAgZGF0YTogJ3NvbWV0aGluZyBlbHNlJ1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGNvbXAucmVzZXRSZXF1ZXN0Rm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgZW1haWw6ICd1c2VyQGRvbWFpbi5jb20nXG4gICAgICB9KTtcbiAgICAgIGNvbXAucmVxdWVzdFJlc2V0KCk7XG5cbiAgICAgIGV4cGVjdChzZXJ2aWNlLnNhdmUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd1c2VyQGRvbWFpbi5jb20nKTtcbiAgICAgIGV4cGVjdChjb21wLnN1Y2Nlc3MpLnRvQmUoZmFsc2UpO1xuICAgIH0pKTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==