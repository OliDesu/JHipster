"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const rxjs_1 = require("rxjs");
const ng_jhipster_1 = require("ng-jhipster");
const test_module_1 = require("../../../test.module");
const basket_delete_dialog_component_1 = require("app/entities/basket/basket-delete-dialog.component");
const basket_service_1 = require("app/entities/basket/basket.service");
describe('Component Tests', () => {
    describe('Basket Management Delete Component', () => {
        let comp;
        let fixture;
        let service;
        let mockEventManager;
        let mockActiveModal;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [basket_delete_dialog_component_1.BasketDeleteDialogComponent]
            })
                .overrideTemplate(basket_delete_dialog_component_1.BasketDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(basket_delete_dialog_component_1.BasketDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(basket_service_1.BasketService);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEyRjtBQUMzRiw2REFBNEQ7QUFDNUQsK0JBQTBCO0FBQzFCLDZDQUE4QztBQUU5QyxzREFBMkQ7QUFHM0QsdUdBQWlHO0FBQ2pHLHVFQUFtRTtBQUVuRSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7UUFDbEQsSUFBSSxJQUFpQyxDQUFDO1FBQ3RDLElBQUksT0FBc0QsQ0FBQztRQUMzRCxJQUFJLE9BQXNCLENBQUM7UUFDM0IsSUFBSSxnQkFBa0MsQ0FBQztRQUN2QyxJQUFJLGVBQWdDLENBQUM7UUFFckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyw0REFBMkIsQ0FBQzthQUM1QyxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLDREQUEyQixFQUFFLEVBQUUsQ0FBQztpQkFDakQsaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNERBQTJCLENBQUMsQ0FBQztZQUMvRCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsOEJBQWEsQ0FBQyxDQUFDO1lBQzNELGdCQUFnQixHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFlLENBQUMsQ0FBQztZQUNoRCxlQUFlLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQWMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDN0IsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLGdCQUFNLENBQ3RELEVBQUUsRUFDRixtQkFBUyxDQUFDLEdBQUcsRUFBRTtnQkFDYixRQUFRO2dCQUNSLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFakQsT0FBTztnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixjQUFJLEVBQUUsQ0FBQztnQkFFUCxPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtnQkFDakQsUUFBUTtnQkFDUixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QixPQUFPO2dCQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZCxPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvYmFza2V0L2Jhc2tldC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIGluamVjdCwgZmFrZUFzeW5jLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IE1vY2tFdmVudE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21vY2stZXZlbnQtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tBY3RpdmVNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9jay1hY3RpdmUtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNrZXREZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvYmFza2V0L2Jhc2tldC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXNrZXRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdCYXNrZXQgTWFuYWdlbWVudCBEZWxldGUgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBCYXNrZXREZWxldGVEaWFsb2dDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8QmFza2V0RGVsZXRlRGlhbG9nQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogQmFza2V0U2VydmljZTtcbiAgICBsZXQgbW9ja0V2ZW50TWFuYWdlcjogTW9ja0V2ZW50TWFuYWdlcjtcbiAgICBsZXQgbW9ja0FjdGl2ZU1vZGFsOiBNb2NrQWN0aXZlTW9kYWw7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQmFza2V0RGVsZXRlRGlhbG9nQ29tcG9uZW50XVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoQmFza2V0RGVsZXRlRGlhbG9nQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQmFza2V0RGVsZXRlRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChCYXNrZXRTZXJ2aWNlKTtcbiAgICAgIG1vY2tFdmVudE1hbmFnZXIgPSBUZXN0QmVkLmdldChKaGlFdmVudE1hbmFnZXIpO1xuICAgICAgbW9ja0FjdGl2ZU1vZGFsID0gVGVzdEJlZC5nZXQoTmdiQWN0aXZlTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2NvbmZpcm1EZWxldGUnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgZGVsZXRlIHNlcnZpY2Ugb24gY29uZmlybURlbGV0ZScsIGluamVjdChcbiAgICAgICAgW10sXG4gICAgICAgIGZha2VBc3luYygoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICBzcHlPbihzZXJ2aWNlLCAnZGVsZXRlJykuYW5kLnJldHVyblZhbHVlKG9mKHt9KSk7XG5cbiAgICAgICAgICAvLyBXSEVOXG4gICAgICAgICAgY29tcC5jb25maXJtRGVsZXRlKDEyMyk7XG4gICAgICAgICAgdGljaygpO1xuXG4gICAgICAgICAgLy8gVEhFTlxuICAgICAgICAgIGV4cGVjdChzZXJ2aWNlLmRlbGV0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoMTIzKTtcbiAgICAgICAgICBleHBlY3QobW9ja0FjdGl2ZU1vZGFsLmNsb3NlU3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgICAgZXhwZWN0KG1vY2tFdmVudE1hbmFnZXIuYnJvYWRjYXN0U3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIH0pXG4gICAgICApKTtcblxuICAgICAgaXQoJ1Nob3VsZCBub3QgY2FsbCBkZWxldGUgc2VydmljZSBvbiBjbGVhcicsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgc3B5T24oc2VydmljZSwgJ2RlbGV0ZScpO1xuXG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5jYW5jZWwoKTtcblxuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmRlbGV0ZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgZXhwZWN0KG1vY2tBY3RpdmVNb2RhbC5kaXNtaXNzU3B5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==