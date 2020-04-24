"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const product_delete_dialog_component_1 = require("app/entities/product/product-delete-dialog.component");
const product_service_1 = require("app/entities/product/product.service");
describe('Component Tests', () => {
    describe('Product Management Delete Component', () => {
        let comp;
        let fixture;
        let service;
        let mockEventManager;
        let mockActiveModal;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [product_delete_dialog_component_1.ProductDeleteDialogComponent]
            })
                .overrideTemplate(product_delete_dialog_component_1.ProductDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(product_delete_dialog_component_1.ProductDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(product_service_1.ProductService);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3Byb2R1Y3QvcHJvZHVjdC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTJGO0FBQzNGLDZEQUE0RDtBQUM1RCwrQkFBMEI7QUFDMUIsNkNBQThDO0FBRTlDLHNEQUEyRDtBQUczRCwwR0FBb0c7QUFDcEcsMEVBQXNFO0FBRXRFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxJQUFJLElBQWtDLENBQUM7UUFDdkMsSUFBSSxPQUF1RCxDQUFDO1FBQzVELElBQUksT0FBdUIsQ0FBQztRQUM1QixJQUFJLGdCQUFrQyxDQUFDO1FBQ3ZDLElBQUksZUFBZ0MsQ0FBQztRQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLDhEQUE0QixDQUFDO2FBQzdDLENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsOERBQTRCLEVBQUUsRUFBRSxDQUFDO2lCQUNsRCxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw4REFBNEIsQ0FBQyxDQUFDO1lBQ2hFLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQ0FBYyxDQUFDLENBQUM7WUFDNUQsZ0JBQWdCLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQWUsQ0FBQyxDQUFDO1lBQ2hELGVBQWUsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBYyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUM3QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsZ0JBQU0sQ0FDdEQsRUFBRSxFQUNGLG1CQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNiLFFBQVE7Z0JBQ1IsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVqRCxPQUFPO2dCQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLGNBQUksRUFBRSxDQUFDO2dCQUVQLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNwRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBRyxFQUFFO2dCQUNqRCxRQUFRO2dCQUNSLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRXpCLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVkLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9wcm9kdWN0L3Byb2R1Y3QtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBpbmplY3QsIGZha2VBc3luYywgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNb2NrRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLWV2ZW50LW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrQWN0aXZlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21vY2stYWN0aXZlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdERlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9wcm9kdWN0L3Byb2R1Y3QtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUHJvZHVjdCBNYW5hZ2VtZW50IERlbGV0ZSBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFByb2R1Y3REZWxldGVEaWFsb2dDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UHJvZHVjdERlbGV0ZURpYWxvZ0NvbXBvbmVudD47XG4gICAgbGV0IHNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlO1xuICAgIGxldCBtb2NrRXZlbnRNYW5hZ2VyOiBNb2NrRXZlbnRNYW5hZ2VyO1xuICAgIGxldCBtb2NrQWN0aXZlTW9kYWw6IE1vY2tBY3RpdmVNb2RhbDtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0RGVsZXRlRGlhbG9nQ29tcG9uZW50XVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoUHJvZHVjdERlbGV0ZURpYWxvZ0NvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFByb2R1Y3REZWxldGVEaWFsb2dDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KFByb2R1Y3RTZXJ2aWNlKTtcbiAgICAgIG1vY2tFdmVudE1hbmFnZXIgPSBUZXN0QmVkLmdldChKaGlFdmVudE1hbmFnZXIpO1xuICAgICAgbW9ja0FjdGl2ZU1vZGFsID0gVGVzdEJlZC5nZXQoTmdiQWN0aXZlTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2NvbmZpcm1EZWxldGUnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgZGVsZXRlIHNlcnZpY2Ugb24gY29uZmlybURlbGV0ZScsIGluamVjdChcbiAgICAgICAgW10sXG4gICAgICAgIGZha2VBc3luYygoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICBzcHlPbihzZXJ2aWNlLCAnZGVsZXRlJykuYW5kLnJldHVyblZhbHVlKG9mKHt9KSk7XG5cbiAgICAgICAgICAvLyBXSEVOXG4gICAgICAgICAgY29tcC5jb25maXJtRGVsZXRlKDEyMyk7XG4gICAgICAgICAgdGljaygpO1xuXG4gICAgICAgICAgLy8gVEhFTlxuICAgICAgICAgIGV4cGVjdChzZXJ2aWNlLmRlbGV0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoMTIzKTtcbiAgICAgICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmNsb3NlU3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgICAgZXhwZWN0KG1vY2tFdmVudE1hbmFnZXIuYnJvYWRjYXN0U3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIH0pXG4gICAgICApKTtcblxuICAgICAgaXQoJ1Nob3VsZCBub3QgY2FsbCBkZWxldGUgc2VydmljZSBvbiBjbGVhcicsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgc3B5T24oc2VydmljZSwgJ2RlbGV0ZScpO1xuXG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5jYW5jZWwoKTtcblxuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmRlbGV0ZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgZXhwZWN0KG1vY2tBY3RpdmVNb2RhbC5kaXNtaXNzU3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==