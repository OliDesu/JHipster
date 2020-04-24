"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const cooperative_delete_dialog_component_1 = require("app/entities/cooperative/cooperative-delete-dialog.component");
const cooperative_service_1 = require("app/entities/cooperative/cooperative.service");
describe('Component Tests', () => {
    describe('Cooperative Management Delete Component', () => {
        let comp;
        let fixture;
        let service;
        let mockEventManager;
        let mockActiveModal;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [cooperative_delete_dialog_component_1.CooperativeDeleteDialogComponent]
            })
                .overrideTemplate(cooperative_delete_dialog_component_1.CooperativeDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(cooperative_delete_dialog_component_1.CooperativeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(cooperative_service_1.CooperativeService);
            mockEventManager = testing_1.TestBed.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = testing_1.TestBed.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(() => {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(rxjs_1.of({}));
                // WHEN
                comp.confirmDelete(123);
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith(123);
                expect(mockActiveModal.closeSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
            it('Should not call delete service on clear', () => {
                // GIVEN
                spyOn(service, 'delete');
                // WHEN
                comp.cancel();
                // THEN
                expect(service.delete).not.toHaveBeenCalled();
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMkY7QUFDM0YsNkRBQTREO0FBQzVELCtCQUEwQjtBQUMxQiw2Q0FBOEM7QUFFOUMsc0RBQTJEO0FBRzNELHNIQUFnSDtBQUNoSCxzRkFBa0Y7QUFFbEYsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMseUNBQXlDLEVBQUUsR0FBRyxFQUFFO1FBQ3ZELElBQUksSUFBc0MsQ0FBQztRQUMzQyxJQUFJLE9BQTJELENBQUM7UUFDaEUsSUFBSSxPQUEyQixDQUFDO1FBQ2hDLElBQUksZ0JBQWtDLENBQUM7UUFDdkMsSUFBSSxlQUFnQyxDQUFDO1FBRXJDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUMsc0VBQWdDLENBQUM7YUFDakQsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQyxzRUFBZ0MsRUFBRSxFQUFFLENBQUM7aUJBQ3RELGlCQUFpQixFQUFFLENBQUM7WUFDdkIsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLHNFQUFnQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHdDQUFrQixDQUFDLENBQUM7WUFDaEUsZ0JBQWdCLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQWUsQ0FBQyxDQUFDO1lBQ2hELGVBQWUsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBYyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUM3QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsZ0JBQU0sQ0FDdEQsRUFBRSxFQUNGLG1CQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNiLFFBQVE7Z0JBQ1IsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVqRCxPQUFPO2dCQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLGNBQUksRUFBRSxDQUFDO2dCQUVQLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNwRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBRyxFQUFFO2dCQUNqRCxRQUFRO2dCQUNSLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRXpCLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVkLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9jb29wZXJhdGl2ZS9jb29wZXJhdGl2ZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIGluamVjdCwgZmFrZUFzeW5jLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IE1vY2tFdmVudE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21vY2stZXZlbnQtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tBY3RpdmVNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9jay1hY3RpdmUtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb29wZXJhdGl2ZURlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9jb29wZXJhdGl2ZS9jb29wZXJhdGl2ZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29wZXJhdGl2ZVNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvY29vcGVyYXRpdmUvY29vcGVyYXRpdmUuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdDb29wZXJhdGl2ZSBNYW5hZ2VtZW50IERlbGV0ZSBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IENvb3BlcmF0aXZlRGVsZXRlRGlhbG9nQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPENvb3BlcmF0aXZlRGVsZXRlRGlhbG9nQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlO1xuICAgIGxldCBtb2NrRXZlbnRNYW5hZ2VyOiBNb2NrRXZlbnRNYW5hZ2VyO1xuICAgIGxldCBtb2NrQWN0aXZlTW9kYWw6IE1vY2tBY3RpdmVNb2RhbDtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtDb29wZXJhdGl2ZURlbGV0ZURpYWxvZ0NvbXBvbmVudF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKENvb3BlcmF0aXZlRGVsZXRlRGlhbG9nQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQ29vcGVyYXRpdmVEZWxldGVEaWFsb2dDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KENvb3BlcmF0aXZlU2VydmljZSk7XG4gICAgICBtb2NrRXZlbnRNYW5hZ2VyID0gVGVzdEJlZC5nZXQoSmhpRXZlbnRNYW5hZ2VyKTtcbiAgICAgIG1vY2tBY3RpdmVNb2RhbCA9IFRlc3RCZWQuZ2V0KE5nYkFjdGl2ZU1vZGFsKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdjb25maXJtRGVsZXRlJywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBjYWxsIGRlbGV0ZSBzZXJ2aWNlIG9uIGNvbmZpcm1EZWxldGUnLCBpbmplY3QoXG4gICAgICAgIFtdLFxuICAgICAgICBmYWtlQXN5bmMoKCkgPT4ge1xuICAgICAgICAgIC8vIEdJVkVOXG4gICAgICAgICAgc3B5T24oc2VydmljZSwgJ2RlbGV0ZScpLmFuZC5yZXR1cm5WYWx1ZShvZih7fSkpO1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIGNvbXAuY29uZmlybURlbGV0ZSgxMjMpO1xuICAgICAgICAgIHRpY2soKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3Qoc2VydmljZS5kZWxldGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKDEyMyk7XG4gICAgICAgICAgZXhwZWN0KG1vY2tBY3RpdmVNb2RhbC5jbG9zZVNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICAgIGV4cGVjdChtb2NrRXZlbnRNYW5hZ2VyLmJyb2FkY2FzdFNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KVxuICAgICAgKSk7XG5cbiAgICAgIGl0KCdTaG91bGQgbm90IGNhbGwgZGVsZXRlIHNlcnZpY2Ugb24gY2xlYXInLCAoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdkZWxldGUnKTtcblxuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAuY2FuY2VsKCk7XG5cbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3Qoc2VydmljZS5kZWxldGUpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChtb2NrQWN0aXZlTW9kYWwuZGlzbWlzc1NweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=