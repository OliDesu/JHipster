"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const order_detail_component_1 = require("app/entities/order/order-detail.component");
const order_model_1 = require("app/shared/model/order.model");
describe('Component Tests', () => {
    describe('Order Management Detail Component', () => {
        let comp;
        let fixture;
        const route = { data: rxjs_1.of({ order: new order_model_1.Order(123) }) };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [order_detail_component_1.OrderDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(order_detail_component_1.OrderDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(order_detail_component_1.OrderDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should load order on init', () => {
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.order).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL29yZGVyL29yZGVyLWRldGFpbC5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBaUQ7QUFDakQsK0JBQTBCO0FBRTFCLHNEQUEyRDtBQUMzRCxzRkFBaUY7QUFDakYsOERBQXFEO0FBRXJELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtRQUNqRCxJQUFJLElBQTBCLENBQUM7UUFDL0IsSUFBSSxPQUErQyxDQUFDO1FBQ3BELE1BQU0sS0FBSyxHQUFJLEVBQUUsSUFBSSxFQUFFLFNBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLG1CQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUE0QixDQUFDO1FBRWpGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUMsNkNBQW9CLENBQUM7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzFELENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsNkNBQW9CLEVBQUUsRUFBRSxDQUFDO2lCQUMxQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw2Q0FBb0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN0QixFQUFFLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO2dCQUNuQyxPQUFPO2dCQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEIsT0FBTztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9vcmRlci9vcmRlci1kZXRhaWwuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvb3JkZXIvb3JkZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnT3JkZXIgTWFuYWdlbWVudCBEZXRhaWwgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBPcmRlckRldGFpbENvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxPcmRlckRldGFpbENvbXBvbmVudD47XG4gICAgY29uc3Qgcm91dGUgPSAoeyBkYXRhOiBvZih7IG9yZGVyOiBuZXcgT3JkZXIoMTIzKSB9KSB9IGFzIGFueSkgYXMgQWN0aXZhdGVkUm91dGU7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbT3JkZXJEZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogcm91dGUgfV1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKE9yZGVyRGV0YWlsQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoT3JkZXJEZXRhaWxDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnT25Jbml0JywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBsb2FkIG9yZGVyIG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAub3JkZXIpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgaWQ6IDEyMyB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==