"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const ng_jhipster_1 = require("ng-jhipster");
const authority_constants_1 = require("app/shared/constants/authority.constants");
const user_service_1 = require("app/core/user/user.service");
const user_model_1 = require("app/core/user/user.model");
const app_constants_1 = require("app/app.constants");
describe('Service Tests', () => {
    describe('User Service', () => {
        let service;
        let httpMock;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule],
                providers: [ng_jhipster_1.JhiDateUtils]
            });
            service = testing_1.TestBed.get(user_service_1.UserService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(() => {
            httpMock.verify();
        });
        describe('Service methods', () => {
            it('should call correct URL', () => {
                service.find('user').subscribe();
                const req = httpMock.expectOne({ method: 'GET' });
                const resourceUrl = app_constants_1.SERVER_API_URL + 'api/users';
                expect(req.request.url).toEqual(`${resourceUrl}/user`);
            });
            it('should return User', () => {
                let expectedResult;
                service.find('user').subscribe(received => {
                    expectedResult = received.login;
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(new user_model_1.User(1, 'user'));
                expect(expectedResult).toEqual('user');
            });
            it('should return Authorities', () => {
                let expectedResult = [];
                service.authorities().subscribe(authorities => {
                    expectedResult = authorities;
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush([authority_constants_1.Authority.USER, authority_constants_1.Authority.ADMIN]);
                expect(expectedResult).toEqual([authority_constants_1.Authority.USER, authority_constants_1.Authority.ADMIN]);
            });
            it('should propagate not found response', () => {
                let expectedResult = 0;
                service.find('user').subscribe(null, (error) => {
                    expectedResult = error.status;
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush('Invalid request parameters', {
                    status: 404,
                    statusText: 'Bad Request'
                });
                expect(expectedResult).toEqual(404);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2NvcmUvdXNlci91c2VyLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFnRDtBQUVoRCwwREFBOEY7QUFDOUYsNkNBQTJDO0FBRTNDLGtGQUFxRTtBQUNyRSw2REFBeUQ7QUFDekQseURBQWdEO0FBQ2hELHFEQUFtRDtBQUVuRCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUM3QixRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUM1QixJQUFJLE9BQW9CLENBQUM7UUFDekIsSUFBSSxRQUErQixDQUFDO1FBRXBDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBdUIsQ0FBQztnQkFDbEMsU0FBUyxFQUFFLENBQUMsMEJBQVksQ0FBQzthQUMxQixDQUFDLENBQUM7WUFFSCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQyxDQUFDO1lBQ25DLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFakMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLFdBQVcsR0FBRyw4QkFBYyxHQUFHLFdBQVcsQ0FBQztnQkFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsV0FBVyxPQUFPLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7Z0JBQzVCLElBQUksY0FBa0MsQ0FBQztnQkFFdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3hDLGNBQWMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtnQkFDbkMsSUFBSSxjQUFjLEdBQWEsRUFBRSxDQUFDO2dCQUVsQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUM1QyxjQUFjLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBRWxELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQywrQkFBUyxDQUFDLElBQUksRUFBRSwrQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQywrQkFBUyxDQUFDLElBQUksRUFBRSwrQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtvQkFDaEUsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsR0FBRyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRTtvQkFDdEMsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsVUFBVSxFQUFFLGFBQWE7aUJBQzFCLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9jb3JlL3VzZXIvdXNlci5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlLCBIdHRwVGVzdGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cC90ZXN0aW5nJztcbmltcG9ydCB7IEpoaURhdGVVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSAnYXBwL3NoYXJlZC9jb25zdGFudHMvYXV0aG9yaXR5LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkwgfSBmcm9tICdhcHAvYXBwLmNvbnN0YW50cyc7XG5cbmRlc2NyaWJlKCdTZXJ2aWNlIFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnVXNlciBTZXJ2aWNlJywgKCkgPT4ge1xuICAgIGxldCBzZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBsZXQgaHR0cE1vY2s6IEh0dHBUZXN0aW5nQ29udHJvbGxlcjtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0h0dHBDbGllbnRUZXN0aW5nTW9kdWxlXSxcbiAgICAgICAgcHJvdmlkZXJzOiBbSmhpRGF0ZVV0aWxzXVxuICAgICAgfSk7XG5cbiAgICAgIHNlcnZpY2UgPSBUZXN0QmVkLmdldChVc2VyU2VydmljZSk7XG4gICAgICBodHRwTW9jayA9IFRlc3RCZWQuZ2V0KEh0dHBUZXN0aW5nQ29udHJvbGxlcik7XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgaHR0cE1vY2sudmVyaWZ5KCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnU2VydmljZSBtZXRob2RzJywgKCkgPT4ge1xuICAgICAgaXQoJ3Nob3VsZCBjYWxsIGNvcnJlY3QgVVJMJywgKCkgPT4ge1xuICAgICAgICBzZXJ2aWNlLmZpbmQoJ3VzZXInKS5zdWJzY3JpYmUoKTtcblxuICAgICAgICBjb25zdCByZXEgPSBodHRwTW9jay5leHBlY3RPbmUoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICBjb25zdCByZXNvdXJjZVVybCA9IFNFUlZFUl9BUElfVVJMICsgJ2FwaS91c2Vycyc7XG4gICAgICAgIGV4cGVjdChyZXEucmVxdWVzdC51cmwpLnRvRXF1YWwoYCR7cmVzb3VyY2VVcmx9L3VzZXJgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBVc2VyJywgKCkgPT4ge1xuICAgICAgICBsZXQgZXhwZWN0ZWRSZXN1bHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXJ2aWNlLmZpbmQoJ3VzZXInKS5zdWJzY3JpYmUocmVjZWl2ZWQgPT4ge1xuICAgICAgICAgIGV4cGVjdGVkUmVzdWx0ID0gcmVjZWl2ZWQubG9naW47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIHJlcS5mbHVzaChuZXcgVXNlcigxLCAndXNlcicpKTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b0VxdWFsKCd1c2VyJyk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gQXV0aG9yaXRpZXMnLCAoKSA9PiB7XG4gICAgICAgIGxldCBleHBlY3RlZFJlc3VsdDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBzZXJ2aWNlLmF1dGhvcml0aWVzKCkuc3Vic2NyaWJlKGF1dGhvcml0aWVzID0+IHtcbiAgICAgICAgICBleHBlY3RlZFJlc3VsdCA9IGF1dGhvcml0aWVzO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnR0VUJyB9KTtcblxuICAgICAgICByZXEuZmx1c2goW0F1dGhvcml0eS5VU0VSLCBBdXRob3JpdHkuQURNSU5dKTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b0VxdWFsKFtBdXRob3JpdHkuVVNFUiwgQXV0aG9yaXR5LkFETUlOXSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBwcm9wYWdhdGUgbm90IGZvdW5kIHJlc3BvbnNlJywgKCkgPT4ge1xuICAgICAgICBsZXQgZXhwZWN0ZWRSZXN1bHQgPSAwO1xuXG4gICAgICAgIHNlcnZpY2UuZmluZCgndXNlcicpLnN1YnNjcmliZShudWxsLCAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZXhwZWN0ZWRSZXN1bHQgPSBlcnJvci5zdGF0dXM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIHJlcS5mbHVzaCgnSW52YWxpZCByZXF1ZXN0IHBhcmFtZXRlcnMnLCB7XG4gICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgICAgc3RhdHVzVGV4dDogJ0JhZCBSZXF1ZXN0J1xuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b0VxdWFsKDQwNCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==