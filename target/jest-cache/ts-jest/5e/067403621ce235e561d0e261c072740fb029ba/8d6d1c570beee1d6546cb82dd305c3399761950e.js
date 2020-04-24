"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const log_model_1 = require("./log.model");
const logs_service_1 = require("./logs.service");
let LogsComponent = class LogsComponent {
    constructor(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    ngOnInit() {
        this.findAndExtractLoggers();
    }
    changeLevel(name, level) {
        this.logsService.changeLevel(name, level).subscribe(() => this.findAndExtractLoggers());
    }
    findAndExtractLoggers() {
        this.logsService
            .findAll()
            .subscribe((response) => (this.loggers = Object.entries(response.loggers).map((logger) => new log_model_1.Log(logger[0], logger[1].effectiveLevel))));
    }
};
LogsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: require('./logs.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWtEO0FBRWxELDJDQUFrRTtBQUNsRSxpREFBNkM7QUFNN0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQU14QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRStCLENBQUM7SUFFaEQsUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWSxFQUFFLEtBQVk7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLFdBQVc7YUFDYixPQUFPLEVBQUU7YUFDVCxTQUFTLENBQ1IsQ0FBQyxRQUF5QixFQUFFLEVBQUUsQ0FDNUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksZUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUNwSSxDQUFDO0lBQ04sQ0FBQztDQUNGLENBQUE7QUF4QlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa0JBQWEsdUJBQXVCLENBQUE7S0FDckMsQ0FBQzs2Q0FPaUMsMEJBQVc7R0FOakMsYUFBYSxDQXdCekI7QUF4Qlksc0NBQWEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nLCBMb2dnZXJzUmVzcG9uc2UsIExvZ2dlciwgTGV2ZWwgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBMb2dzU2VydmljZSB9IGZyb20gJy4vbG9ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWxvZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9ncy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvZ2dlcnM/OiBMb2dbXTtcbiAgZmlsdGVyID0gJyc7XG4gIG9yZGVyUHJvcCA9ICduYW1lJztcbiAgcmV2ZXJzZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmluZEFuZEV4dHJhY3RMb2dnZXJzKCk7XG4gIH1cblxuICBjaGFuZ2VMZXZlbChuYW1lOiBzdHJpbmcsIGxldmVsOiBMZXZlbCk6IHZvaWQge1xuICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlTGV2ZWwobmFtZSwgbGV2ZWwpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZpbmRBbmRFeHRyYWN0TG9nZ2VycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEFuZEV4dHJhY3RMb2dnZXJzKCk6IHZvaWQge1xuICAgIHRoaXMubG9nc1NlcnZpY2VcbiAgICAgIC5maW5kQWxsKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogTG9nZ2Vyc1Jlc3BvbnNlKSA9PlxuICAgICAgICAgICh0aGlzLmxvZ2dlcnMgPSBPYmplY3QuZW50cmllcyhyZXNwb25zZS5sb2dnZXJzKS5tYXAoKGxvZ2dlcjogW3N0cmluZywgTG9nZ2VyXSkgPT4gbmV3IExvZyhsb2dnZXJbMF0sIGxvZ2dlclsxXS5lZmZlY3RpdmVMZXZlbCkpKVxuICAgICAgKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9