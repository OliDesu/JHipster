"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const health_service_1 = require("./health.service");
const health_modal_component_1 = require("./health-modal.component");
let HealthComponent = class HealthComponent {
    constructor(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    ngOnInit() {
        this.refresh();
    }
    getBadgeClass(statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    }
    refresh() {
        this.healthService.checkHealth().subscribe(health => (this.health = health), (error) => {
            if (error.status === 503) {
                this.health = error.error;
            }
        });
    }
    showHealth(health) {
        const modalRef = this.modalService.open(health_modal_component_1.HealthModalComponent);
        modalRef.componentInstance.health = health;
    }
};
HealthComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: require('./health.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, health_service_1.HealthService])
], HealthComponent);
exports.HealthComponent = HealthComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCw2REFBc0Q7QUFFdEQscURBQWlHO0FBQ2pHLHFFQUFnRTtBQU1oRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRzFCLFlBQW9CLFlBQXNCLEVBQVUsYUFBNEI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQVU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFFcEYsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYSxDQUFDLFdBQXlCO1FBQ3JDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUN4QixPQUFPLGVBQWUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxjQUFjLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFDaEMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWdEO1FBQ3pELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDZDQUFvQixDQUFDLENBQUM7UUFDOUQsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7QUFoQ1ksZUFBZTtJQUozQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsa0JBQWEseUJBQXlCLENBQUE7S0FDdkMsQ0FBQzs2Q0FJa0MsdUJBQVEsRUFBeUIsOEJBQWE7R0FIckUsZUFBZSxDQWdDM0I7QUFoQ1ksMENBQWUiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBIZWFsdGhTZXJ2aWNlLCBIZWFsdGhTdGF0dXMsIEhlYWx0aCwgSGVhbHRoS2V5LCBIZWFsdGhEZXRhaWxzIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1oZWFsdGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhbHRoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFsdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoZWFsdGg/OiBIZWFsdGg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLCBwcml2YXRlIGhlYWx0aFNlcnZpY2U6IEhlYWx0aFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXRCYWRnZUNsYXNzKHN0YXR1c1N0YXRlOiBIZWFsdGhTdGF0dXMpOiBzdHJpbmcge1xuICAgIGlmIChzdGF0dXNTdGF0ZSA9PT0gJ1VQJykge1xuICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5oZWFsdGhTZXJ2aWNlLmNoZWNrSGVhbHRoKCkuc3Vic2NyaWJlKFxuICAgICAgaGVhbHRoID0+ICh0aGlzLmhlYWx0aCA9IGhlYWx0aCksXG4gICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMykge1xuICAgICAgICAgIHRoaXMuaGVhbHRoID0gZXJyb3IuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc2hvd0hlYWx0aChoZWFsdGg6IHsga2V5OiBIZWFsdGhLZXk7IHZhbHVlOiBIZWFsdGhEZXRhaWxzIH0pOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oSGVhbHRoTW9kYWxDb21wb25lbnQpO1xuICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmhlYWx0aCA9IGhlYWx0aDtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9