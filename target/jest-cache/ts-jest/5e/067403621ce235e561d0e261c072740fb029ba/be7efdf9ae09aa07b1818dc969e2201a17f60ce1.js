"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const cooperative_service_1 = require("app/entities/cooperative/cooperative.service");
const cooperative_model_1 = require("app/shared/model/cooperative.model");
describe('Service Tests', () => {
    describe('Cooperative Service', () => {
        let injector;
        let service;
        let httpMock;
        let elemDefault;
        let expectedResult;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            expectedResult = null;
            injector = testing_1.getTestBed();
            service = injector.get(cooperative_service_1.CooperativeService);
            httpMock = injector.get(testing_2.HttpTestingController);
            elemDefault = new cooperative_model_1.Cooperative(0, 0, 'AAAAAAA', 'AAAAAAA');
        });
        describe('Service methods', () => {
            it('should find an element', () => {
                const returnedFromService = Object.assign({}, elemDefault);
                service.find(123).subscribe(resp => (expectedResult = resp.body));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(elemDefault);
            });
            it('should create a Cooperative', () => {
                const returnedFromService = Object.assign({
                    id: 0
                }, elemDefault);
                const expected = Object.assign({}, returnedFromService);
                service.create(new cooperative_model_1.Cooperative()).subscribe(resp => (expectedResult = resp.body));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(expected);
            });
            it('should update a Cooperative', () => {
                const returnedFromService = Object.assign({
                    cooperativeId: 1,
                    name: 'BBBBBB',
                    area: 'BBBBBB'
                }, elemDefault);
                const expected = Object.assign({}, returnedFromService);
                service.update(expected).subscribe(resp => (expectedResult = resp.body));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(expected);
            });
            it('should return a list of Cooperative', () => {
                const returnedFromService = Object.assign({
                    cooperativeId: 1,
                    name: 'BBBBBB',
                    area: 'BBBBBB'
                }, elemDefault);
                const expected = Object.assign({}, returnedFromService);
                service.query().subscribe(resp => (expectedResult = resp.body));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush([returnedFromService]);
                httpMock.verify();
                expect(expectedResult).toContainEqual(expected);
            });
            it('should delete a Cooperative', () => {
                service.delete(123).subscribe(resp => (expectedResult = resp.ok));
                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
                expect(expectedResult);
            });
        });
        afterEach(() => {
            httpMock.verify();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE0RDtBQUM1RCwwREFBOEY7QUFDOUYsc0ZBQWtGO0FBQ2xGLDBFQUErRTtBQUUvRSxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUM3QixRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1FBQ25DLElBQUksUUFBaUIsQ0FBQztRQUN0QixJQUFJLE9BQTJCLENBQUM7UUFDaEMsSUFBSSxRQUErQixDQUFDO1FBQ3BDLElBQUksV0FBeUIsQ0FBQztRQUM5QixJQUFJLGNBQThELENBQUM7UUFFbkUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUF1QixDQUFDO2FBQ25DLENBQUMsQ0FBQztZQUNILGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDdEIsUUFBUSxHQUFHLG9CQUFVLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDO1lBQzNDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLCtCQUFxQixDQUFDLENBQUM7WUFFL0MsV0FBVyxHQUFHLElBQUksK0JBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtnQkFDaEMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFFM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFbEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO2dCQUNyQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3ZDO29CQUNFLEVBQUUsRUFBRSxDQUFDO2lCQUNOLEVBQ0QsV0FBVyxDQUNaLENBQUM7Z0JBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFFeEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVsRixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ25ELEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDdkM7b0JBQ0UsYUFBYSxFQUFFLENBQUM7b0JBQ2hCLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxRQUFRO2lCQUNmLEVBQ0QsV0FBVyxDQUNaLENBQUM7Z0JBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFFeEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFekUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3ZDO29CQUNFLGFBQWEsRUFBRSxDQUFDO29CQUNoQixJQUFJLEVBQUUsUUFBUTtvQkFDZCxJQUFJLEVBQUUsUUFBUTtpQkFDZixFQUNELFdBQVcsQ0FDWixDQUFDO2dCQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7Z0JBRXhELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFaEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO2dCQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVsRSxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy90ZXN0L2phdmFzY3JpcHQvc3BlYy9hcHAvZW50aXRpZXMvY29vcGVyYXRpdmUvY29vcGVyYXRpdmUuc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGdldFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSHR0cENsaWVudFRlc3RpbmdNb2R1bGUsIEh0dHBUZXN0aW5nQ29udHJvbGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQ29vcGVyYXRpdmVTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2Nvb3BlcmF0aXZlL2Nvb3BlcmF0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvb3BlcmF0aXZlLCBDb29wZXJhdGl2ZSB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY29vcGVyYXRpdmUubW9kZWwnO1xuXG5kZXNjcmliZSgnU2VydmljZSBUZXN0cycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0Nvb3BlcmF0aXZlIFNlcnZpY2UnLCAoKSA9PiB7XG4gICAgbGV0IGluamVjdG9yOiBUZXN0QmVkO1xuICAgIGxldCBzZXJ2aWNlOiBDb29wZXJhdGl2ZVNlcnZpY2U7XG4gICAgbGV0IGh0dHBNb2NrOiBIdHRwVGVzdGluZ0NvbnRyb2xsZXI7XG4gICAgbGV0IGVsZW1EZWZhdWx0OiBJQ29vcGVyYXRpdmU7XG4gICAgbGV0IGV4cGVjdGVkUmVzdWx0OiBJQ29vcGVyYXRpdmUgfCBJQ29vcGVyYXRpdmVbXSB8IGJvb2xlYW4gfCBudWxsO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbSHR0cENsaWVudFRlc3RpbmdNb2R1bGVdXG4gICAgICB9KTtcbiAgICAgIGV4cGVjdGVkUmVzdWx0ID0gbnVsbDtcbiAgICAgIGluamVjdG9yID0gZ2V0VGVzdEJlZCgpO1xuICAgICAgc2VydmljZSA9IGluamVjdG9yLmdldChDb29wZXJhdGl2ZVNlcnZpY2UpO1xuICAgICAgaHR0cE1vY2sgPSBpbmplY3Rvci5nZXQoSHR0cFRlc3RpbmdDb250cm9sbGVyKTtcblxuICAgICAgZWxlbURlZmF1bHQgPSBuZXcgQ29vcGVyYXRpdmUoMCwgMCwgJ0FBQUFBQUEnLCAnQUFBQUFBQScpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ1NlcnZpY2UgbWV0aG9kcycsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgZmluZCBhbiBlbGVtZW50JywgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXR1cm5lZEZyb21TZXJ2aWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbURlZmF1bHQpO1xuXG4gICAgICAgIHNlcnZpY2UuZmluZCgxMjMpLnN1YnNjcmliZShyZXNwID0+IChleHBlY3RlZFJlc3VsdCA9IHJlc3AuYm9keSkpO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIHJlcS5mbHVzaChyZXR1cm5lZEZyb21TZXJ2aWNlKTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b01hdGNoT2JqZWN0KGVsZW1EZWZhdWx0KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhIENvb3BlcmF0aXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXR1cm5lZEZyb21TZXJ2aWNlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxlbURlZmF1bHRcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIHJldHVybmVkRnJvbVNlcnZpY2UpO1xuXG4gICAgICAgIHNlcnZpY2UuY3JlYXRlKG5ldyBDb29wZXJhdGl2ZSgpKS5zdWJzY3JpYmUocmVzcCA9PiAoZXhwZWN0ZWRSZXN1bHQgPSByZXNwLmJvZHkpKTtcblxuICAgICAgICBjb25zdCByZXEgPSBodHRwTW9jay5leHBlY3RPbmUoeyBtZXRob2Q6ICdQT1NUJyB9KTtcbiAgICAgICAgcmVxLmZsdXNoKHJldHVybmVkRnJvbVNlcnZpY2UpO1xuICAgICAgICBleHBlY3QoZXhwZWN0ZWRSZXN1bHQpLnRvTWF0Y2hPYmplY3QoZXhwZWN0ZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgdXBkYXRlIGEgQ29vcGVyYXRpdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldHVybmVkRnJvbVNlcnZpY2UgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvb3BlcmF0aXZlSWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQkJCQkJCJyxcbiAgICAgICAgICAgIGFyZWE6ICdCQkJCQkInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtRGVmYXVsdFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgcmV0dXJuZWRGcm9tU2VydmljZSk7XG5cbiAgICAgICAgc2VydmljZS51cGRhdGUoZXhwZWN0ZWQpLnN1YnNjcmliZShyZXNwID0+IChleHBlY3RlZFJlc3VsdCA9IHJlc3AuYm9keSkpO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ1BVVCcgfSk7XG4gICAgICAgIHJlcS5mbHVzaChyZXR1cm5lZEZyb21TZXJ2aWNlKTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b01hdGNoT2JqZWN0KGV4cGVjdGVkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIGxpc3Qgb2YgQ29vcGVyYXRpdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldHVybmVkRnJvbVNlcnZpY2UgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvb3BlcmF0aXZlSWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQkJCQkJCJyxcbiAgICAgICAgICAgIGFyZWE6ICdCQkJCQkInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtRGVmYXVsdFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgcmV0dXJuZWRGcm9tU2VydmljZSk7XG5cbiAgICAgICAgc2VydmljZS5xdWVyeSgpLnN1YnNjcmliZShyZXNwID0+IChleHBlY3RlZFJlc3VsdCA9IHJlc3AuYm9keSkpO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGh0dHBNb2NrLmV4cGVjdE9uZSh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIHJlcS5mbHVzaChbcmV0dXJuZWRGcm9tU2VydmljZV0pO1xuICAgICAgICBodHRwTW9jay52ZXJpZnkoKTtcbiAgICAgICAgZXhwZWN0KGV4cGVjdGVkUmVzdWx0KS50b0NvbnRhaW5FcXVhbChleHBlY3RlZCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBkZWxldGUgYSBDb29wZXJhdGl2ZScsICgpID0+IHtcbiAgICAgICAgc2VydmljZS5kZWxldGUoMTIzKS5zdWJzY3JpYmUocmVzcCA9PiAoZXhwZWN0ZWRSZXN1bHQgPSByZXNwLm9rKSk7XG5cbiAgICAgICAgY29uc3QgcmVxID0gaHR0cE1vY2suZXhwZWN0T25lKHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICAgICAgcmVxLmZsdXNoKHsgc3RhdHVzOiAyMDAgfSk7XG4gICAgICAgIGV4cGVjdChleHBlY3RlZFJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICBodHRwTW9jay52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==