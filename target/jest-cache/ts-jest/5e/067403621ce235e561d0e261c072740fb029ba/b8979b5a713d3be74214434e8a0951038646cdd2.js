"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const authority_constants_1 = require("app/shared/constants/authority.constants");
const test_module_1 = require("../../../test.module");
const user_management_detail_component_1 = require("app/admin/user-management/user-management-detail.component");
const user_model_1 = require("app/core/user/user.model");
describe('Component Tests', () => {
    describe('User Management Detail Component', () => {
        let comp;
        let fixture;
        const route = {
            data: rxjs_1.of({ user: new user_model_1.User(1, 'user', 'first', 'last', 'first@last.com', true, 'en', [authority_constants_1.Authority.USER], 'admin') })
        };
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [user_management_detail_component_1.UserManagementDetailComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: route
                    }
                ]
            })
                .overrideTemplate(user_management_detail_component_1.UserManagementDetailComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(user_management_detail_component_1.UserManagementDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.user).toEqual(jasmine.objectContaining({
                    id: 1,
                    login: 'user',
                    firstName: 'first',
                    lastName: 'last',
                    email: 'first@last.com',
                    activated: true,
                    langKey: 'en',
                    authorities: [authority_constants_1.Authority.USER],
                    createdBy: 'admin'
                }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlFO0FBQ3pFLDRDQUFpRDtBQUNqRCwrQkFBMEI7QUFFMUIsa0ZBQXFFO0FBQ3JFLHNEQUEyRDtBQUMzRCxpSEFBMkc7QUFDM0cseURBQWdEO0FBRWhELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUNoRCxJQUFJLElBQW1DLENBQUM7UUFDeEMsSUFBSSxPQUF3RCxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFvQjtZQUM3QixJQUFJLEVBQUUsU0FBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksaUJBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLCtCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUN4RixDQUFDO1FBRTVCLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxnRUFBNkIsQ0FBQztnQkFDN0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSx1QkFBYzt3QkFDdkIsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCO2lCQUNGO2FBQ0YsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQyxnRUFBNkIsRUFBRSxFQUFFLENBQUM7aUJBQ25ELGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsZ0VBQTZCLENBQUMsQ0FBQztZQUNqRSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdEIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtnQkFDdEMsUUFBUTtnQkFFUixPQUFPO2dCQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEIsT0FBTztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO29CQUN2QixFQUFFLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUUsTUFBTTtvQkFDYixTQUFTLEVBQUUsT0FBTztvQkFDbEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLFdBQVcsRUFBRSxDQUFDLCtCQUFTLENBQUMsSUFBSSxDQUFDO29CQUM3QixTQUFTLEVBQUUsT0FBTztpQkFDbkIsQ0FBQyxDQUNILENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgYXN5bmMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSAnYXBwL3NoYXJlZC9jb25zdGFudHMvYXV0aG9yaXR5LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck1hbmFnZW1lbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICdhcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnVXNlciBNYW5hZ2VtZW50IERldGFpbCBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IFVzZXJNYW5hZ2VtZW50RGV0YWlsQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFVzZXJNYW5hZ2VtZW50RGV0YWlsQ29tcG9uZW50PjtcbiAgICBjb25zdCByb3V0ZTogQWN0aXZhdGVkUm91dGUgPSAoe1xuICAgICAgZGF0YTogb2YoeyB1c2VyOiBuZXcgVXNlcigxLCAndXNlcicsICdmaXJzdCcsICdsYXN0JywgJ2ZpcnN0QGxhc3QuY29tJywgdHJ1ZSwgJ2VuJywgW0F1dGhvcml0eS5VU0VSXSwgJ2FkbWluJykgfSlcbiAgICB9IGFzIGFueSkgYXMgQWN0aXZhdGVkUm91dGU7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbVXNlck1hbmFnZW1lbnREZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgIHVzZVZhbHVlOiByb3V0ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoVXNlck1hbmFnZW1lbnREZXRhaWxDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChVc2VyTWFuYWdlbWVudERldGFpbENvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdPbkluaXQnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgbG9hZCBhbGwgb24gaW5pdCcsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cblxuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAubmdPbkluaXQoKTtcblxuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChjb21wLnVzZXIpLnRvRXF1YWwoXG4gICAgICAgICAgamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbG9naW46ICd1c2VyJyxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ2ZpcnN0JyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnbGFzdCcsXG4gICAgICAgICAgICBlbWFpbDogJ2ZpcnN0QGxhc3QuY29tJyxcbiAgICAgICAgICAgIGFjdGl2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxhbmdLZXk6ICdlbicsXG4gICAgICAgICAgICBhdXRob3JpdGllczogW0F1dGhvcml0eS5VU0VSXSxcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogJ2FkbWluJ1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==