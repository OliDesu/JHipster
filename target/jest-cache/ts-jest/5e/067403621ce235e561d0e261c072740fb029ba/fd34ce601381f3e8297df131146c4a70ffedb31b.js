"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ng_jhipster_1 = require("ng-jhipster");
const spyobject_1 = require("./spyobject");
class MockAlertService extends spyobject_1.SpyObject {
    constructor() {
        super(ng_jhipster_1.JhiAlertService);
    }
    addAlert(alertOptions) {
        return alertOptions;
    }
}
exports.MockAlertService = MockAlertService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvaGVscGVycy9tb2NrLWFsZXJ0LnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0Q7QUFFeEQsMkNBQXdDO0FBRXhDLE1BQWEsZ0JBQWlCLFNBQVEscUJBQVM7SUFDN0M7UUFDRSxLQUFLLENBQUMsNkJBQWUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRLENBQUMsWUFBc0I7UUFDN0IsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBUkQsNENBUUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvaGVscGVycy9tb2NrLWFsZXJ0LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSmhpQWxlcnRTZXJ2aWNlLCBKaGlBbGVydCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgU3B5T2JqZWN0IH0gZnJvbSAnLi9zcHlvYmplY3QnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0FsZXJ0U2VydmljZSBleHRlbmRzIFNweU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEpoaUFsZXJ0U2VydmljZSk7XG4gIH1cblxuICBhZGRBbGVydChhbGVydE9wdGlvbnM6IEpoaUFsZXJ0KTogSmhpQWxlcnQge1xuICAgIHJldHVybiBhbGVydE9wdGlvbnM7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==