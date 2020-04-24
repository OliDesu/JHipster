"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const configuration_service_1 = require("app/admin/configuration/configuration.service");
const app_constants_1 = require("app/app.constants");
describe('Service Tests', () => {
    describe('Logs Service', () => {
        let service;
        let httpMock;
        let expectedResult;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            expectedResult = null;
            service = testing_1.TestBed.get(configuration_service_1.ConfigurationService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(() => {
            httpMock.verify();
        });
        describe('Service methods', () => {
            it('should call correct URL', () => {
                service.getBeans().subscribe();
                const req = httpMock.expectOne({ method: 'GET' });
                const resourceUrl = app_constants_1.SERVER_API_URL + 'management/configprops';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should get the config', () => {
                const bean = {
                    prefix: 'jhipster',
                    properties: {
                        clientApp: {
                            name: 'jhipsterApp'
                        }
                    }
                };
                const configProps = {
                    contexts: {
                        jhipster: {
                            beans: {
                                'io.github.jhipster.config.JHipsterProperties': bean
                            }
                        }
                    }
                };
                service.getBeans().subscribe(received => (expectedResult = received));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(configProps);
                expect(expectedResult).toEqual([bean]);
            });
            it('should get the env', () => {
                const propertySources = [
                    {
                        name: 'server.ports',
                        properties: {
                            'local.server.port': {
                                value: '8080'
                            }
                        }
                    }
                ];
                const env = { propertySources };
                service.getPropertySources().subscribe(received => (expectedResult = received));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(env);
                expect(expectedResult).toEqual(propertySources);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5zZXJ2aWNlLnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBZ0Q7QUFDaEQsMERBQThGO0FBRTlGLHlGQUE2SDtBQUM3SCxxREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDN0IsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDNUIsSUFBSSxPQUE2QixDQUFDO1FBQ2xDLElBQUksUUFBK0IsQ0FBQztRQUNwQyxJQUFJLGNBQWdELENBQUM7UUFFckQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUF1QixDQUFDO2FBQ25DLENBQUMsQ0FBQztZQUVILGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDdEIsT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLDRDQUFvQixDQUFDLENBQUM7WUFDNUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLCtCQUFxQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtZQUMvQixFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRS9CLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxXQUFXLEdBQUcsOEJBQWMsR0FBRyx3QkFBd0IsQ0FBQztnQkFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLEdBQVM7b0JBQ2pCLE1BQU0sRUFBRSxVQUFVO29CQUNsQixVQUFVLEVBQUU7d0JBQ1YsU0FBUyxFQUFFOzRCQUNULElBQUksRUFBRSxhQUFhO3lCQUNwQjtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLE1BQU0sV0FBVyxHQUFnQjtvQkFDL0IsUUFBUSxFQUFFO3dCQUNSLFFBQVEsRUFBRTs0QkFDUixLQUFLLEVBQUU7Z0NBQ0wsOENBQThDLEVBQUUsSUFBSTs2QkFDckQ7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFFdEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7Z0JBQzVCLE1BQU0sZUFBZSxHQUFxQjtvQkFDeEM7d0JBQ0UsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFVBQVUsRUFBRTs0QkFDVixtQkFBbUIsRUFBRTtnQ0FDbkIsS0FBSyxFQUFFLE1BQU07NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixNQUFNLEdBQUcsR0FBUSxFQUFFLGVBQWUsRUFBRSxDQUFDO2dCQUNyQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUVoRixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2Uuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlLCBIdHRwVGVzdGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cC90ZXN0aW5nJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UsIENvbmZpZ1Byb3BzLCBFbnYsIEJlYW4sIFByb3BlcnR5U291cmNlIH0gZnJvbSAnYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNFUlZFUl9BUElfVVJMIH0gZnJvbSAnYXBwL2FwcC5jb25zdGFudHMnO1xuXG5kZXNjcmliZSgnU2VydmljZSBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0xvZ3MgU2VydmljZScsICgpID0+IHtcbiAgICBsZXQgc2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2U7XG4gICAgbGV0IGh0dHBNb2NrOiBIdHRwVGVzdGluZ0NvbnRyb2xsZXI7XG4gICAgbGV0IGV4cGVjdGVkUmVzdWx0OiBCZWFuW10gfCBQcm9wZXJ0eVNvdXJjZVtdIHwgbnVsbDtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0h0dHBDbGllbnRUZXN0aW5nTW9kdWxlXVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdGVkUmVzdWx0ID0gbnVsbDtcbiAgICAgIHNlcnZpY2UgPSBUZXN0QmVkLmdldChDb25maWd1cmF0aW9uU2VydmljZSk7XG4gICAgICBodHRwTW9jayA9IFRlc3RCZWQuZ2V0KEh0dHBUZXN0aW5nQ29udHJvbGxlcik7XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgaHR0cE1vY2sudmVyaWZ5KCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnU2VydmljZSBtZXRob2RzJywgKCkgPT4ge1xuICAgICAgaXQoJ3Nob3VsZCBjYWxsIGNvcnJlY3QgVVJMJywgKCkgPT4ge1xuICAgICAgICBzZXJ2aWNlLmdldEJlYW5zKCkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VVcmwgPSBTRVJWRVJfQVBJX1VSTCArICdtYW5hZ2VtZW50L2NvbmZpZ3Byb3BzJztcbiAgICAgICAgZXhwZWN0KHJlcS5yZXF1ZXN0LnVybCkudG9FcXVhbChyZXNvdXJjZVVybCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBnZXQgdGhlIGNvbmZpZycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYmVhbjogQmVhbiA9IHtcbiAgICAgICAgICBwcmVmaXg6ICdqaGlwc3RlcicsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgY2xpZW50QXBwOiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdqaGlwc3RlckFwcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbmZpZ1Byb3BzOiBDb25maWdQcm9wcyA9IHtcbiAgICAgICAgICBjb250ZXh0czoge1xuICAgICAgICAgICAgamhpcHN0ZXI6IHtcbiAgICAgICAgICAgICAgYmVhbnM6IHtcbiAgICAgICAgICAgICAgICAnaW8uZ2l0aHViLmpoaXBzdGVyLmNvbmZpZy5KSGlwc3RlclByb3BlcnRpZXMnOiBiZWFuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNlcnZpY2UuZ2V0QmVhbnMoKS5zdWJzY3JpYmUocmVjZWl2ZWQgPT4gKGV4cGVjdGVkUmVzdWx0ID0gcmVjZWl2ZWQpKTtcblxuICAgICAgICBjb25zdCByZXEgPSBodHRwTW9jay5leHBlY3RPbmUoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICByZXEuZmx1c2goY29uZmlnUHJvcHMpO1xuICAgICAgICBleHBlY3QoZXhwZWN0ZWRSZXN1bHQpLnRvRXF1YWwoW2JlYW5dKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIGdldCB0aGUgZW52JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVNvdXJjZXM6IFByb3BlcnR5U291cmNlW10gPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3NlcnZlci5wb3J0cycsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICdsb2NhbC5zZXJ2ZXIucG9ydCc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzgwODAnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGVudjogRW52ID0geyBwcm9wZXJ0eVNvdXJjZXMgfTtcbiAgICAgICAgc2VydmljZS5nZXRQcm9wZXJ0eVNvdXJjZXMoKS5zdWJzY3JpYmUocmVjZWl2ZWQgPT4gKGV4cGVjdGVkUmVzdWx0ID0gcmVjZWl2ZWQpKTtcblxuICAgICAgICBjb25zdCByZXEgPSBodHRwTW9jay5leHBlY3RPbmUoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICByZXEuZmx1c2goZW52KTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b0VxdWFsKHByb3BlcnR5U291cmNlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==