"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/common/http");
const ng_jhipster_1 = require("ng-jhipster");
const core_1 = require("@ngx-translate/core");
const test_module_1 = require("../../../test.module");
const alert_error_component_1 = require("app/shared/alert/alert-error.component");
const mock_alert_service_1 = require("../../../helpers/mock-alert.service");
describe('Component Tests', () => {
    describe('Alert Error Component', () => {
        let comp;
        let fixture;
        let eventManager;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule, core_1.TranslateModule.forRoot()],
                declarations: [alert_error_component_1.AlertErrorComponent],
                providers: [
                    ng_jhipster_1.JhiEventManager,
                    {
                        provide: ng_jhipster_1.JhiAlertService,
                        useClass: mock_alert_service_1.MockAlertService
                    }
                ]
            })
                .overrideTemplate(alert_error_component_1.AlertErrorComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(alert_error_component_1.AlertErrorComponent);
            comp = fixture.componentInstance;
            eventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
        });
        describe('Error Handling', () => {
            it('Should display an alert on status 0', () => {
                // GIVEN
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: { status: 0 } });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.server.not.reachable');
            });
            it('Should display an alert on status 404', () => {
                // GIVEN
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: { status: 404 } });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.url.not.found');
            });
            it('Should display an alert on generic error', () => {
                // GIVEN
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: { error: { message: 'Error Message' } } });
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: { error: 'Second Error Message' } });
                // THEN
                expect(comp.alerts.length).toBe(2);
                expect(comp.alerts[0].msg).toBe('Error Message');
                expect(comp.alerts[1].msg).toBe('Second Error Message');
            });
            it('Should display an alert on status 400 for generic error', () => {
                // GIVEN
                const response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        type: 'https://www.jhipster.tech/problem/constraint-violation',
                        title: 'Bad Request',
                        status: 400,
                        path: '/api/foos',
                        message: 'error.validation'
                    }
                });
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.validation');
            });
            it('Should display an alert on status 400 for generic error without message', () => {
                // GIVEN
                const response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    error: 'Bad Request'
                });
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('Bad Request');
            });
            it('Should display an alert on status 400 for invalid parameters', () => {
                // GIVEN
                const response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        type: 'https://www.jhipster.tech/problem/constraint-violation',
                        title: 'Method argument not valid',
                        status: 400,
                        path: '/api/foos',
                        message: 'error.validation',
                        fieldErrors: [{ objectName: 'foo', field: 'minField', message: 'Min' }]
                    }
                });
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.Size');
            });
            it('Should display an alert on status 400 for error headers', () => {
                // GIVEN
                const response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders().append('app-error', 'Error Message').append('app-params', 'foo'),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        status: 400,
                        message: 'error.validation'
                    }
                });
                eventManager.broadcast({ name: 'coopcycleApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('Error Message');
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5RTtBQUN6RSwrQ0FBc0U7QUFDdEUsNkNBQStEO0FBQy9ELDhDQUFzRDtBQUV0RCxzREFBMkQ7QUFDM0Qsa0ZBQTZFO0FBQzdFLDRFQUF1RTtBQUV2RSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7UUFDckMsSUFBSSxJQUF5QixDQUFDO1FBQzlCLElBQUksT0FBOEMsQ0FBQztRQUNuRCxJQUFJLFlBQTZCLENBQUM7UUFFbEMsVUFBVSxDQUFDLGVBQUssQ0FBQyxHQUFHLEVBQUU7WUFDcEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLEVBQUUsc0JBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekQsWUFBWSxFQUFFLENBQUMsMkNBQW1CLENBQUM7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVCw2QkFBZTtvQkFDZjt3QkFDRSxPQUFPLEVBQUUsNkJBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQ0FBZ0I7cUJBQzNCO2lCQUNGO2FBQ0YsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQywyQ0FBbUIsRUFBRSxFQUFFLENBQUM7aUJBQ3pDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsMkNBQW1CLENBQUMsQ0FBQztZQUN2RCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsNkJBQWUsQ0FBQyxD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Z0JBQzlFLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBhc3luYyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBKaGlBbGVydFNlcnZpY2UsIEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQWxlcnRFcnJvckNvbXBvbmVudCB9IGZyb20gJ2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IE1vY2tBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21vY2stYWxlcnQuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdBbGVydCBFcnJvciBDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbXA6IEFsZXJ0RXJyb3JDb21wb25lbnQ7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8QWxlcnRFcnJvckNvbXBvbmVudD47XG4gICAgbGV0IGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyO1xuXG4gICAgYmVmb3JlRWFjaChhc3luYygoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbQ29vcGN5Y2xlVGVzdE1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW0FsZXJ0RXJyb3JDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICBKaGlFdmVudE1hbmFnZXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSmhpQWxlcnRTZXJ2aWNlLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IE1vY2tBbGVydFNlcnZpY2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKEFsZXJ0RXJyb3JDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBbGVydEVycm9yQ29tcG9uZW50KTtcbiAgICAgIGNvbXAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgZXZlbnRNYW5hZ2VyID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KEpoaUV2ZW50TWFuYWdlcik7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnRXJyb3IgSGFuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGRpc3BsYXkgYW4gYWxlcnQgb24gc3RhdHVzIDAnLCAoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIGV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY29vcGN5Y2xlQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IHsgc3RhdHVzOiAwIH0gfSk7XG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAuYWxlcnRzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KGNvbXAuYWxlcnRzWzBdLm1zZykudG9CZSgnZXJyb3Iuc2VydmVyLm5vdC5yZWFjaGFibGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnU2hvdWxkIGRpc3BsYXkgYW4gYWxlcnQgb24gc3RhdHVzIDQwNCcsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdjb29wY3ljbGVBcHAuaHR0cEVycm9yJywgY29udGVudDogeyBzdGF0dXM6IDQwNCB9IH0pO1xuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0cy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0c1swXS5tc2cpLnRvQmUoJ2Vycm9yLnVybC5ub3QuZm91bmQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnU2hvdWxkIGRpc3BsYXkgYW4gYWxlcnQgb24gZ2VuZXJpYyBlcnJvcicsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdjb29wY3ljbGVBcHAuaHR0cEVycm9yJywgY29udGVudDogeyBlcnJvcjogeyBtZXNzYWdlOiAnRXJyb3IgTWVzc2FnZScgfSB9IH0pO1xuICAgICAgICBldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2Nvb3BjeWNsZUFwcC5odHRwRXJyb3InLCBjb250ZW50OiB7IGVycm9yOiAnU2Vjb25kIEVycm9yIE1lc3NhZ2UnIH0gfSk7XG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAuYWxlcnRzLmxlbmd0aCkudG9CZSgyKTtcbiAgICAgICAgZXhwZWN0KGNvbXAuYWxlcnRzWzBdLm1zZykudG9CZSgnRXJyb3IgTWVzc2FnZScpO1xuICAgICAgICBleHBlY3QoY29tcC5hbGVydHNbMV0ubXNnKS50b0JlKCdTZWNvbmQgRXJyb3IgTWVzc2FnZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdTaG91bGQgZGlzcGxheSBhbiBhbGVydCBvbiBzdGF0dXMgNDAwIGZvciBnZW5lcmljIGVycm9yJywgKCkgPT4ge1xuICAgICAgICAvLyBHSVZFTlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9mb29zJyxcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKSxcbiAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnaHR0cHM6Ly93d3cuamhpcHN0ZXIudGVjaC9wcm9ibGVtL2NvbnN0cmFpbnQtdmlvbGF0aW9uJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBwYXRoOiAnL2FwaS9mb29zJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvci52YWxpZGF0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY29vcGN5Y2xlQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IHJlc3BvbnNlIH0pO1xuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0cy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0c1swXS5tc2cpLnRvQmUoJ2Vycm9yLnZhbGlkYXRpb24nKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnU2hvdWxkIGRpc3BsYXkgYW4gYWxlcnQgb24gc3RhdHVzIDQwMCBmb3IgZ2VuZXJpYyBlcnJvciB3aXRob3V0IG1lc3NhZ2UnLCAoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Zvb3MnLFxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLFxuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgIGVycm9yOiAnQmFkIFJlcXVlc3QnXG4gICAgICAgIH0pO1xuICAgICAgICBldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2Nvb3BjeWNsZUFwcC5odHRwRXJyb3InLCBjb250ZW50OiByZXNwb25zZSB9KTtcbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3QoY29tcC5hbGVydHMubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgICBleHBlY3QoY29tcC5hbGVydHNbMF0ubXNnKS50b0JlKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdTaG91bGQgZGlzcGxheSBhbiBhbGVydCBvbiBzdGF0dXMgNDAwIGZvciBpbnZhbGlkIHBhcmFtZXRlcnMnLCAoKSA9PiB7XG4gICAgICAgIC8vIEdJVkVOXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Zvb3MnLFxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLFxuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgIHN0YXR1c1RleHQ6ICdCYWQgUmVxdWVzdCcsXG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdodHRwczovL3d3dy5qaGlwc3Rlci50ZWNoL3Byb2JsZW0vY29uc3RyYWludC12aW9sYXRpb24nLFxuICAgICAgICAgICAgdGl0bGU6ICdNZXRob2QgYXJndW1lbnQgbm90IHZhbGlkJyxcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgcGF0aDogJy9hcGkvZm9vcycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnZXJyb3IudmFsaWRhdGlvbicsXG4gICAgICAgICAgICBmaWVsZEVycm9yczogW3sgb2JqZWN0TmFtZTogJ2ZvbycsIGZpZWxkOiAnbWluRmllbGQnLCBtZXNzYWdlOiAnTWluJyB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY29vcGN5Y2xlQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IHJlc3BvbnNlIH0pO1xuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0cy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0c1swXS5tc2cpLnRvQmUoJ2Vycm9yLlNpemUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnU2hvdWxkIGRpc3BsYXkgYW4gYWxlcnQgb24gc3RhdHVzIDQwMCBmb3IgZXJyb3IgaGVhZGVycycsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZm9vcycsXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuYXBwZW5kKCdhcHAtZXJyb3InLCAnRXJyb3IgTWVzc2FnZScpLmFwcGVuZCgnYXBwLXBhcmFtcycsICdmb28nKSxcbiAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvci52YWxpZGF0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY29vcGN5Y2xlQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IHJlc3BvbnNlIH0pO1xuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0cy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjb21wLmFsZXJ0c1swXS5tc2cpLnRvQmUoJ0Vycm9yIE1lc3NhZ2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9