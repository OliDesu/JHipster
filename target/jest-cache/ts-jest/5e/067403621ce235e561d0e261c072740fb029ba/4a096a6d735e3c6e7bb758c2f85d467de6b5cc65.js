"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const test_module_1 = require("../../../test.module");
const cooperative_component_1 = require("app/entities/cooperative/cooperative.component");
const cooperative_service_1 = require("app/entities/cooperative/cooperative.service");
const cooperative_model_1 = require("app/shared/model/cooperative.model");
describe('Component Tests', () => {
    describe('Cooperative Management Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [cooperative_component_1.CooperativeComponent]
            })
                .overrideTemplate(cooperative_component_1.CooperativeComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(cooperative_component_1.CooperativeComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(cooperative_service_1.CooperativeService);
        });
        it('Should call load all on init', () => {
            // GIVEN
            const headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new cooperative_model_1.Cooperative(123)],
                headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.cooperatives && comp.cooperatives[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBQ2xFLCtCQUEwQjtBQUMxQiwrQ0FBaUU7QUFFakUsc0RBQTJEO0FBQzNELDBGQUFzRjtBQUN0RixzRkFBa0Y7QUFDbEYsMEVBQWlFO0FBRWpFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUNoRCxJQUFJLElBQTBCLENBQUM7UUFDL0IsSUFBSSxPQUErQyxDQUFDO1FBQ3BELElBQUksT0FBMkIsQ0FBQztRQUVoQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO2FBQ3JDLENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsNENBQW9CLEVBQUUsRUFBRSxDQUFDO2lCQUMxQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0Q0FBb0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtZQUN0QyxRQUFRO1lBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQ3JDLFNBQUUsQ0FDQSxJQUFJLG1CQUFZLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLENBQUMsSUFBSSwrQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixPQUFPO2FBQ1IsQ0FBQyxDQUNILENBQ0YsQ0FBQztZQUVGLE9BQU87WUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEIsT0FBTztZQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9jb29wZXJhdGl2ZS9jb29wZXJhdGl2ZS5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29vcGVyYXRpdmVDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvY29vcGVyYXRpdmUvY29vcGVyYXRpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3BlcmF0aXZlU2VydmljZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9jb29wZXJhdGl2ZS9jb29wZXJhdGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvb3BlcmF0aXZlIH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9jb29wZXJhdGl2ZS5tb2RlbCc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdDb29wZXJhdGl2ZSBNYW5hZ2VtZW50IENvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogQ29vcGVyYXRpdmVDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8Q29vcGVyYXRpdmVDb21wb25lbnQ+O1xuICAgIGxldCBzZXJ2aWNlOiBDb29wZXJhdGl2ZVNlcnZpY2U7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQ29vcGVyYXRpdmVDb21wb25lbnRdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShDb29wZXJhdGl2ZUNvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuXG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQ29vcGVyYXRpdmVDb21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KENvb3BlcmF0aXZlU2VydmljZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGNhbGwgbG9hZCBhbGwgb24gaW5pdCcsICgpID0+IHtcbiAgICAgIC8vIEdJVkVOXG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuYXBwZW5kKCdsaW5rJywgJ2xpbms7bGluaycpO1xuICAgICAgc3B5T24oc2VydmljZSwgJ3F1ZXJ5JykuYW5kLnJldHVyblZhbHVlKFxuICAgICAgICBvZihcbiAgICAgICAgICBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgIGJvZHk6IFtuZXcgQ29vcGVyYXRpdmUoMTIzKV0sXG4gICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgLy8gV0hFTlxuICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAvLyBUSEVOXG4gICAgICBleHBlY3Qoc2VydmljZS5xdWVyeSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgZXhwZWN0KGNvbXAuY29vcGVyYXRpdmVzICYmIGNvbXAuY29vcGVyYXRpdmVzWzBdKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGlkOiAxMjMgfSkpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9