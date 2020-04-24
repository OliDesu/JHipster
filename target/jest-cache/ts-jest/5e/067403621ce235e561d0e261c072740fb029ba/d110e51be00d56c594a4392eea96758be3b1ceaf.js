"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const user_management_delete_dialog_component_1 = require("app/admin/user-management/user-management-delete-dialog.component");
const user_service_1 = require("app/core/user/user.service");
describe('Component Tests', () => {
    describe('User Management Delete Component', () => {
        let comp;
        let fixture;
        let service;
        let mockEventManager;
        let mockActiveModal;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [user_management_delete_dialog_component_1.UserManagementDeleteDialogComponent]
            })
                .overrideTemplate(user_management_delete_dialog_component_1.UserManagementDeleteDialogComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(user_management_delete_dialog_component_1.UserManagementDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(user_service_1.UserService);
            mockEventManager = testing_1.TestBed.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = testing_1.TestBed.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(() => {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(rxjs_1.of({}));
                // WHEN
                comp.confirmDelete('user');
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith('user');
                expect(mockActiveModal.closeSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRztBQUNsRyw2REFBNEQ7QUFDNUQsK0JBQTBCO0FBQzFCLDZDQUE4QztBQUU5QyxzREFBMkQ7QUFHM0QsK0hBQXdIO0FBQ3hILDZEQUF5RDtBQUV6RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7UUFDaEQsSUFBSSxJQUF5QyxDQUFDO1FBQzlDLElBQUksT0FBOEQsQ0FBQztRQUNuRSxJQUFJLE9BQW9CLENBQUM7UUFDekIsSUFBSSxnQkFBa0MsQ0FBQztRQUN2QyxJQUFJLGVBQWdDLENBQUM7UUFFckMsVUFBVSxDQUFDLGVBQUssQ0FBQyxHQUFHLEVBQUU7WUFDcEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLDZFQUFtQyxDQUFDO2FBQ3BELENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsNkVBQW1DLEVBQUUsRUFBRSxDQUFDO2lCQUN6RCxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDZFQUFtQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsQ0FBQztZQUN6RCxnQkFBZ0IsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBZSxDQUFDLENBQUM7WUFDaEQsZUFBZSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFjLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxnQkFBTSxDQUN0RCxFQUFFLEVBQ0YsbUJBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsUUFBUTtnQkFDUixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWpELE9BQU87Z0JBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsY0FBSSxFQUFFLENBQUM7Z0JBRVAsT0FBTztnQkFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUNILENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIGFzeW5jLCBpbmplY3QsIGZha2VBc3luYywgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNb2NrRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLWV2ZW50LW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrQWN0aXZlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21vY2stYWN0aXZlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlck1hbmFnZW1lbnREZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICdhcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvdXNlci5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1VzZXIgTWFuYWdlbWVudCBEZWxldGUgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBVc2VyTWFuYWdlbWVudERlbGV0ZURpYWxvZ0NvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxVc2VyTWFuYWdlbWVudERlbGV0ZURpYWxvZ0NvbXBvbmVudD47XG4gICAgbGV0IHNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIGxldCBtb2NrRXZlbnRNYW5hZ2VyOiBNb2NrRXZlbnRNYW5hZ2VyO1xuICAgIGxldCBtb2NrQWN0aXZlTW9kYWw6IE1vY2tBY3RpdmVNb2RhbDtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtVc2VyTWFuYWdlbWVudERlbGV0ZURpYWxvZ0NvbXBvbmVudF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFVzZXJNYW5hZ2VtZW50RGVsZXRlRGlhbG9nQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVXNlck1hbmFnZW1lbnREZWxldGVEaWFsb2dDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KFVzZXJTZXJ2aWNlKTtcbiAgICAgIG1vY2tFdmVudE1hbmFnZXIgPSBUZXN0QmVkLmdldChKaGlFdmVudE1hbmFnZXIpO1xuICAgICAgbW9ja0FjdGl2ZU1vZGFsID0gVGVzdEJlZC5nZXQoTmdiQWN0aXZlTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2NvbmZpcm1EZWxldGUnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgZGVsZXRlIHNlcnZpY2Ugb24gY29uZmlybURlbGV0ZScsIGluamVjdChcbiAgICAgICAgW10sXG4gICAgICAgIGZha2VBc3luYygoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICBzcHlPbihzZXJ2aWNlLCAnZGVsZXRlJykuYW5kLnJldHVyblZhbHVlKG9mKHt9KSk7XG5cbiAgICAgICAgICAvLyBXSEVOXG4gICAgICAgICAgY29tcC5jb25maXJtRGVsZXRlKCd1c2VyJyk7XG4gICAgICAgICAgdGljaygpO1xuXG4gICAgICAgICAgLy8gVEhFTlxuICAgICAgICAgIGV4cGVjdChzZXJ2aWNlLmRlbGV0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3VzZXInKTtcbiAgICAgICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmNsb3NlU3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgICAgZXhwZWN0KG1vY2tFdmVudE1hbmFnZXIuYnJvYWRjYXN0U3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==