"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const configuration_component_1 = require("app/admin/configuration/configuration.component");
const configuration_service_1 = require("app/admin/configuration/configuration.service");
describe('Component Tests', () => {
    describe('ConfigurationComponent', () => {
        let comp;
        let fixture;
        let service;
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [configuration_component_1.ConfigurationComponent],
                providers: [configuration_service_1.ConfigurationService]
            })
                .overrideTemplate(configuration_component_1.ConfigurationComponent, '')
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(configuration_component_1.ConfigurationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(configuration_service_1.ConfigurationService);
        });
        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const beans = [
                    {
                        prefix: 'jhipster',
                        properties: {
                            clientApp: {
                                name: 'jhipsterApp'
                            }
                        }
                    }
                ];
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
                spyOn(service, 'getBeans').and.returnValue(rxjs_1.of(beans));
                spyOn(service, 'getPropertySources').and.returnValue(rxjs_1.of(propertySources));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.getBeans).toHaveBeenCalled();
                expect(service.getPropertySources).toHaveBeenCalled();
                expect(comp.allBeans).toEqual(beans);
                expect(comp.beans).toEqual(beans);
                expect(comp.propertySources).toEqual(propertySources);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5RTtBQUN6RSwrQkFBMEI7QUFFMUIsc0RBQTJEO0FBQzNELDZGQUF5RjtBQUN6Rix5RkFBMkc7QUFFM0csUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLElBQUksSUFBNEIsQ0FBQztRQUNqQyxJQUFJLE9BQWlELENBQUM7UUFDdEQsSUFBSSxPQUE2QixDQUFDO1FBRWxDLFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztnQkFDdEMsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7YUFDbEMsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQyxnREFBc0IsRUFBRSxFQUFFLENBQUM7aUJBQzVDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsZ0RBQXNCLENBQUMsQ0FBQztZQUMxRCxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsNENBQW9CLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RDLFFBQVE7Z0JBQ1IsTUFBTSxLQUFLLEdBQVc7b0JBQ3BCO3dCQUNFLE1BQU0sRUFBRSxVQUFVO3dCQUNsQixVQUFVLEVBQUU7NEJBQ1YsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxhQUFhOzZCQUNwQjt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLE1BQU0sZUFBZSxHQUFxQjtvQkFDeEM7d0JBQ0UsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFVBQVUsRUFBRTs0QkFDVixtQkFBbUIsRUFBRTtnQ0FDbkIsS0FBSyxFQUFFLE1BQU07NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUUxRSxPQUFPO2dCQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEIsT0FBTztnQkFDUCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCwgYXN5bmMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Db21wb25lbnQgfSBmcm9tICdhcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSwgQmVhbiwgUHJvcGVydHlTb3VyY2UgfSBmcm9tICdhcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnQ29uZmlndXJhdGlvbkNvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogQ29uZmlndXJhdGlvbkNvbXBvbmVudDtcbiAgICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxDb25maWd1cmF0aW9uQ29tcG9uZW50PjtcbiAgICBsZXQgc2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtDb29wY3ljbGVUZXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQ29uZmlndXJhdGlvbkNvbXBvbmVudF0sXG4gICAgICAgIHByb3ZpZGVyczogW0NvbmZpZ3VyYXRpb25TZXJ2aWNlXVxuICAgICAgfSlcbiAgICAgICAgLm92ZXJyaWRlVGVtcGxhdGUoQ29uZmlndXJhdGlvbkNvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgIH0pKTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KENvbmZpZ3VyYXRpb25Db21wb25lbnQpO1xuICAgICAgY29tcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBzZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KENvbmZpZ3VyYXRpb25TZXJ2aWNlKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdPbkluaXQnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGNhbGwgbG9hZCBhbGwgb24gaW5pdCcsICgpID0+IHtcbiAgICAgICAgLy8gR0lWRU5cbiAgICAgICAgY29uc3QgYmVhbnM6IEJlYW5bXSA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcmVmaXg6ICdqaGlwc3RlcicsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGNsaWVudEFwcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdqaGlwc3RlckFwcCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlTb3VyY2VzOiBQcm9wZXJ0eVNvdXJjZVtdID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzZXJ2ZXIucG9ydHMnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAnbG9jYWwuc2VydmVyLnBvcnQnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICc4MDgwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICBzcHlPbihzZXJ2aWNlLCAnZ2V0QmVhbnMnKS5hbmQucmV0dXJuVmFsdWUob2YoYmVhbnMpKTtcbiAgICAgICAgc3B5T24oc2VydmljZSwgJ2dldFByb3BlcnR5U291cmNlcycpLmFuZC5yZXR1cm5WYWx1ZShvZihwcm9wZXJ0eVNvdXJjZXMpKTtcblxuICAgICAgICAvLyBXSEVOXG4gICAgICAgIGNvbXAubmdPbkluaXQoKTtcblxuICAgICAgICAvLyBUSEVOXG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmdldEJlYW5zKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChzZXJ2aWNlLmdldFByb3BlcnR5U291cmNlcykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QoY29tcC5hbGxCZWFucykudG9FcXVhbChiZWFucyk7XG4gICAgICAgIGV4cGVjdChjb21wLmJlYW5zKS50b0VxdWFsKGJlYW5zKTtcbiAgICAgICAgZXhwZWN0KGNvbXAucHJvcGVydHlTb3VyY2VzKS50b0VxdWFsKHByb3BlcnR5U291cmNlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==