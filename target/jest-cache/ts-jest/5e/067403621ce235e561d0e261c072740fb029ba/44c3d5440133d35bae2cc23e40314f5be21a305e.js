"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const test_module_1 = require("../../../test.module");
const course_component_1 = require("app/entities/course/course.component");
const course_service_1 = require("app/entities/course/course.service");
const course_model_1 = require("app/shared/model/course.model");
describe('Component Tests', () => {
    describe('Course Management Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [course_component_1.CourseComponent]
            })
                .overrideTemplate(course_component_1.CourseComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(course_component_1.CourseComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(course_service_1.CourseService);
        });
        it('Should call load all on init', () => {
            // GIVEN
            const headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new course_model_1.Course(123)],
                headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.courses && comp.courses[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0U7QUFDbEUsK0JBQTBCO0FBQzFCLCtDQUFpRTtBQUVqRSxzREFBMkQ7QUFDM0QsMkVBQXVFO0FBQ3ZFLHVFQUFtRTtBQUNuRSxnRUFBdUQ7QUFFdkQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO1FBQzNDLElBQUksSUFBcUIsQ0FBQztRQUMxQixJQUFJLE9BQTBDLENBQUM7UUFDL0MsSUFBSSxPQUFzQixDQUFDO1FBRTNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUMsa0NBQWUsQ0FBQzthQUNoQyxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLGtDQUFlLEVBQUUsRUFBRSxDQUFDO2lCQUNyQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxrQ0FBZSxDQUFDLENBQUM7WUFDbkQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDhCQUFhLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7WUFDdEMsUUFBUTtZQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUNyQyxTQUFFLENBQ0EsSUFBSSxtQkFBWSxDQUFDO2dCQUNmLElBQUksRUFBRSxDQUFDLElBQUkscUJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsT0FBTzthQUNSLENBQUMsQ0FDSCxDQUNGLENBQUM7WUFFRixPQUFPO1lBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRWhCLE9BQU87WUFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQ291cnNlQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY291cnNlLm1vZGVsJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0NvdXJzZSBNYW5hZ2VtZW50IENvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogQ291cnNlQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPENvdXJzZUNvbXBvbmVudD47XG4gICAgbGV0IHNlcnZpY2U6IENvdXJzZVNlcnZpY2U7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQ291cnNlQ29tcG9uZW50XVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoQ291cnNlQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChDb3Vyc2VDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KENvdXJzZVNlcnZpY2UpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBjYWxsIGxvYWQgYWxsIG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAvLyBHSVZFTlxuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLmFwcGVuZCgnbGluaycsICdsaW5rO2xpbmsnKTtcbiAgICAgIHNweU9uKHNlcnZpY2UsICdxdWVyeScpLmFuZC5yZXR1cm5WYWx1ZShcbiAgICAgICAgb2YoXG4gICAgICAgICAgbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICBib2R5OiBbbmV3IENvdXJzZSgxMjMpXSxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb21wLm5nT25Jbml0KCk7XG5cbiAgICAgIC8vIFRIRU5cbiAgICAgIGV4cGVjdChzZXJ2aWNlLnF1ZXJ5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICBleHBlY3QoY29tcC5jb3Vyc2VzICYmIGNvbXAuY291cnNlc1swXSkudG9FcXVhbChqYXNtaW5lLm9iamVjdENvbnRhaW5pbmcoeyBpZDogMTIzIH0pKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==