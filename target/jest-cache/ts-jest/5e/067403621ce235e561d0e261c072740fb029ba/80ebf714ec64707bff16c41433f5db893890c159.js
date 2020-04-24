"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const cooperative_detail_component_1 = require("app/entities/cooperative/cooperative-detail.component");
const cooperative_model_1 = require("app/shared/model/cooperative.model");
describe('Component Tests', () => {
    describe('Cooperative Management Detail Component', () => {
        let comp;
        let fixture;
        const route = { data: rxjs_1.of({ cooperative: new cooperative_model_1.Cooperative(123) }) };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [cooperative_detail_component_1.CooperativeDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(cooperative_detail_component_1.CooperativeDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(cooperative_detail_component_1.CooperativeDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should load cooperative on init', () => {
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.cooperative).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLWRldGFpbC5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBaUQ7QUFDakQsK0JBQTBCO0FBRTFCLHNEQUEyRDtBQUMzRCx3R0FBbUc7QUFDbkcsMEVBQWlFO0FBRWpFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtRQUN2RCxJQUFJLElBQWdDLENBQUM7UUFDckMsSUFBSSxPQUFxRCxDQUFDO1FBQzFELE1BQU0sS0FBSyxHQUFJLEVBQUUsSUFBSSxFQUFFLFNBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLCtCQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUE0QixDQUFDO1FBRTdGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUMseURBQTBCLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzFELENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMseURBQTBCLEVBQUUsRUFBRSxDQUFDO2lCQUNoRCxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyx5REFBMEIsQ0FBQyxDQUFDO1lBQzlELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN0QixFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO2dCQUN6QyxPQUFPO2dCQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEIsT0FBTztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9jb29wZXJhdGl2ZS9jb29wZXJhdGl2ZS1kZXRhaWwuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29vcGVyYXRpdmVEZXRhaWxDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvY29vcGVyYXRpdmUvY29vcGVyYXRpdmUtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29wZXJhdGl2ZSB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY29vcGVyYXRpdmUubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnQ29vcGVyYXRpdmUgTWFuYWdlbWVudCBEZXRhaWwgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBDb29wZXJhdGl2ZURldGFpbENvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxDb29wZXJhdGl2ZURldGFpbENvbXBvbmVudD47XG4gICAgY29uc3Qgcm91dGUgPSAoeyBkYXRhOiBvZih7IGNvb3BlcmF0aXZlOiBuZXcgQ29vcGVyYXRpdmUoMTIzKSB9KSB9IGFzIGFueSkgYXMgQWN0aXZhdGVkUm91dGU7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQ29vcGVyYXRpdmVEZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogcm91dGUgfV1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKENvb3BlcmF0aXZlRGV0YWlsQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQ29vcGVyYXRpdmVEZXRhaWxDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnT25Jbml0JywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBsb2FkIGNvb3BlcmF0aXZlIG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAuY29vcGVyYXRpdmUpLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgaWQ6IDEyMyB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==