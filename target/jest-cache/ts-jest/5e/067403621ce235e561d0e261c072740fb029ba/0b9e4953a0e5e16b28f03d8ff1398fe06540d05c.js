"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const platform_browser_1 = require("@angular/platform-browser");
const rxjs_1 = require("rxjs");
const core_1 = require("@ngx-translate/core");
const main_component_1 = require("app/layouts/main/main.component");
const test_module_1 = require("../../../test.module");
describe('Component Tests', () => {
    describe('MainComponent', () => {
        let comp;
        let fixture;
        let router;
        const routerEventsSubject = new rxjs_1.Subject();
        let titleService;
        let translateService;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule, core_1.TranslateModule.forRoot()],
                declarations: [main_component_1.MainComponent],
                providers: [platform_browser_1.Title]
            })
                .overrideTemplate(main_component_1.MainComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(main_component_1.MainComponent);
            comp = fixture.componentInstance;
            router = testing_1.TestBed.get(router_1.Router);
            router.setEvents(routerEventsSubject.asObservable());
            titleService = testing_1.TestBed.get(platform_browser_1.Title);
            translateService = testing_1.TestBed.get(core_1.TranslateService);
        });
        describe('page title', () => {
            let routerState;
            const defaultPageTitle = 'global.title';
            const parentRoutePageTitle = 'parentTitle';
            const childRoutePageTitle = 'childTitle';
            const navigationEnd = new router_1.NavigationEnd(1, '', '');
            const langChangeEvent = { lang: 'en', translations: null };
            beforeEach(() => {
                routerState = { snapshot: { root: {} } };
                router.setRouterState(routerState);
                spyOn(translateService, 'get').and.callFake((key) => {
                    return rxjs_1.of(key + ' translated');
                });
                translateService.currentLang = 'en';
                spyOn(titleService, 'setTitle');
                comp.ngOnInit();
            });
            describe('navigation end', () => {
                it('should set page title to default title if pageTitle is missing on routes', () => {
                    // WHEN
                    routerEventsSubject.next(navigationEnd);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(defaultPageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(defaultPageTitle + ' translated');
                });
                it('should set page title to root route pageTitle if there is no child routes', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    // WHEN
                    routerEventsSubject.next(navigationEnd);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
                it('should set page title to child route pageTitle if child routes exist and pageTitle is set for child route', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = { data: { pageTitle: childRoutePageTitle } };
                    // WHEN
                    routerEventsSubject.next(navigationEnd);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(childRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(childRoutePageTitle + ' translated');
                });
                it('should set page title to parent route pageTitle if child routes exists but pageTitle is not set for child route data', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = { data: {} };
                    // WHEN
                    routerEventsSubject.next(navigationEnd);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
                it('should set page title to parent route pageTitle if child routes exists but data is not set for child route', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = {};
                    // WHEN
                    routerEventsSubject.next(navigationEnd);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
            });
            describe('language change', () => {
                it('should set page title to default title if pageTitle is missing on routes', () => {
                    // WHEN
                    translateService.onLangChange.emit(langChangeEvent);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(defaultPageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(defaultPageTitle + ' translated');
                });
                it('should set page title to root route pageTitle if there is no child routes', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    // WHEN
                    translateService.onLangChange.emit(langChangeEvent);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
                it('should set page title to child route pageTitle if child routes exist and pageTitle is set for child route', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = { data: { pageTitle: childRoutePageTitle } };
                    // WHEN
                    translateService.onLangChange.emit(langChangeEvent);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(childRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(childRoutePageTitle + ' translated');
                });
                it('should set page title to parent route pageTitle if child routes exists but pageTitle is not set for child route data', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = { data: {} };
                    // WHEN
                    translateService.onLangChange.emit(langChangeEvent);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
                it('should set page title to parent route pageTitle if child routes exists but data is not set for child route', () => {
                    // GIVEN
                    routerState.snapshot.root.data = { pageTitle: parentRoutePageTitle };
                    routerState.snapshot.root.firstChild = {};
                    // WHEN
                    translateService.onLangChange.emit(langChangeEvent);
                    // THEN
                    expect(translateService.get).toHaveBeenCalledWith(parentRoutePageTitle);
                    expect(titleService.setTitle).toHaveBeenCalledWith(parentRoutePageTitle + ' translated');
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlFO0FBQ3pFLDRDQUFxRTtBQUNyRSxnRUFBa0Q7QUFDbEQsK0JBQW1DO0FBQ25DLDhDQUF5RjtBQUV6RixvRUFBZ0U7QUFDaEUsc0RBQTJEO0FBRzNELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsSUFBSSxJQUFtQixDQUFDO1FBQ3hCLElBQUksT0FBd0MsQ0FBQztRQUM3QyxJQUFJLE1BQWtCLENBQUM7UUFDdkIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQU8sRUFBZSxDQUFDO1FBQ3ZELElBQUksWUFBbUIsQ0FBQztRQUN4QixJQUFJLGdCQUFrQyxDQUFDO1FBRXZDLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixFQUFFLHNCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLHdCQUFLLENBQUM7YUFDbkIsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQyw4QkFBYSxFQUFFLEVBQUUsQ0FBQztpQkFDbkMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw4QkFBYSxDQUFDLENBQUM7WUFDakQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLENBQUM7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b0JBQ3hFLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLENBQUM7Z0JBQzNGLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyw0R0FBNEcsRUFBRSxHQUFHLEVBQUU7b0JBQ3BILFFBQVE7b0JBQ1IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLENBQUM7b0JBQ3JFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBRTFDLE9BQU87b0JBQ1AsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFcEQsT0FBTztvQkFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsQ0FBQztnQkFDM0YsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmMsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJFdmVudCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICdhcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IENvb3BjeWNsZVRlc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi90ZXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNb2NrUm91dGVyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLXJvdXRlLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnTWFpbkNvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogTWFpbkNvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxNYWluQ29tcG9uZW50PjtcbiAgICBsZXQgcm91dGVyOiBNb2NrUm91dGVyO1xuICAgIGNvbnN0IHJvdXRlckV2ZW50c1N1YmplY3QgPSBuZXcgU3ViamVjdDxSb3V0ZXJFdmVudD4oKTtcbiAgICBsZXQgdGl0bGVTZXJ2aWNlOiBUaXRsZTtcbiAgICBsZXQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KCldLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtNYWluQ29tcG9uZW50XSxcbiAgICAgICAgcHJvdmlkZXJzOiBbVGl0bGVdXG4gICAgICB9KVxuICAgICAgICAub3ZlcnJpZGVUZW1wbGF0ZShNYWluQ29tcG9uZW50LCAnJylcbiAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoTWFpbkNvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHJvdXRlciA9IFRlc3RCZWQuZ2V0KFJvdXRlcik7XG4gICAgICByb3V0ZXIuc2V0RXZlbnRzKHJvdXRlckV2ZW50c1N1YmplY3QuYXNPYnNlcnZhYmxlKCkpO1xuICAgICAgdGl0bGVTZXJ2aWNlID0gVGVzdEJlZC5nZXQoVGl0bGUpO1xuICAgICAgdHJhbnNsYXRlU2VydmljZSA9IFRlc3RCZWQuZ2V0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3BhZ2UgdGl0bGUnLCAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVyU3RhdGU6IGFueTtcbiAgICAgIGNvbnN0IGRlZmF1bHRQYWdlVGl0bGUgPSAnZ2xvYmFsLnRpdGxlJztcbiAgICAgIGNvbnN0IHBhcmVudFJvdXRlUGFnZVRpdGxlID0gJ3BhcmVudFRpdGxlJztcbiAgICAgIGNvbnN0IGNoaWxkUm91dGVQYWdlVGl0bGUgPSAnY2hpbGRUaXRsZSc7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uRW5kID0gbmV3IE5hdmlnYXRpb25FbmQoMSwgJycsICcnKTtcbiAgICAgIGNvbnN0IGxhbmdDaGFuZ2VFdmVudDogTGFuZ0NoYW5nZUV2ZW50ID0geyBsYW5nOiAnZW4nLCB0cmFuc2xhdGlvbnM6IG51bGwgfTtcblxuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHJvdXRlclN0YXRlID0geyBzbmFwc2hvdDogeyByb290OiB7fSB9IH07XG4gICAgICAgIHJvdXRlci5zZXRSb3V0ZXJTdGF0ZShyb3V0ZXJTdGF0ZSk7XG4gICAgICAgIHNweU9uKHRyYW5zbGF0ZVNlcnZpY2UsICdnZXQnKS5hbmQuY2FsbEZha2UoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKGtleSArICcgdHJhbnNsYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyA9ICdlbic7XG4gICAgICAgIHNweU9uKHRpdGxlU2VydmljZSwgJ3NldFRpdGxlJyk7XG4gICAgICAgIGNvbXAubmdPbkluaXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZXNjcmliZSgnbmF2aWdhdGlvbiBlbmQnLCAoKSA9PiB7XG4gICAgICAgIGl0KCdzaG91bGQgc2V0IHBhZ2UgdGl0bGUgdG8gZGVmYXVsdCB0aXRsZSBpZiBwYWdlVGl0bGUgaXMgbWlzc2luZyBvbiByb3V0ZXMnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIHJvdXRlckV2ZW50c1N1YmplY3QubmV4dChuYXZpZ2F0aW9uRW5kKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3QodHJhbnNsYXRlU2VydmljZS5nZXQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGRlZmF1bHRQYWdlVGl0bGUpO1xuICAgICAgICAgIGV4cGVjdCh0aXRsZVNlcnZpY2Uuc2V0VGl0bGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGRlZmF1bHRQYWdlVGl0bGUgKyAnIHRyYW5zbGF0ZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBzZXQgcGFnZSB0aXRsZSB0byByb290IHJvdXRlIHBhZ2VUaXRsZSBpZiB0aGVyZSBpcyBubyBjaGlsZCByb3V0ZXMnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICByb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290LmRhdGEgPSB7IHBhZ2VUaXRsZTogcGFyZW50Um91dGVQYWdlVGl0bGUgfTtcblxuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICByb3V0ZXJFdmVudHNTdWJqZWN0Lm5leHQobmF2aWdhdGlvbkVuZCk7XG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHRyYW5zbGF0ZVNlcnZpY2UuZ2V0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChwYXJlbnRSb3V0ZVBhZ2VUaXRsZSk7XG4gICAgICAgICAgZXhwZWN0KHRpdGxlU2VydmljZS5zZXRUaXRsZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgocGFyZW50Um91dGVQYWdlVGl0bGUgKyAnIHRyYW5zbGF0ZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBzZXQgcGFnZSB0aXRsZSB0byBjaGlsZCByb3V0ZSBwYWdlVGl0bGUgaWYgY2hpbGQgcm91dGVzIGV4aXN0IGFuZCBwYWdlVGl0bGUgaXMgc2V0IGZvciBjaGlsZCByb3V0ZScsICgpID0+IHtcbiAgICAgICAgICAvLyBHSVZFTlxuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZGF0YSA9IHsgcGFnZVRpdGxlOiBwYXJlbnRSb3V0ZVBhZ2VUaXRsZSB9O1xuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZmlyc3RDaGlsZCA9IHsgZGF0YTogeyBwYWdlVGl0bGU6IGNoaWxkUm91dGVQYWdlVGl0bGUgfSB9O1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIHJvdXRlckV2ZW50c1N1YmplY3QubmV4dChuYXZpZ2F0aW9uRW5kKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3QodHJhbnNsYXRlU2VydmljZS5nZXQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGNoaWxkUm91dGVQYWdlVGl0bGUpO1xuICAgICAgICAgIGV4cGVjdCh0aXRsZVNlcnZpY2Uuc2V0VGl0bGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGNoaWxkUm91dGVQYWdlVGl0bGUgKyAnIHRyYW5zbGF0ZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBzZXQgcGFnZSB0aXRsZSB0byBwYXJlbnQgcm91dGUgcGFnZVRpdGxlIGlmIGNoaWxkIHJvdXRlcyBleGlzdHMgYnV0IHBhZ2VUaXRsZSBpcyBub3Qgc2V0IGZvciBjaGlsZCByb3V0ZSBkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIEdJVkVOXG4gICAgICAgICAgcm91dGVyU3RhdGUuc25hcHNob3Qucm9vdC5kYXRhID0geyBwYWdlVGl0bGU6IHBhcmVudFJvdXRlUGFnZVRpdGxlIH07XG4gICAgICAgICAgcm91dGVyU3RhdGUuc25hcHNob3Qucm9vdC5maXJzdENoaWxkID0geyBkYXRhOiB7fSB9O1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIHJvdXRlckV2ZW50c1N1YmplY3QubmV4dChuYXZpZ2F0aW9uRW5kKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3QodHJhbnNsYXRlU2VydmljZS5nZXQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHBhcmVudFJvdXRlUGFnZVRpdGxlKTtcbiAgICAgICAgICBleHBlY3QodGl0bGVTZXJ2aWNlLnNldFRpdGxlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChwYXJlbnRSb3V0ZVBhZ2VUaXRsZSArICcgdHJhbnNsYXRlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHNldCBwYWdlIHRpdGxlIHRvIHBhcmVudCByb3V0ZSBwYWdlVGl0bGUgaWYgY2hpbGQgcm91dGVzIGV4aXN0cyBidXQgZGF0YSBpcyBub3Qgc2V0IGZvciBjaGlsZCByb3V0ZScsICgpID0+IHtcbiAgICAgICAgICAvLyBHSVZFTlxuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZGF0YSA9IHsgcGFnZVRpdGxlOiBwYXJlbnRSb3V0ZVBhZ2VUaXRsZSB9O1xuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZmlyc3RDaGlsZCA9IHt9O1xuXG4gICAgICAgICAgLy8gV0hFTlxuICAgICAgICAgIHJvdXRlckV2ZW50c1N1YmplY3QubmV4dChuYXZpZ2F0aW9uRW5kKTtcblxuICAgICAgICAgIC8vIFRIRU5cbiAgICAgICAgICBleHBlY3QodHJhbnNsYXRlU2VydmljZS5nZXQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHBhcmVudFJvdXRlUGFnZVRpdGxlKTtcbiAgICAgICAgICBleHBlY3QodGl0bGVTZXJ2aWNlLnNldFRpdGxlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChwYXJlbnRSb3V0ZVBhZ2VUaXRsZSArICcgdHJhbnNsYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBkZXNjcmliZSgnbGFuZ3VhZ2UgY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpdCgnc2hvdWxkIHNldCBwYWdlIHRpdGxlIHRvIGRlZmF1bHQgdGl0bGUgaWYgcGFnZVRpdGxlIGlzIG1pc3Npbmcgb24gcm91dGVzJywgKCkgPT4ge1xuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5lbWl0KGxhbmdDaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHRyYW5zbGF0ZVNlcnZpY2UuZ2V0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChkZWZhdWx0UGFnZVRpdGxlKTtcbiAgICAgICAgICBleHBlY3QodGl0bGVTZXJ2aWNlLnNldFRpdGxlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChkZWZhdWx0UGFnZVRpdGxlICsgJyB0cmFuc2xhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgc2V0IHBhZ2UgdGl0bGUgdG8gcm9vdCByb3V0ZSBwYWdlVGl0bGUgaWYgdGhlcmUgaXMgbm8gY2hpbGQgcm91dGVzJywgKCkgPT4ge1xuICAgICAgICAgIC8vIEdJVkVOXG4gICAgICAgICAgcm91dGVyU3RhdGUuc25hcHNob3Qucm9vdC5kYXRhID0geyBwYWdlVGl0bGU6IHBhcmVudFJvdXRlUGFnZVRpdGxlIH07XG5cbiAgICAgICAgICAvLyBXSEVOXG4gICAgICAgICAgdHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2UuZW1pdChsYW5nQ2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgLy8gVEhFTlxuICAgICAgICAgIGV4cGVjdCh0cmFuc2xhdGVTZXJ2aWNlLmdldCkudG9IYXZlQmVlbkNhbGxlZFdpdGgocGFyZW50Um91dGVQYWdlVGl0bGUpO1xuICAgICAgICAgIGV4cGVjdCh0aXRsZVNlcnZpY2Uuc2V0VGl0bGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHBhcmVudFJvdXRlUGFnZVRpdGxlICsgJyB0cmFuc2xhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgc2V0IHBhZ2UgdGl0bGUgdG8gY2hpbGQgcm91dGUgcGFnZVRpdGxlIGlmIGNoaWxkIHJvdXRlcyBleGlzdCBhbmQgcGFnZVRpdGxlIGlzIHNldCBmb3IgY2hpbGQgcm91dGUnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICByb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290LmRhdGEgPSB7IHBhZ2VUaXRsZTogcGFyZW50Um91dGVQYWdlVGl0bGUgfTtcbiAgICAgICAgICByb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290LmZpcnN0Q2hpbGQgPSB7IGRhdGE6IHsgcGFnZVRpdGxlOiBjaGlsZFJvdXRlUGFnZVRpdGxlIH0gfTtcblxuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5lbWl0KGxhbmdDaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHRyYW5zbGF0ZVNlcnZpY2UuZ2V0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChjaGlsZFJvdXRlUGFnZVRpdGxlKTtcbiAgICAgICAgICBleHBlY3QodGl0bGVTZXJ2aWNlLnNldFRpdGxlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChjaGlsZFJvdXRlUGFnZVRpdGxlICsgJyB0cmFuc2xhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgc2V0IHBhZ2UgdGl0bGUgdG8gcGFyZW50IHJvdXRlIHBhZ2VUaXRsZSBpZiBjaGlsZCByb3V0ZXMgZXhpc3RzIGJ1dCBwYWdlVGl0bGUgaXMgbm90IHNldCBmb3IgY2hpbGQgcm91dGUgZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBHSVZFTlxuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZGF0YSA9IHsgcGFnZVRpdGxlOiBwYXJlbnRSb3V0ZVBhZ2VUaXRsZSB9O1xuICAgICAgICAgIHJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QuZmlyc3RDaGlsZCA9IHsgZGF0YToge30gfTtcblxuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5lbWl0KGxhbmdDaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHRyYW5zbGF0ZVNlcnZpY2UuZ2V0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChwYXJlbnRSb3V0ZVBhZ2VUaXRsZSk7XG4gICAgICAgICAgZXhwZWN0KHRpdGxlU2VydmljZS5zZXRUaXRsZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgocGFyZW50Um91dGVQYWdlVGl0bGUgKyAnIHRyYW5zbGF0ZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBzZXQgcGFnZSB0aXRsZSB0byBwYXJlbnQgcm91dGUgcGFnZVRpdGxlIGlmIGNoaWxkIHJvdXRlcyBleGlzdHMgYnV0IGRhdGEgaXMgbm90IHNldCBmb3IgY2hpbGQgcm91dGUnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgICByb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290LmRhdGEgPSB7IHBhZ2VUaXRsZTogcGFyZW50Um91dGVQYWdlVGl0bGUgfTtcbiAgICAgICAgICByb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290LmZpcnN0Q2hpbGQgPSB7fTtcblxuICAgICAgICAgIC8vIFdIRU5cbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5lbWl0KGxhbmdDaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICAvLyBUSEVOXG4gICAgICAgICAgZXhwZWN0KHRyYW5zbGF0ZVNlcnZpY2UuZ2V0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChwYXJlbnRSb3V0ZVBhZ2VUaXRsZSk7XG4gICAgICAgICAgZXhwZWN0KHRpdGxlU2VydmljZS5zZXRUaXRsZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgocGFyZW50Um91dGVQYWdlVGl0bGUgKyAnIHRyYW5zbGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==