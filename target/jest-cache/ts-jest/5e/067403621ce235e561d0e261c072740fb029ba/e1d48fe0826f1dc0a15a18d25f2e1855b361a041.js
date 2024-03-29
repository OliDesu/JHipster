"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const payment_detail_component_1 = require("app/entities/payment/payment-detail.component");
const payment_model_1 = require("app/shared/model/payment.model");
describe('Component Tests', () => {
    describe('Payment Management Detail Component', () => {
        let comp;
        let fixture;
        const route = { data: rxjs_1.of({ payment: new payment_model_1.Payment(123) }) };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [payment_detail_component_1.PaymentDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(payment_detail_component_1.PaymentDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(payment_detail_component_1.PaymentDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should load payment on init', () => {
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.payment).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC1kZXRhaWwuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0U7QUFDbEUsNENBQWlEO0FBQ2pELCtCQUEwQjtBQUUxQixzREFBMkQ7QUFDM0QsNEZBQXVGO0FBQ3ZGLGtFQUF5RDtBQUV6RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFDbkQsSUFBSSxJQUE0QixDQUFDO1FBQ2pDLElBQUksT0FBaUQsQ0FBQztRQUN0RCxNQUFNLEtBQUssR0FBSSxFQUFFLElBQUksRUFBRSxTQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBNEIsQ0FBQztRQUVyRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMxRCxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLGlEQUFzQixFQUFFLEVBQUUsQ0FBQztpQkFDNUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsaURBQXNCLENBQUMsQ0FBQztZQUMxRCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdEIsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtnQkFDckMsT0FBTztnQkFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRWhCLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvcGF5bWVudC9wYXltZW50LWRldGFpbC5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL3BheW1lbnQubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUGF5bWVudCBNYW5hZ2VtZW50IERldGFpbCBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFBheW1lbnREZXRhaWxDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UGF5bWVudERldGFpbENvbXBvbmVudD47XG4gICAgY29uc3Qgcm91dGUgPSAoeyBkYXRhOiBvZih7IHBheW1lbnQ6IG5ldyBQYXltZW50KDEyMykgfSkgfSBhcyBhbnkpIGFzIEFjdGl2YXRlZFJvdXRlO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbQ29vcGN5Y2xlVGVzdE1vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1BheW1lbnREZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogcm91dGUgfV1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFBheW1lbnREZXRhaWxDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChQYXltZW50RGV0YWlsQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ09uSW5pdCcsICgpID0+IHtcbiAgICAgIGl0KCdTaG91bGQgbG9hZCBwYXltZW50IG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAucGF5bWVudCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoeyBpZDogMTIzIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9