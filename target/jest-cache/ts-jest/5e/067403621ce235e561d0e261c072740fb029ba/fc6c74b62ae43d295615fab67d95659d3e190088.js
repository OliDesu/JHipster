"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const metrics_service_1 = require("./metrics.service");
let MetricsComponent = class MetricsComponent {
    constructor(metricsService, changeDetector) {
        this.metricsService = metricsService;
        this.changeDetector = changeDetector;
        this.updatingMetrics = true;
    }
    ngOnInit() {
        this.refresh();
    }
    refresh() {
        this.updatingMetrics = true;
        this.metricsService
            .getMetrics()
            .pipe(operators_1.flatMap(() => this.metricsService.threadDump(), (metrics, threadDump) => {
            this.metrics = metrics;
            this.threads = threadDump.threads;
            this.updatingMetrics = false;
            this.changeDetector.detectChanges();
        }))
            .subscribe();
    }
    metricsKeyExists(key) {
        return this.metrics && this.metrics[key];
    }
    metricsKeyExistsAndObjectNotEmpty(key) {
        return this.metrics && this.metrics[key] && JSON.stringify(this.metrics[key]) !== '{}';
    }
};
MetricsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: require('./metrics.component.html'),
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [metrics_service_1.MetricsService, core_1.ChangeDetectorRef])
], MetricsComponent);
exports.MetricsComponent = MetricsComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQThGO0FBQzlGLDhDQUF5QztBQUV6Qyx1REFBNEY7QUFPNUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFLM0IsWUFBb0IsY0FBOEIsRUFBVSxjQUFpQztRQUF6RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFGN0Ysb0JBQWUsR0FBRyxJQUFJLENBQUM7SUFFeUUsQ0FBQztJQUVqRyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWM7YUFDaEIsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUNILG1CQUFPLENBQ0wsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFDdEMsQ0FBQyxPQUFnQixFQUFFLFVBQXNCLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQ0YsQ0FDRjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFlO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBaUMsQ0FBQyxHQUFlO1FBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUN6RixDQUFDO0NBQ0YsQ0FBQTtBQXBDWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGtCQUFhLDBCQUEwQixDQUFBO1FBQ3ZDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7NkNBTW9DLGdDQUFjLEVBQTBCLHdCQUFpQjtHQUxsRixnQkFBZ0IsQ0FvQzVCO0FBcENZLDRDQUFnQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNZXRyaWNzU2VydmljZSwgTWV0cmljcywgTWV0cmljc0tleSwgVGhyZWFkRHVtcCwgVGhyZWFkIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktbWV0cmljcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRyaWNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWV0cmljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1ldHJpY3M/OiBNZXRyaWNzO1xuICB0aHJlYWRzPzogVGhyZWFkW107XG4gIHVwZGF0aW5nTWV0cmljcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXRyaWNzU2VydmljZTogTWV0cmljc1NlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0aW5nTWV0cmljcyA9IHRydWU7XG4gICAgdGhpcy5tZXRyaWNzU2VydmljZVxuICAgICAgLmdldE1ldHJpY3MoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZsYXRNYXAoXG4gICAgICAgICAgKCkgPT4gdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCksXG4gICAgICAgICAgKG1ldHJpY3M6IE1ldHJpY3MsIHRocmVhZER1bXA6IFRocmVhZER1bXApID0+IHtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcyA9IG1ldHJpY3M7XG4gICAgICAgICAgICB0aGlzLnRocmVhZHMgPSB0aHJlYWREdW1wLnRocmVhZHM7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nTWV0cmljcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBtZXRyaWNzS2V5RXhpc3RzKGtleTogTWV0cmljc0tleSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldHJpY3MgJiYgdGhpcy5tZXRyaWNzW2tleV07XG4gIH1cblxuICBtZXRyaWNzS2V5RXhpc3RzQW5kT2JqZWN0Tm90RW1wdHkoa2V5OiBNZXRyaWNzS2V5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0cmljcyAmJiB0aGlzLm1ldHJpY3Nba2V5XSAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLm1ldHJpY3Nba2V5XSkgIT09ICd7fSc7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==