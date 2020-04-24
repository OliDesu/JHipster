"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const test_module_1 = require("../../../test.module");
const payment_component_1 = require("app/entities/payment/payment.component");
const payment_service_1 = require("app/entities/payment/payment.service");
const payment_model_1 = require("app/shared/model/payment.model");
describe('Component Tests', () => {
    describe('Payment Management Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [payment_component_1.PaymentComponent]
            })
                .overrideTemplate(payment_component_1.PaymentComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(payment_component_1.PaymentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(payment_service_1.PaymentService);
        });
        it('Should call load all on init', () => {
            // GIVEN
            const headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new payment_model_1.Payment(123)],
                headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.payments && comp.payments[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUNsRSwrQkFBMEI7QUFDMUIsK0NBQWlFO0FBRWpFLHNEQUEyRDtBQUMzRCw4RUFBMEU7QUFDMUUsMEVBQXNFO0FBQ3RFLGtFQUF5RDtBQUV6RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7UUFDNUMsSUFBSSxJQUFzQixDQUFDO1FBQzNCLElBQUksT0FBMkMsQ0FBQztRQUNoRCxJQUFJLE9BQXVCLENBQUM7UUFFNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzthQUNqQyxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLG9DQUFnQixFQUFFLEVBQUUsQ0FBQztpQkFDdEMsaUJBQWlCLEVBQUUsQ0FBQztZQUV2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsb0NBQWdCLENBQUMsQ0FBQztZQUNwRCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtZQUN0QyxRQUFRO1lBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQ3JDLFNBQUUsQ0FDQSxJQUFJLG1CQUFZLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLENBQUMsSUFBSSx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1IsQ0FBQyxDQUNILENBQ0YsQ0FBQztZQUVGLE9BQU87WUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEIsT0FBTztZQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9wYXltZW50L3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9wYXltZW50Lm1vZGVsJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1BheW1lbnQgTWFuYWdlbWVudCBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFBheW1lbnRDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UGF5bWVudENvbXBvbmVudD47XG4gICAgbGV0IHNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbQ29vcGN5Y2xlVGVzdE1vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1BheW1lbnRDb21wb25lbnRdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShQYXltZW50Q29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChQYXltZW50Q29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChQYXltZW50U2VydmljZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGNhbGwgbG9hZCBhbGwgb24gaW5pdCcsICgpID0+IHtcbiAgICAgIC8vIEdJVkVOXG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuYXBwZW5kKCdsaW5rJywgJ2xpbms7bGluaycpO1xuICAgICAgc3B5T24oc2VydmljZSwgJ3F1ZXJ5JykuYW5kLnJldHVyblZhbHVlKFxuICAgICAgICBvZihcbiAgICAgICAgICBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgIGJvZHk6IFtuZXcgUGF5bWVudCgxMjMpXSxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLm5nT25Jbml0KCk7XG5cbiAgICAgIC8vIFRIRU5cbiAgICAgIGV4cGVjdChzZXJ2aWNlLnF1ZXJ5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICBleHBlY3QoY29tcC5wYXltZW50cyAmJiBjb21wLnBheW1lbnRzWzBdKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGlkOiAxMjMgfSkpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9