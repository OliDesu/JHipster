"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const mock_route_service_1 = require("../../../helpers/mock-route.service");
const activate_service_1 = require("app/account/activate/activate.service");
const activate_component_1 = require("app/account/activate/activate.component");
describe('Component Tests', () => {
    describe('ActivateComponent', () => {
        let comp;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [activate_component_1.ActivateComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ key: 'ABC123' })
                    }
                ]
            })
                .overrideTemplate(activate_component_1.ActivateComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            const fixture = testing_1.TestBed.createComponent(activate_component_1.ActivateComponent);
            comp = fixture.componentInstance;
        });
        it('calls activate.get with the key from params', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync((service) => {
            spyOn(service, 'get').and.returnValue(rxjs_1.of());
            comp.ngOnInit();
            testing_1.tick();
            expect(service.get).toHaveBeenCalledWith('ABC123');
        })));
        it('should set set success to true upon successful activation', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync((service) => {
            spyOn(service, 'get').and.returnValue(rxjs_1.of({}));
            comp.ngOnInit();
            testing_1.tick();
            expect(comp.error).toBe(false);
            expect(comp.success).toBe(true);
        })));
        it('should set set error to true upon activation failure', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync((service) => {
            spyOn(service, 'get').and.returnValue(rxjs_1.throwError('ERROR'));
            comp.ngOnInit();
            testing_1.tick();
            expect(comp.error).toBe(true);
            expect(comp.success).toBe(false);
        })));
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBZ0Y7QUFDaEYsNENBQWlEO0FBQ2pELCtCQUFzQztBQUV0QyxzREFBMkQ7QUFDM0QsNEVBQXlFO0FBQ3pFLDRFQUF3RTtBQUN4RSxnRkFBNEU7QUFFNUUsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLElBQUksSUFBdUIsQ0FBQztRQUU1QixVQUFVLENBQUMsZUFBSyxDQUFDLEdBQUcsRUFBRTtZQUNwQixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsdUJBQWM7d0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLHVDQUFrQixDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO3FCQUNwRDtpQkFDRjthQUNGLENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsc0NBQWlCLEVBQUUsRUFBRSxDQUFDO2lCQUN2QyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsc0NBQWlCLENBQUMsQ0FBQztZQUMzRCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLGdCQUFNLENBQ3RELENBQUMsa0NBQWUsQ0FBQyxFQUNqQixtQkFBUyxDQUFDLENBQUMsT0FBd0IsRUFBRSxFQUFFO1lBQ3JDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixjQUFJLEVBQUUsQ0FBQztZQUVQLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDJEQUEyRCxFQUFFLGdCQUFNLENBQ3BFLENBQUMsa0NBQWUsQ0FBQyxFQUNqQixtQkFBUyxDQUFDLENBQUMsT0FBd0IsRUFBRSxFQUFFO1lBQ3JDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsY0FBSSxFQUFFLENBQUM7WUFFUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUUsZ0JBQU0sQ0FDL0QsQ0FBQyxrQ0FBZSxDQUFDLEVBQ2pCLG1CQUFTLENBQUMsQ0FBQyxPQUF3QixFQUFFLEVBQUU7WUFDckMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGlCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsY0FBSSxFQUFFLENBQUM7WUFFUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGFzeW5jLCB0aWNrLCBmYWtlQXN5bmMsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb29wY3ljbGVUZXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdGVzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTW9ja0FjdGl2YXRlZFJvdXRlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb2NrLXJvdXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVTZXJ2aWNlIH0gZnJvbSAnYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZUNvbXBvbmVudCB9IGZyb20gJ2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdBY3RpdmF0ZUNvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogQWN0aXZhdGVDb21wb25lbnQ7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQWN0aXZhdGVDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBuZXcgTW9ja0FjdGl2YXRlZFJvdXRlKHsga2V5OiAnQUJDMTIzJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoQWN0aXZhdGVDb21wb25lbnQsICcnKVxuICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBY3RpdmF0ZUNvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9KTtcblxuICAgIGl0KCdjYWxscyBhY3RpdmF0ZS5nZXQgd2l0aCB0aGUga2V5IGZyb20gcGFyYW1zJywgaW5qZWN0KFxuICAgICAgW0FjdGl2YXRlU2VydmljZV0sXG4gICAgICBmYWtlQXN5bmMoKHNlcnZpY2U6IEFjdGl2YXRlU2VydmljZSkgPT4ge1xuICAgICAgICBzcHlPbihzZXJ2aWNlLCAnZ2V0JykuYW5kLnJldHVyblZhbHVlKG9mKCkpO1xuXG4gICAgICAgIGNvbXAubmdPbkluaXQoKTtcbiAgICAgICAgdGljaygpO1xuXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmdldCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ0FCQzEyMycpO1xuICAgICAgfSlcbiAgICApKTtcblxuICAgIGl0KCdzaG91bGQgc2V0IHNldCBzdWNjZXNzIHRvIHRydWUgdXBvbiBzdWNjZXNzZnVsIGFjdGl2YXRpb24nLCBpbmplY3QoXG4gICAgICBbQWN0aXZhdGVTZXJ2aWNlXSxcbiAgICAgIGZha2VBc3luYygoc2VydmljZTogQWN0aXZhdGVTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdnZXQnKS5hbmQucmV0dXJuVmFsdWUob2Yoe30pKTtcblxuICAgICAgICBjb21wLm5nT25Jbml0KCk7XG4gICAgICAgIHRpY2soKTtcblxuICAgICAgICBleHBlY3QoY29tcC5lcnJvcikudG9CZShmYWxzZSk7XG4gICAgICAgIGV4cGVjdChjb21wLnN1Y2Nlc3MpLnRvQmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICkpO1xuXG4gICAgaXQoJ3Nob3VsZCBzZXQgc2V0IGVycm9yIHRvIHRydWUgdXBvbiBhY3RpdmF0aW9uIGZhaWx1cmUnLCBpbmplY3QoXG4gICAgICBbQWN0aXZhdGVTZXJ2aWNlXSxcbiAgICAgIGZha2VBc3luYygoc2VydmljZTogQWN0aXZhdGVTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNweU9uKHNlcnZpY2UsICdnZXQnKS5hbmQucmV0dXJuVmFsdWUodGhyb3dFcnJvcignRVJST1InKSk7XG5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuICAgICAgICB0aWNrKCk7XG5cbiAgICAgICAgZXhwZWN0KGNvbXAuZXJyb3IpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChjb21wLnN1Y2Nlc3MpLnRvQmUoZmFsc2UpO1xuICAgICAgfSlcbiAgICApKTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==