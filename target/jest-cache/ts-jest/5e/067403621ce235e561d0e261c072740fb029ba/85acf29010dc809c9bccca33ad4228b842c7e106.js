"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const restaurant_delete_dialog_component_1 = require("app/entities/restaurant/restaurant-delete-dialog.component");
const restaurant_service_1 = require("app/entities/restaurant/restaurant.service");
describe('Component Tests', () => {
    describe('Restaurant Management Delete Component', () => {
        let comp;
        let fixture;
        let service;
        let mockEventManager;
        let mockActiveModal;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [restaurant_delete_dialog_component_1.RestaurantDeleteDialogComponent]
            })
                .overrideTemplate(restaurant_delete_dialog_component_1.RestaurantDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(restaurant_delete_dialog_component_1.RestaurantDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(restaurant_service_1.RestaurantService);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTJGO0FBQzNGLDZEQUE0RDtBQUM1RCwrQkFBMEI7QUFDMUIsNkNBQThDO0FBRTlDLHNEQUEyRDtBQUczRCxtSEFBNkc7QUFDN0csbUZBQStFO0FBRS9FLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLHdDQUF3QyxFQUFFLEdBQUcsRUFBRTtRQUN0RCxJQUFJLElBQXFDLENBQUM7UUFDMUMsSUFBSSxPQUEwRCxDQUFDO1FBQy9ELElBQUksT0FBMEIsQ0FBQztRQUMvQixJQUFJLGdCQUFrQyxDQUFDO1FBQ3ZDLElBQUksZUFBZ0MsQ0FBQztRQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLG9FQUErQixDQUFDO2FBQ2hELENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsb0VBQStCLEVBQUUsRUFBRSxDQUFDO2lCQUNyRCxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxvRUFBK0IsQ0FBQyxDQUFDO1lBQ25FLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQ0FBaUIsQ0FBQyxDQUFDO1lBQy9ELGdCQUFnQixHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFlLENBQUMsQ0FBQztZQUNoRCxlQUFlLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQWMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDN0IsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLGdCQUFNLENBQ3RELEVBQUUsRUFDRixtQkFBUyxDQUFDLEdBQUcsRUFBRTtnQkFDYixRQUFRO2dCQUNSLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFakQsT0FBTztnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixjQUFJLEVBQUUsQ0FBQztnQkFFUCxPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtnQkFDakQsUUFBUTtnQkFDUixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QixPQUFPO2dCQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgaW5qZWN0LCBmYWtlQXN5bmMsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTW9ja0V2ZW50TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9jay1ldmVudC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0FjdGl2ZU1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLWFjdGl2ZS1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RhdXJhbnREZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RhdXJhbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1Jlc3RhdXJhbnQgTWFuYWdlbWVudCBEZWxldGUgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBSZXN0YXVyYW50RGVsZXRlRGlhbG9nQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFJlc3RhdXJhbnREZWxldGVEaWFsb2dDb21wb25lbnQ+O1xuICAgIGxldCBzZXJ2aWNlOiBSZXN0YXVyYW50U2VydmljZTtcbiAgICBsZXQgbW9ja0V2ZW50TWFuYWdlcjogTW9ja0V2ZW50TWFuYWdlcjtcbiAgICBsZXQgbW9ja0FjdGl2ZU1vZGFsOiBNb2NrQWN0aXZlTW9kYWw7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbUmVzdGF1cmFudERlbGV0ZURpYWxvZ0NvbXBvbmVudF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFJlc3RhdXJhbnREZWxldGVEaWFsb2dDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChSZXN0YXVyYW50RGVsZXRlRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChSZXN0YXVyYW50U2VydmljZSk7XG4gICAgICBtb2NrRXZlbnRNYW5hZ2VyID0gVGVzdEJlZC5nZXQoSmhpRXZlbnRNYW5hZ2VyKTtcbiAgICAgIG1vY2tBY3RpdmVNb2RhbCA9IFRlc3RCZWQuZ2V0KE5nYkFjdGl2ZU1vZGFsKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdjb25maXJtRGVsZXRlJywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBjYWxsIGRlbGV0ZSBzZXJ2aWNlIG9uIGNvbmZpcm1EZWxldGUnLCBpbmplY3QoXG4gICAgICAgIFtdLFxuICAgICAgICBmYWtlQXN5bmMoKCkgPT4ge1xuICAgICAgICAgIC8vIEdJVkVOXG4gICAgICAgICAgc3B5T24oc2VydmljZSwgJ2RlbGV0ZScpLmFuZC5yZXR1cm5WYWx1ZShvZih7fSkpO1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIGNvbXAuY29uZmlybURlbGV0ZSgxMjMpO1xuICAgICAgICAgIHRpY2soKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3Qoc2VydmljZS5kZWxldGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKDEyMyk7XG4gICAgICAgICAgZXhwZWN0KG1vY2tBY3RpdmVNb2RhbC5jbG9zZVNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICAgIGV4cGVjdChtb2NrRXZlbnRNYW5hZ2VyLmJyb2FkY2FzdFNweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KVxuICAgICAgKSk7XG5cbiAgICAgIGl0KCdTaG91bGQgbm90IGNhbGwgZGVsZXRlIHNlcnZpY2Ugb24gY2xlYXInLCAoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdkZWxldGUnKTtcblxuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAuY2FuY2VsKCk7XG5cbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3Qoc2VydmljZS5kZWxldGUpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChtb2NrQWN0aXZlTW9kYWwuZGlzbWlzc1NweSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=