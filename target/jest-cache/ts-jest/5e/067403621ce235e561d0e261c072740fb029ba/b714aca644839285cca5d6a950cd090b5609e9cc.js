"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const basket_update_component_1 = require("app/entities/basket/basket-update.component");
const basket_service_1 = require("app/entities/basket/basket.service");
const basket_model_1 = require("app/shared/model/basket.model");
describe('Component Tests', () => {
    describe('Basket Management Update Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [basket_update_component_1.BasketUpdateComponent],
                providers: [forms_1.FormBuilder]
            })
                .overrideTemplate(basket_update_component_1.BasketUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(basket_update_component_1.BasketUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(basket_service_1.BasketService);
        });
        describe('save', () => {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(() => {
                // GIVEN
                const entity = new basket_model_1.Basket(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.updateForm(entity);
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(() => {
                // GIVEN
                const entity = new basket_model_1.Basket();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.updateForm(entity);
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtdXBkYXRlLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQW1GO0FBQ25GLCtDQUFvRDtBQUNwRCwwQ0FBNkM7QUFDN0MsK0JBQTBCO0FBRTFCLHNEQUEyRDtBQUMzRCx5RkFBb0Y7QUFDcEYsdUVBQW1FO0FBQ25FLGdFQUF1RDtBQUV2RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7UUFDbEQsSUFBSSxJQUEyQixDQUFDO1FBQ2hDLElBQUksT0FBZ0QsQ0FBQztRQUNyRCxJQUFJLE9BQXNCLENBQUM7UUFFM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztnQkFDckMsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQzthQUN6QixDQUFDO2lCQUNDLGdCQUFnQixDQUFDLCtDQUFxQixFQUFFLEVBQUUsQ0FBQztpQkFDM0MsaUJBQWlCLEVBQUUsQ0FBQztZQUV2QixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsK0NBQXFCLENBQUMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsOEJBQWEsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDcEIsRUFBRSxDQUFDLHdEQUF3RCxFQUFFLG1CQUFTLENBQUMsR0FBRyxFQUFFO2dCQUMxRSxRQUFRO2dCQUNSLE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxJQUFJLG1CQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLGNBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCO2dCQUV6QixPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFSixFQUFFLENBQUMsbURBQW1ELEVBQUUsbUJBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JFLFFBQVE7Z0JBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBTSxFQUFFLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsSUFBSSxtQkFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2dCQUNQLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixjQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtnQkFFekIsT0FBTztnQkFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9lbnRpdGllcy9iYXNrZXQvYmFza2V0LXVwZGF0ZS5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBmYWtlQXN5bmMsIHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFza2V0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtdXBkYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXNrZXRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNrZXQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL2Jhc2tldC5tb2RlbCc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdCYXNrZXQgTWFuYWdlbWVudCBVcGRhdGUgQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGxldCBjb21wOiBCYXNrZXRVcGRhdGVDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8QmFza2V0VXBkYXRlQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogQmFza2V0U2VydmljZTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtCYXNrZXRVcGRhdGVDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKEJhc2tldFVwZGF0ZUNvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuXG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQmFza2V0VXBkYXRlQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChCYXNrZXRTZXJ2aWNlKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdzYXZlJywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBjYWxsIHVwZGF0ZSBzZXJ2aWNlIG9uIHNhdmUgZm9yIGV4aXN0aW5nIGVudGl0eScsIGZha2VBc3luYygoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYXNrZXQoMTIzKTtcbiAgICAgICAgc3B5T24oc2VydmljZSwgJ3VwZGF0ZScpLmFuZC5yZXR1cm5WYWx1ZShvZihuZXcgSHR0cFJlc3BvbnNlKHsgYm9keTogZW50aXR5IH0pKSk7XG4gICAgICAgIGNvbXAudXBkYXRlRm9ybShlbnRpdHkpO1xuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAuc2F2ZSgpO1xuICAgICAgICB0aWNrKCk7IC8vIHNpbXVsYXRlIGFzeW5jXG5cbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3Qoc2VydmljZS51cGRhdGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGVudGl0eSk7XG4gICAgICAgIGV4cGVjdChjb21wLmlzU2F2aW5nKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgIH0pKTtcblxuICAgICAgaXQoJ1Nob3VsZCBjYWxsIGNyZWF0ZSBzZXJ2aWNlIG9uIHNhdmUgZm9yIG5ldyBlbnRpdHknLCBmYWtlQXN5bmMoKCkgPT4ge1xuICAgICAgICAvLyBHSVZFTlxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgQmFza2V0KCk7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdjcmVhdGUnKS5hbmQucmV0dXJuVmFsdWUob2YobmV3IEh0dHBSZXNwb25zZSh7IGJvZHk6IGVudGl0eSB9KSkpO1xuICAgICAgICBjb21wLnVwZGF0ZUZvcm0oZW50aXR5KTtcbiAgICAgICAgLy8gV0hFTlxuICAgICAgICBjb21wLnNhdmUoKTtcbiAgICAgICAgdGljaygpOyAvLyBzaW11bGF0ZSBhc3luY1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KHNlcnZpY2UuY3JlYXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChlbnRpdHkpO1xuICAgICAgICBleHBlY3QoY29tcC5pc1NhdmluZykudG9FcXVhbChmYWxzZSk7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=