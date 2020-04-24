"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const testing_1 = require("@angular/common/http/testing");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const ng_jhipster_1 = require("ng-jhipster");
const mock_language_service_1 = require("./helpers/mock-language.service");
const account_service_1 = require("app/core/auth/account.service");
const login_modal_service_1 = require("app/core/login/login-modal.service");
const mock_account_service_1 = require("./helpers/mock-account.service");
const mock_route_service_1 = require("./helpers/mock-route.service");
const mock_active_modal_service_1 = require("./helpers/mock-active-modal.service");
const mock_event_manager_service_1 = require("./helpers/mock-event-manager.service");
let CoopcycleTestModule = class CoopcycleTestModule {
};
CoopcycleTestModule = tslib_1.__decorate([
    core_1.NgModule({
        providers: [
            common_1.DatePipe,
            ng_jhipster_1.JhiDataUtils,
            ng_jhipster_1.JhiDateUtils,
            ng_jhipster_1.JhiParseLinks,
            {
                provide: ng_jhipster_1.JhiLanguageService,
                useClass: mock_language_service_1.MockLanguageService
            },
            {
                provide: ng_jhipster_1.JhiEventManager,
                useClass: mock_event_manager_service_1.MockEventManager
            },
            {
                provide: ng_bootstrap_1.NgbActiveModal,
                useClass: mock_active_modal_service_1.MockActiveModal
            },
            {
                provide: router_1.ActivatedRoute,
                useValue: new mock_route_service_1.MockActivatedRoute({ id: 123 })
            },
            {
                provide: router_1.Router,
                useClass: mock_route_service_1.MockRouter
            },
            {
                provide: account_service_1.AccountService,
                useClass: mock_account_service_1.MockAccountService
            },
            {
                provide: login_modal_service_1.LoginModalService,
                useValue: null
            },
            {
                provide: ng_jhipster_1.JhiAlertService,
                useValue: null
            },
            {
                provide: ng_bootstrap_1.NgbModal,
                useValue: null
            }
        ],
        imports: [testing_1.HttpClientTestingModule]
    })
], CoopcycleTestModule);
exports.CoopcycleTestModule = CoopcycleTestModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvdGVzdC5tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQTJDO0FBQzNDLDRDQUF5RDtBQUN6RCx3Q0FBeUM7QUFDekMsMERBQXVFO0FBQ3ZFLDZEQUFzRTtBQUN0RSw2Q0FBOEg7QUFFOUgsMkVBQXNFO0FBQ3RFLG1FQUErRDtBQUMvRCw0RUFBdUU7QUFDdkUseUVBQW9FO0FBQ3BFLHFFQUE4RTtBQUM5RSxtRkFBc0U7QUFDdEUscUZBQXdFO0FBK0N4RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBN0MvQixlQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVCxpQkFBUTtZQUNSLDBCQUFZO1lBQ1osMEJBQVk7WUFDWiwyQkFBYTtZQUNiO2dCQUNFLE9BQU8sRUFBRSxnQ0FBa0I7Z0JBQzNCLFFBQVEsRUFBRSwyQ0FBbUI7YUFDOUI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsNkJBQWU7Z0JBQ3hCLFFBQVEsRUFBRSw2Q0FBZ0I7YUFDM0I7WUFDRDtnQkFDRSxPQUFPLEVBQUUsNkJBQWM7Z0JBQ3ZCLFFBQVEsRUFBRSwyQ0FBZTthQUMxQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSx1QkFBYztnQkFDdkIsUUFBUSxFQUFFLElBQUksdUNBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDOUM7WUFDRDtnQkFDRSxPQUFPLEVBQUUsZUFBTTtnQkFDZixRQUFRLEVBQUUsK0JBQVU7YUFDckI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsZ0NBQWM7Z0JBQ3ZCLFFBQVEsRUFBRSx5Q0FBa0I7YUFDN0I7WUFDRDtnQkFDRSxPQUFPLEVBQUUsdUNBQWlCO2dCQUMxQixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLDZCQUFlO2dCQUN4QixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHVCQUFRO2dCQUNqQixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBdUIsQ0FBQztLQUNuQyxDQUFDO0dBQ1csbUJBQW1CLENBQUc7QUFBdEIsa0RBQW1CIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL3Rlc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAvdGVzdGluZyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UsIEpoaURhdGFVdGlscywgSmhpRGF0ZVV0aWxzLCBKaGlFdmVudE1hbmFnZXIsIEpoaUFsZXJ0U2VydmljZSwgSmhpUGFyc2VMaW5rcyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgTW9ja0xhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vaGVscGVycy9tb2NrLWxhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9hdXRoL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0FjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9oZWxwZXJzL21vY2stYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tBY3RpdmF0ZWRSb3V0ZSwgTW9ja1JvdXRlciB9IGZyb20gJy4vaGVscGVycy9tb2NrLXJvdXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0FjdGl2ZU1vZGFsIH0gZnJvbSAnLi9oZWxwZXJzL21vY2stYWN0aXZlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0V2ZW50TWFuYWdlciB9IGZyb20gJy4vaGVscGVycy9tb2NrLWV2ZW50LW1hbmFnZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIERhdGVQaXBlLFxuICAgIEpoaURhdGFVdGlscyxcbiAgICBKaGlEYXRlVXRpbHMsXG4gICAgSmhpUGFyc2VMaW5rcyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICB1c2VDbGFzczogTW9ja0xhbmd1YWdlU2VydmljZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSmhpRXZlbnRNYW5hZ2VyLFxuICAgICAgdXNlQ2xhc3M6IE1vY2tFdmVudE1hbmFnZXJcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgdXNlQ2xhc3M6IE1vY2tBY3RpdmVNb2RhbFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICB1c2VWYWx1ZTogbmV3IE1vY2tBY3RpdmF0ZWRSb3V0ZSh7IGlkOiAxMjMgfSlcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJvdXRlcixcbiAgICAgIHVzZUNsYXNzOiBNb2NrUm91dGVyXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBY2NvdW50U2VydmljZSxcbiAgICAgIHVzZUNsYXNzOiBNb2NrQWNjb3VudFNlcnZpY2VcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgdXNlVmFsdWU6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEpoaUFsZXJ0U2VydmljZSxcbiAgICAgIHVzZVZhbHVlOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ2JNb2RhbCxcbiAgICAgIHVzZVZhbHVlOiBudWxsXG4gICAgfVxuICBdLFxuICBpbXBvcnRzOiBbSHR0cENsaWVudFRlc3RpbmdNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvb3BjeWNsZVRlc3RNb2R1bGUge31cbiJdLCJ2ZXJzaW9uIjozfQ==