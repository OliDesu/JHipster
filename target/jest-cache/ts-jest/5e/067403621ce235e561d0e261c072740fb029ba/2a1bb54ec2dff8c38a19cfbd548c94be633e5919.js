"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../../test.module");
const password_reset_finish_component_1 = require("app/account/password-reset/finish/password-reset-finish.component");
const password_reset_finish_service_1 = require("app/account/password-reset/finish/password-reset-finish.service");
const mock_route_service_1 = require("../../../../helpers/mock-route.service");
describe('Component Tests', () => {
    describe('PasswordResetFinishComponent', () => {
        let fixture;
        let comp;
        beforeEach(() => {
            fixture = testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [password_reset_finish_component_1.PasswordResetFinishComponent],
                providers: [
                    forms_1.FormBuilder,
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ key: 'XYZPDQ' })
                    }
                ]
            })
                .overrideTemplate(password_reset_finish_component_1.PasswordResetFinishComponent, '')
                .createComponent(password_reset_finish_component_1.PasswordResetFinishComponent);
        });
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(password_reset_finish_component_1.PasswordResetFinishComponent);
            comp = fixture.componentInstance;
            comp.ngOnInit();
        });
        it('should define its initial state', () => {
            expect(comp.initialized).toBe(true);
            expect(comp.key).toEqual('XYZPDQ');
        });
        it('sets focus after the view has been initialized', () => {
            const node = {
                focus() { }
            };
            comp.newPassword = new core_1.ElementRef(node);
            spyOn(node, 'focus');
            comp.ngAfterViewInit();
            expect(node.focus).toHaveBeenCalled();
        });
        it('should ensure the two passwords entered match', () => {
            comp.passwordForm.patchValue({
                newPassword: 'password',
                confirmPassword: 'non-matching'
            });
            comp.finishReset();
            expect(comp.doNotMatch).toBe(true);
        });
        it('should update success to true after resetting password', testing_1.inject([password_reset_finish_service_1.PasswordResetFinishService], testing_1.fakeAsync((service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.of({}));
            comp.passwordForm.patchValue({
                newPassword: 'password',
                confirmPassword: 'password'
            });
            comp.finishReset();
            testing_1.tick();
            expect(service.save).toHaveBeenCalledWith('XYZPDQ', 'password');
            expect(comp.success).toBe(true);
        })));
        it('should notify of generic error', testing_1.inject([password_reset_finish_service_1.PasswordResetFinishService], testing_1.fakeAsync((service) => {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError('ERROR'));
            comp.passwordForm.patchValue({
                newPassword: 'password',
                confirmPassword: 'password'
            });
            comp.finishReset();
            testing_1.tick();
            expect(service.save).toHaveBeenCalledWith('XYZPDQ', 'password');
            expect(comp.success).toBe(false);
            expect(comp.error).toBe(true);
        })));
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUMzQyxtREFBMkY7QUFDM0YsMENBQTZDO0FBQzdDLDRDQUFpRDtBQUNqRCwrQkFBc0M7QUFFdEMseURBQThEO0FBQzlELHVIQUFpSDtBQUNqSCxtSEFBNkc7QUFDN0csK0VBQTRFO0FBRTVFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtRQUM1QyxJQUFJLE9BQXVELENBQUM7UUFDNUQsSUFBSSxJQUFrQyxDQUFDO1FBRXZDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLDhEQUE0QixDQUFDO2dCQUM1QyxTQUFTLEVBQUU7b0JBQ1QsbUJBQVc7b0JBQ1g7d0JBQ0UsT0FBTyxFQUFFLHVCQUFjO3dCQUN2QixRQUFRLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztxQkFDcEQ7aUJBQ0Y7YUFDRixDQUFDO2lCQUNDLGdCQUFnQixDQUFDLDhEQUE0QixFQUFFLEVBQUUsQ0FBQztpQkFDbEQsZUFBZSxDQUFDLDhEQUE0QixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDhEQUE0QixDQUFDLENBQUM7WUFDaEUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtZQUN4RCxNQUFNLElBQUksR0FBRztnQkFDWCxLQUFLLEtBQVUsQ0FBQzthQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFLEdBQUcsRUFBRTtZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCLGVBQWUsRUFBRSxjQUFjO2FBQ2hDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxnQkFBTSxDQUNqRSxDQUFDLDBEQUEwQixDQUFDLEVBQzVCLG1CQUFTLENBQUMsQ0FBQyxPQUFtQyxFQUFFLEVBQUU7WUFDaEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUMzQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsZUFBZSxFQUFFLFVBQVU7YUFDNUIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLGNBQUksRUFBRSxDQUFDO1lBRVAsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLGdCQUFNLENBQ3pDLENBQUMsMERBQTBCLENBQUMsRUFDNUIsbUJBQVMsQ0FBQyxDQUFDLE9BQW1DLEVBQUUsRUFBRTtZQUNoRCxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsaUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUMzQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsZUFBZSxFQUFFLFVBQVU7YUFDNUIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLGNBQUksRUFBRSxDQUFDO1lBRVAsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIGluamVjdCwgdGljaywgZmFrZUFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgfSBmcm9tICdhcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZSB9IGZyb20gJ2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrQWN0aXZhdGVkUm91dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL21vY2stcm91dGUuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQ+O1xuICAgIGxldCBjb21wOiBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50O1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50XSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgRm9ybUJ1aWxkZXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICB1c2VWYWx1ZTogbmV3IE1vY2tBY3RpdmF0ZWRSb3V0ZSh7IGtleTogJ1hZWlBEUScgfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsICcnKVxuICAgICAgICAuY3JlYXRlQ29tcG9uZW50KFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQpO1xuICAgIH0pO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIGNvbXAubmdPbkluaXQoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZGVmaW5lIGl0cyBpbml0aWFsIHN0YXRlJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGNvbXAuaW5pdGlhbGl6ZWQpLnRvQmUodHJ1ZSk7XG4gICAgICBleHBlY3QoY29tcC5rZXkpLnRvRXF1YWwoJ1hZWlBEUScpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3NldHMgZm9jdXMgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gaW5pdGlhbGl6ZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICBmb2N1cygpOiB2b2lkIHt9XG4gICAgICB9O1xuICAgICAgY29tcC5uZXdQYXNzd29yZCA9IG5ldyBFbGVtZW50UmVmKG5vZGUpO1xuICAgICAgc3B5T24obm9kZSwgJ2ZvY3VzJyk7XG5cbiAgICAgIGNvbXAubmdBZnRlclZpZXdJbml0KCk7XG5cbiAgICAgIGV4cGVjdChub2RlLmZvY3VzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGVuc3VyZSB0aGUgdHdvIHBhc3N3b3JkcyBlbnRlcmVkIG1hdGNoJywgKCkgPT4ge1xuICAgICAgY29tcC5wYXNzd29yZEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIG5ld1Bhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICdub24tbWF0Y2hpbmcnXG4gICAgICB9KTtcblxuICAgICAgY29tcC5maW5pc2hSZXNldCgpO1xuXG4gICAgICBleHBlY3QoY29tcC5kb05vdE1hdGNoKS50b0JlKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1cGRhdGUgc3VjY2VzcyB0byB0cnVlIGFmdGVyIHJlc2V0dGluZyBwYXNzd29yZCcsIGluamVjdChcbiAgICAgIFtQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZV0sXG4gICAgICBmYWtlQXN5bmMoKHNlcnZpY2U6IFBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdzYXZlJykuYW5kLnJldHVyblZhbHVlKG9mKHt9KSk7XG4gICAgICAgIGNvbXAucGFzc3dvcmRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIG5ld1Bhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wLmZpbmlzaFJlc2V0KCk7XG4gICAgICAgIHRpY2soKTtcblxuICAgICAgICBleHBlY3Qoc2VydmljZS5zYXZlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnWFlaUERRJywgJ3Bhc3N3b3JkJyk7XG4gICAgICAgIGV4cGVjdChjb21wLnN1Y2Nlc3MpLnRvQmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICkpO1xuXG4gICAgaXQoJ3Nob3VsZCBub3RpZnkgb2YgZ2VuZXJpYyBlcnJvcicsIGluamVjdChcbiAgICAgIFtQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZV0sXG4gICAgICBmYWtlQXN5bmMoKHNlcnZpY2U6IFBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdzYXZlJykuYW5kLnJldHVyblZhbHVlKHRocm93RXJyb3IoJ0VSUk9SJykpO1xuICAgICAgICBjb21wLnBhc3N3b3JkRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgICBuZXdQYXNzd29yZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICdwYXNzd29yZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcC5maW5pc2hSZXNldCgpO1xuICAgICAgICB0aWNrKCk7XG5cbiAgICAgICAgZXhwZWN0KHNlcnZpY2Uuc2F2ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ1hZWlBEUScsICdwYXNzd29yZCcpO1xuICAgICAgICBleHBlY3QoY29tcC5zdWNjZXNzKS50b0JlKGZhbHNlKTtcbiAgICAgICAgZXhwZWN0KGNvbXAuZXJyb3IpLnRvQmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICkpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9