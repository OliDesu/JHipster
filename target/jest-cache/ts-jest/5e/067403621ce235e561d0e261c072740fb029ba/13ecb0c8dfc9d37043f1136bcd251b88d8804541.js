"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const http_1 = require("@angular/common/http");
const audits_service_1 = require("app/admin/audits/audits.service");
const audit_model_1 = require("app/admin/audits/audit.model");
const app_constants_1 = require("app/app.constants");
describe('Service Tests', () => {
    describe('Audits Service', () => {
        let service;
        let httpMock;
        const fakeRequest = { page: 0, size: 0, sort: [], fromDate: '', toDate: '' };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            service = testing_1.TestBed.get(audits_service_1.AuditsService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(() => {
            httpMock.verify();
        });
        describe('Service methods', () => {
            it('should call correct URL', () => {
                service.query(fakeRequest).subscribe();
                const req = httpMock.expectOne({ method: 'GET' });
                const resourceUrl = app_constants_1.SERVER_API_URL + 'management/audits';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should return Audits', () => {
                let expectedResult = new http_1.HttpResponse({ body: [] });
                const audit = new audit_model_1.Audit({ remoteAddress: '127.0.0.1', sessionId: '123' }, 'user', '20140101', 'AUTHENTICATION_SUCCESS');
                service.query(fakeRequest).subscribe(received => {
                    expectedResult = received;
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush([audit]);
                let audits = [];
                if (expectedResult.body !== null) {
                    audits = expectedResult.body;
                }
                expect(audits.length).toBe(1);
                expect(audits[0]).toEqual(audit);
            });
            it('should propagate not found response', () => {
                let expectedResult = 0;
                service.query(fakeRequest).subscribe(null, (error) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuc2VydmljZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWdEO0FBQ2hELDBEQUE4RjtBQUM5RiwrQ0FBdUU7QUFFdkUsb0VBQTZFO0FBQzdFLDhEQUFxRDtBQUNyRCxxREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDN0IsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUM5QixJQUFJLE9BQXNCLENBQUM7UUFDM0IsSUFBSSxRQUErQixDQUFDO1FBQ3BDLE1BQU0sV0FBVyxHQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTFGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBdUIsQ0FBQzthQUNuQyxDQUFDLENBQUM7WUFFSCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsOEJBQWEsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtnQkFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFdkMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLFdBQVcsR0FBRyw4QkFBYyxHQUFHLG1CQUFtQixDQUFDO2dCQUN6RCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO2dCQUM5QixJQUFJLGNBQWMsR0FBMEIsSUFBSSxtQkFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztnQkFFeEgsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzlDLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxjQUFjLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDaEMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7aUJBQzlCO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtnQkFDN0MsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUU7b0JBQ3RFLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUU7b0JBQ3RDLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSxhQUFhO2lCQUMxQixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50VGVzdGluZ01vZHVsZSwgSHR0cFRlc3RpbmdDb250cm9sbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAvdGVzdGluZyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBdWRpdHNTZXJ2aWNlLCBBdWRpdHNRdWVyeSB9IGZyb20gJ2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXVkaXQgfSBmcm9tICdhcHAvYWRtaW4vYXVkaXRzL2F1ZGl0Lm1vZGVsJztcbmltcG9ydCB7IFNFUlZFUl9BUElfVVJMIH0gZnJvbSAnYXBwL2FwcC5jb25zdGFudHMnO1xuXG5kZXNjcmliZSgnU2VydmljZSBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0F1ZGl0cyBTZXJ2aWNlJywgKCkgPT4ge1xuICAgIGxldCBzZXJ2aWNlOiBBdWRpdHNTZXJ2aWNlO1xuICAgIGxldCBodHRwTW9jazogSHR0cFRlc3RpbmdDb250cm9sbGVyO1xuICAgIGNvbnN0IGZha2VSZXF1ZXN0OiBBdWRpdHNRdWVyeSA9IHsgcGFnZTogMCwgc2l6ZTogMCwgc29ydDogW10sIGZyb21EYXRlOiAnJywgdG9EYXRlOiAnJyB9O1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbSHR0cENsaWVudFRlc3RpbmdNb2R1bGVdXG4gICAgICB9KTtcblxuICAgICAgc2VydmljZSA9IFRlc3RCZWQuZ2V0KEF1ZGl0c1NlcnZpY2UpO1xuICAgICAgaHR0cE1vY2sgPSBUZXN0QmVkLmdldChIdHRwVGVzdGluZ0NvbnRyb2xsZXIpO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIGh0dHBNb2NrLnZlcmlmeSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ1NlcnZpY2UgbWV0aG9kcycsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgY2FsbCBjb3JyZWN0IFVSTCcsICgpID0+IHtcbiAgICAgICAgc2VydmljZS5xdWVyeShmYWtlUmVxdWVzdCkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VVcmwgPSBTRVJWRVJfQVBJX1VSTCArICdtYW5hZ2VtZW50L2F1ZGl0cyc7XG4gICAgICAgIGV4cGVjdChyZXEucmVxdWVzdC51cmwpLnRvRXF1YWwocmVzb3VyY2VVcmwpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIEF1ZGl0cycsICgpID0+IHtcbiAgICAgICAgbGV0IGV4cGVjdGVkUmVzdWx0OiBIdHRwUmVzcG9uc2U8QXVkaXRbXT4gPSBuZXcgSHR0cFJlc3BvbnNlKHsgYm9keTogW10gfSk7XG4gICAgICAgIGNvbnN0IGF1ZGl0ID0gbmV3IEF1ZGl0KHsgcmVtb3RlQWRkcmVzczogJzEyNy4wLjAuMScsIHNlc3Npb25JZDogJzEyMycgfSwgJ3VzZXInLCAnMjAxNDAxMDEnLCAnQVVUSEVOVElDQVRJT05fU1VDQ0VTUycpO1xuXG4gICAgICAgIHNlcnZpY2UucXVlcnkoZmFrZVJlcXVlc3QpLnN1YnNjcmliZShyZWNlaXZlZCA9PiB7XG4gICAgICAgICAgZXhwZWN0ZWRSZXN1bHQgPSByZWNlaXZlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgcmVxLmZsdXNoKFthdWRpdF0pO1xuICAgICAgICBsZXQgYXVkaXRzOiBBdWRpdFtdID0gW107XG4gICAgICAgIGlmIChleHBlY3RlZFJlc3VsdC5ib2R5ICE9PSBudWxsKSB7XG4gICAgICAgICAgYXVkaXRzID0gZXhwZWN0ZWRSZXN1bHQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICBleHBlY3QoYXVkaXRzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KGF1ZGl0c1swXSkudG9FcXVhbChhdWRpdCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBwcm9wYWdhdGUgbm90IGZvdW5kIHJlc3BvbnNlJywgKCkgPT4ge1xuICAgICAgICBsZXQgZXhwZWN0ZWRSZXN1bHQgPSAwO1xuICAgICAgICBzZXJ2aWNlLnF1ZXJ5KGZha2VSZXF1ZXN0KS5zdWJzY3JpYmUobnVsbCwgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGV4cGVjdGVkUmVzdWx0ID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXEgPSBodHRwTW9jay5leHBlY3RPbmUoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICByZXEuZmx1c2goJ0ludmFsaWQgcmVxdWVzdCBwYXJhbWV0ZXJzJywge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICAgIHN0YXR1c1RleHQ6ICdCYWQgUmVxdWVzdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChleHBlY3RlZFJlc3VsdCkudG9FcXVhbCg0MDQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=