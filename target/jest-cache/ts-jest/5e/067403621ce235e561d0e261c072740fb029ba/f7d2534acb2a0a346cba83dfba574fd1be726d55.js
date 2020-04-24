"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const payment_update_component_1 = require("app/entities/payment/payment-update.component");
const payment_service_1 = require("app/entities/payment/payment.service");
const payment_model_1 = require("app/shared/model/payment.model");
describe('Component Tests', () => {
    describe('Payment Management Update Component', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [payment_update_component_1.PaymentUpdateComponent],
                providers: [forms_1.FormBuilder]
            })
                .overrideTemplate(payment_update_component_1.PaymentUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(payment_update_component_1.PaymentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(payment_service_1.PaymentService);
        });
        describe('save', () => {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(() => {
                // GIVEN
                const entity = new payment_model_1.Payment(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.updateForm(entity);
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(() => {
                // GIVEN
                const entity = new payment_model_1.Payment();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.updateForm(entity);
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC11cGRhdGUuY29tcG9uZW50LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBbUY7QUFDbkYsK0NBQW9EO0FBQ3BELDBDQUE2QztBQUM3QywrQkFBMEI7QUFFMUIsc0RBQTJEO0FBQzNELDRGQUF1RjtBQUN2RiwwRUFBc0U7QUFDdEUsa0VBQXlEO0FBRXpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsUUFBUSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxJQUFJLElBQTRCLENBQUM7UUFDakMsSUFBSSxPQUFpRCxDQUFDO1FBQ3RELElBQUksT0FBdUIsQ0FBQztRQUU1QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO2FBQ3pCLENBQUM7aUJBQ0MsZ0JBQWdCLENBQUMsaURBQXNCLEVBQUUsRUFBRSxDQUFDO2lCQUM1QyxpQkFBaUIsRUFBRSxDQUFDO1lBRXZCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxpREFBc0IsQ0FBQyxDQUFDO1lBQzFELElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQ0FBYyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLENBQUMsd0RBQXdELEVBQUUsbUJBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzFFLFFBQVE7Z0JBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBRSxDQUFDLElBQUksbUJBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsT0FBTztnQkFDUCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osY0FBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7Z0JBRXpCLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxtQkFBUyxDQUFDLEdBQUcsRUFBRTtnQkFDckUsUUFBUTtnQkFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxJQUFJLG1CQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLGNBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCO2dCQUV6QixPQUFPO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL3BheW1lbnQvcGF5bWVudC11cGRhdGUuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgZmFrZUFzeW5jLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRVcGRhdGVDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvcGF5bWVudC9wYXltZW50LXVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvcGF5bWVudC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvcGF5bWVudC5tb2RlbCc7XG5cbmRlc2NyaWJlKCdDb21wb25lbnQgVGVzdHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdQYXltZW50IE1hbmFnZW1lbnQgVXBkYXRlIENvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogUGF5bWVudFVwZGF0ZUNvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxQYXltZW50VXBkYXRlQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogUGF5bWVudFNlcnZpY2U7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbUGF5bWVudFVwZGF0ZUNvbXBvbmVudF0sXG4gICAgICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoUGF5bWVudFVwZGF0ZUNvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuXG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUGF5bWVudFVwZGF0ZUNvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHNlcnZpY2UgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoUGF5bWVudFNlcnZpY2UpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3NhdmUnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgdXBkYXRlIHNlcnZpY2Ugb24gc2F2ZSBmb3IgZXhpc3RpbmcgZW50aXR5JywgZmFrZUFzeW5jKCgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IFBheW1lbnQoMTIzKTtcbiAgICAgICAgc3B5T24oc2VydmljZSwgJ3VwZGF0ZScpLmFuZC5yZXR1cm5WYWx1ZShvZihuZXcgSHR0cFJlc3BvbnNlKHsgYm9keTogZW50aXR5IH0pKSk7XG4gICAgICAgIGNvbXAudXBkYXRlRm9ybShlbnRpdHkpO1xuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAuc2F2ZSgpO1xuICAgICAgICB0aWNrKCk7IC8vIHNpbXVsYXRlIGFzeW5jXG5cbiAgICAgICAgLy8gVEhFTlxuICAgICAgICBleHBlY3Qoc2VydmljZS51cGRhdGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGVudGl0eSk7XG4gICAgICAgIGV4cGVjdChjb21wLmlzU2F2aW5nKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgIH0pKTtcblxuICAgICAgaXQoJ1Nob3VsZCBjYWxsIGNyZWF0ZSBzZXJ2aWNlIG9uIHNhdmUgZm9yIG5ldyBlbnRpdHknLCBmYWtlQXN5bmMoKCkgPT4ge1xuICAgICAgICAvLyBHSVZFTlxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgUGF5bWVudCgpO1xuICAgICAgICBzcHlPbihzZXJ2aWNlLCAnY3JlYXRlJykuYW5kLnJldHVyblZhbHVlKG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBib2R5OiBlbnRpdHkgfSkpKTtcbiAgICAgICAgY29tcC51cGRhdGVGb3JtKGVudGl0eSk7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5zYXZlKCk7XG4gICAgICAgIHRpY2soKTsgLy8gc2ltdWxhdGUgYXN5bmNcblxuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmNyZWF0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZW50aXR5KTtcbiAgICAgICAgZXhwZWN0KGNvbXAuaXNTYXZpbmcpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9