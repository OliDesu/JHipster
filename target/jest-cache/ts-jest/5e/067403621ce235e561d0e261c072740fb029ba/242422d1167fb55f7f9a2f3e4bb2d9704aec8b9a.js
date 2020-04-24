"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const user_management_component_1 = require("app/admin/user-management/user-management.component");
const user_service_1 = require("app/core/user/user.service");
const user_model_1 = require("app/core/user/user.model");
describe('Component Tests', () => {
    describe('User Management Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [user_management_component_1.UserManagementComponent]
            })
                .overrideTemplate(user_management_component_1.UserManagementComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(user_management_component_1.UserManagementComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(user_service_1.UserService);
        });
        describe('OnInit', () => {
            it('Should call load all on init', testing_1.inject([], testing_1.fakeAsync(() => {
                // GIVEN
                const headers = new http_1.HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [new user_model_1.User(123)],
                    headers
                })));
                // WHEN
                comp.ngOnInit();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.users && comp.users[0]).toEqual(jasmine.objectContaining({ id: 123 }));
            })));
        });
        describe('setActive', () => {
            it('Should update user and call load all', testing_1.inject([], testing_1.fakeAsync(() => {
                // GIVEN
                const headers = new http_1.HttpHeaders().append('link', 'link;link');
                const user = new user_model_1.User(123);
                spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [user],
                    headers
                })));
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ status: 200 })));
                // WHEN
                comp.setActive(user, true);
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(Object.assign(Object.assign({}, user), { activated: true }));
                expect(service.query).toHaveBeenCalled();
                expect(comp.users && comp.users[0]).toEqual(jasmine.objectContaining({ id: 123 }));
            })));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0c7QUFDbEcsK0NBQWlFO0FBQ2pFLCtCQUEwQjtBQUUxQixzREFBMkQ7QUFDM0QsbUdBQThGO0FBQzlGLDZEQUF5RDtBQUN6RCx5REFBZ0Q7QUFFaEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO1FBQ3pDLElBQUksSUFBNkIsQ0FBQztRQUNsQyxJQUFJLE9BQWtELENBQUM7UUFDdkQsSUFBSSxPQUFvQixDQUFDO1FBRXpCLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxtREFBdUIsQ0FBQzthQUN4QyxDQUFDO2lCQUNDLGdCQUFnQixDQUFDLG1EQUF1QixFQUFFLEVBQUUsQ0FBQztpQkFDN0MsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxtREFBdUIsQ0FBQyxDQUFDO1lBQzNELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN0QixFQUFFLENBQUMsOEJBQThCLEVBQUUsZ0JBQU0sQ0FDdkMsRUFBRSxFQUNGLG1CQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNiLFFBQVE7Z0JBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUNyQyxTQUFFLENBQ0EsSUFBSSxtQkFBWSxDQUFDO29CQUNmLElBQUksRUFBRSxDQUFDLElBQUksaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckIsT0FBTztpQkFDUixDQUFDLENBQ0gsQ0FDRixDQUFDO2dCQUVGLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixjQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtnQkFFekIsT0FBTztnQkFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxnQkFBTSxDQUMvQyxFQUFFLEVBQ0YsbUJBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsUUFBUTtnQkFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FDckMsU0FBRSxDQUNBLElBQUksbUJBQVksQ0FBQztvQkFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ1osT0FBTztpQkFDUixDQUFDLENBQ0gsQ0FDRixDQUFDO2dCQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsSUFBSSxtQkFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVoRixPQUFPO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQixjQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtnQkFFekIsT0FBTztnQkFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixpQ0FBTSxJQUFJLEtBQUUsU0FBUyxFQUFFLElBQUksSUFBRyxDQUFDO2dCQUMxRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgYXN5bmMsIGluamVjdCwgZmFrZUFzeW5jLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICdhcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnYXBwL2NvcmUvdXNlci91c2VyLm1vZGVsJztcblxuZGVzY3JpYmUoJ0NvbXBvbmVudCBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1VzZXIgTWFuYWdlbWVudCBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFVzZXJNYW5hZ2VtZW50Q29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFVzZXJNYW5hZ2VtZW50Q29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogVXNlclNlcnZpY2U7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbVXNlck1hbmFnZW1lbnRDb21wb25lbnRdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShVc2VyTWFuYWdlbWVudENvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgIH0pKTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFVzZXJNYW5hZ2VtZW50Q29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgc2VydmljZSA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChVc2VyU2VydmljZSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnT25Jbml0JywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCBjYWxsIGxvYWQgYWxsIG9uIGluaXQnLCBpbmplY3QoXG4gICAgICAgIFtdLFxuICAgICAgICBmYWtlQXN5bmMoKCkgPT4ge1xuICAgICAgICAgIC8vIEdJVkVOXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLmFwcGVuZCgnbGluaycsICdsaW5rO2xpbmsnKTtcbiAgICAgICAgICBzcHlPbihzZXJ2aWNlLCAncXVlcnknKS5hbmQucmV0dXJuVmFsdWUoXG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgYm9keTogW25ldyBVc2VyKDEyMyldLFxuICAgICAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIGNvbXAubmdPbkluaXQoKTtcbiAgICAgICAgICB0aWNrKCk7IC8vIHNpbXVsYXRlIGFzeW5jXG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHNlcnZpY2UucXVlcnkpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgICBleHBlY3QoY29tcC51c2VycyAmJiBjb21wLnVzZXJzWzBdKS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGlkOiAxMjMgfSkpO1xuICAgICAgICB9KVxuICAgICAgKSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnc2V0QWN0aXZlJywgKCkgPT4ge1xuICAgICAgaXQoJ1Nob3VsZCB1cGRhdGUgdXNlciBhbmQgY2FsbCBsb2FkIGFsbCcsIGluamVjdChcbiAgICAgICAgW10sXG4gICAgICAgIGZha2VBc3luYygoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuYXBwZW5kKCdsaW5rJywgJ2xpbms7bGluaycpO1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcigxMjMpO1xuICAgICAgICAgIHNweU9uKHNlcnZpY2UsICdxdWVyeScpLmFuZC5yZXR1cm5WYWx1ZShcbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBib2R5OiBbdXNlcl0sXG4gICAgICAgICAgICAgICAgaGVhZGVyc1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgc3B5T24oc2VydmljZSwgJ3VwZGF0ZScpLmFuZC5yZXR1cm5WYWx1ZShvZihuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzOiAyMDAgfSkpKTtcblxuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICBjb21wLnNldEFjdGl2ZSh1c2VyLCB0cnVlKTtcbiAgICAgICAgICB0aWNrKCk7IC8vIHNpbXVsYXRlIGFzeW5jXG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHNlcnZpY2UudXBkYXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7IC4uLnVzZXIsIGFjdGl2YXRlZDogdHJ1ZSB9KTtcbiAgICAgICAgICBleHBlY3Qoc2VydmljZS5xdWVyeSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICAgIGV4cGVjdChjb21wLnVzZXJzICYmIGNvbXAudXNlcnNbMF0pLnRvRXF1YWwoamFzbWluZS5vYmplY3RDb250YWluaW5nKHsgaWQ6IDEyMyB9KSk7XG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==