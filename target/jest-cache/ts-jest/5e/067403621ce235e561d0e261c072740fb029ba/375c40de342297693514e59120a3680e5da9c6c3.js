"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const test_module_1 = require("../../../test.module");
const order_component_1 = require("app/entities/order/order.component");
const order_service_1 = require("app/entities/order/order.service");
const order_model_1 = require("app/shared/model/order.model");
describe('Component Tests', () => {
    describe('Order Management Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [order_component_1.OrderComponent]
            })
                .overrideTemplate(order_component_1.OrderComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(order_component_1.OrderComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(order_service_1.OrderService);
        });
        it('Should call load all on init', () => {
            // GIVEN
            const headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new order_model_1.Order(123)],
                headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.orders && comp.orders[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBQ2xFLCtCQUEwQjtBQUMxQiwrQ0FBaUU7QUFFakUsc0RBQTJEO0FBQzNELHdFQUFvRTtBQUNwRSxvRUFBZ0U7QUFDaEUsOERBQXFEO0FBRXJELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtRQUMxQyxJQUFJLElBQW9CLENBQUM7UUFDekIsSUFBSSxPQUF5QyxDQUFDO1FBQzlDLElBQUksT0FBcUIsQ0FBQztRQUUxQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7YUFDL0IsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQyxnQ0FBYyxFQUFFLEVBQUUsQ0FBQztpQkFDcEMsaUJBQWlCLEVBQUUsQ0FBQztZQUV2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsZ0NBQWMsQ0FBQyxDQUFDO1lBQ2xELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLFFBQVE7WUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FDckMsU0FBRSxDQUNBLElBQUksbUJBQVksQ0FBQztnQkFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLG1CQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUixDQUFDLENBQ0gsQ0FDRixDQUFDO1lBRUYsT0FBTztZQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixPQUFPO1lBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9vcmRlci9vcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL29yZGVyLm1vZGVsJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ09yZGVyIE1hbmFnZW1lbnQgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBPcmRlckNvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxPcmRlckNvbXBvbmVudD47XG4gICAgbGV0IHNlcnZpY2U6IE9yZGVyU2VydmljZTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtPcmRlckNvbXBvbmVudF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKE9yZGVyQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChPcmRlckNvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHNlcnZpY2UgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoT3JkZXJTZXJ2aWNlKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgY2FsbCBsb2FkIGFsbCBvbiBpbml0JywgKCkgPT4ge1xuICAgICAgLy8gR0lWRU5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5hcHBlbmQoJ2xpbmsnLCAnbGluaztsaW5rJyk7XG4gICAgICBzcHlPbihzZXJ2aWNlLCAncXVlcnknKS5hbmQucmV0dXJuVmFsdWUoXG4gICAgICAgIG9mKFxuICAgICAgICAgIG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgYm9keTogW25ldyBPcmRlcigxMjMpXSxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLm5nT25Jbml0KCk7XG5cbiAgICAgIC8vIFRIRU5cbiAgICAgIGV4cGVjdChzZXJ2aWNlLnF1ZXJ5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICBleHBlY3QoY29tcC5vcmRlcnMgJiYgY29tcC5vcmRlcnNbMF0pLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgaWQ6IDEyMyB9KSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=