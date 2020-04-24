"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const restaurant_detail_component_1 = require("app/entities/restaurant/restaurant-detail.component");
const restaurant_model_1 = require("app/shared/model/restaurant.model");
describe('Component Tests', () => {
    describe('Restaurant Management Detail Component', () => {
        let comp;
        let fixture;
        const route = { data: rxjs_1.of({ restaurant: new restaurant_model_1.Restaurant(123) }) };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [restaurant_detail_component_1.RestaurantDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(restaurant_detail_component_1.RestaurantDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(restaurant_detail_component_1.RestaurantDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should load restaurant on init', () => {
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.restaurant).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1kZXRhaWwuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0U7QUFDbEUsNENBQWlEO0FBQ2pELCtCQUEwQjtBQUUxQixzREFBMkQ7QUFDM0QscUdBQWdHO0FBQ2hHLHdFQUErRDtBQUUvRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7UUFDdEQsSUFBSSxJQUErQixDQUFDO1FBQ3BDLElBQUksT0FBb0QsQ0FBQztRQUN6RCxNQUFNLEtBQUssR0FBSSxFQUFFLElBQUksRUFBRSxTQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSw2QkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBNEIsQ0FBQztRQUUzRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLHVEQUF5QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMxRCxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLHVEQUF5QixFQUFFLEVBQUUsQ0FBQztpQkFDL0MsaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsdURBQXlCLENBQUMsQ0FBQztZQUM3RCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdEIsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtnQkFDeEMsT0FBTztnQkFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRWhCLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50LWRldGFpbC5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBSZXN0YXVyYW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RhdXJhbnQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL3Jlc3RhdXJhbnQubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUmVzdGF1cmFudCBNYW5hZ2VtZW50IERldGFpbCBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFJlc3RhdXJhbnREZXRhaWxDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UmVzdGF1cmFudERldGFpbENvbXBvbmVudD47XG4gICAgY29uc3Qgcm91dGUgPSAoeyBkYXRhOiBvZih7IHJlc3RhdXJhbnQ6IG5ldyBSZXN0YXVyYW50KDEyMykgfSkgfSBhcyBhbnkpIGFzIEFjdGl2YXRlZFJvdXRlO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbQ29vcGN5Y2xlVGVzdE1vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Jlc3RhdXJhbnREZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogcm91dGUgfV1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKFJlc3RhdXJhbnREZXRhaWxDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChSZXN0YXVyYW50RGV0YWlsQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ09uSW5pdCcsICgpID0+IHtcbiAgICAgIGl0KCdTaG91bGQgbG9hZCByZXN0YXVyYW50IG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAucmVzdGF1cmFudCkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoeyBpZDogMTIzIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9