"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const logs_service_1 = require("app/admin/logs/logs.service");
const app_constants_1 = require("app/app.constants");
describe('Service Tests', () => {
    describe('Logs Service', () => {
        let service;
        let httpMock;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            service = testing_1.TestBed.get(logs_service_1.LogsService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(() => {
            httpMock.verify();
        });
        describe('Service methods', () => {
            it('should call correct URL', () => {
                service.findAll().subscribe();
                const req = httpMock.expectOne({ method: 'GET' });
                const resourceUrl = app_constants_1.SERVER_API_URL + 'management/loggers';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should change log level', () => {
                service.changeLevel('main', 'ERROR').subscribe();
                const req = httpMock.expectOne({ method: 'POST' });
                const resourceUrl = app_constants_1.SERVER_API_URL + 'management/loggers/main';
                expect(req.request.url).toEqual(resourceUrl);
                expect(req.request.body).toEqual({ configuredLevel: 'ERROR' });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL2xvZ3MvbG9ncy5zZXJ2aWNlLnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBZ0Q7QUFDaEQsMERBQThGO0FBRTlGLDhEQUEwRDtBQUMxRCxxREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDN0IsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDNUIsSUFBSSxPQUFvQixDQUFDO1FBQ3pCLElBQUksUUFBK0IsQ0FBQztRQUVwQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQXVCLENBQUM7YUFDbkMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsQ0FBQztZQUNuQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXFCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO1lBQy9CLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFOUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLFdBQVcsR0FBRyw4QkFBYyxHQUFHLG9CQUFvQixDQUFDO2dCQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFakQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLFdBQVcsR0FBRyw4QkFBYyxHQUFHLHlCQUF5QixDQUFDO2dCQUMvRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSHR0cENsaWVudFRlc3RpbmdNb2R1bGUsIEh0dHBUZXN0aW5nQ29udHJvbGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBMb2dzU2VydmljZSB9IGZyb20gJ2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZSc7XG5pbXBvcnQgeyBTRVJWRVJfQVBJX1VSTCB9IGZyb20gJ2FwcC9hcHAuY29uc3RhbnRzJztcblxuZGVzY3JpYmUoJ1NlcnZpY2UgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdMb2dzIFNlcnZpY2UnLCAoKSA9PiB7XG4gICAgbGV0IHNlcnZpY2U6IExvZ3NTZXJ2aWNlO1xuICAgIGxldCBodHRwTW9jazogSHR0cFRlc3RpbmdDb250cm9sbGVyO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbSHR0cENsaWVudFRlc3RpbmdNb2R1bGVdXG4gICAgICB9KTtcblxuICAgICAgc2VydmljZSA9IFRlc3RCZWQuZ2V0KExvZ3NTZXJ2aWNlKTtcbiAgICAgIGh0dHBNb2NrID0gVGVzdEJlZC5nZXQoSHR0cFRlc3RpbmdDb250cm9sbGVyKTtcbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICBodHRwTW9jay52ZXJpZnkoKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdTZXJ2aWNlIG1ldGhvZHMnLCAoKSA9PiB7XG4gICAgICBpdCgnc2hvdWxkIGNhbGwgY29ycmVjdCBVUkwnLCAoKSA9PiB7XG4gICAgICAgIHNlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlVXJsID0gU0VSVkVSX0FQSV9VUkwgKyAnbWFuYWdlbWVudC9sb2dnZXJzJztcbiAgICAgICAgZXhwZWN0KHJlcS5yZXF1ZXN0LnVybCkudG9FcXVhbChyZXNvdXJjZVVybCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBjaGFuZ2UgbG9nIGxldmVsJywgKCkgPT4ge1xuICAgICAgICBzZXJ2aWNlLmNoYW5nZUxldmVsKCdtYWluJywgJ0VSUk9SJykuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlVXJsID0gU0VSVkVSX0FQSV9VUkwgKyAnbWFuYWdlbWVudC9sb2dnZXJzL21haW4nO1xuICAgICAgICBleHBlY3QocmVxLnJlcXVlc3QudXJsKS50b0VxdWFsKHJlc291cmNlVXJsKTtcbiAgICAgICAgZXhwZWN0KHJlcS5yZXF1ZXN0LmJvZHkpLnRvRXF1YWwoeyBjb25maWd1cmVkTGV2ZWw6ICdFUlJPUicgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==