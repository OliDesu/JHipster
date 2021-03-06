"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const spyobject_1 = require("./spyobject");
class MockActivatedRoute extends router_1.ActivatedRoute {
    constructor(parameters) {
        super();
        this.queryParams = rxjs_1.of(parameters);
        this.params = rxjs_1.of(parameters);
        this.data = rxjs_1.of(Object.assign(Object.assign({}, parameters), { pagingParams: {
                page: 10,
                ascending: false,
                predicate: 'id'
            } }));
    }
}
exports.MockActivatedRoute = MockActivatedRoute;
class MockRouter extends spyobject_1.SpyObject {
    constructor() {
        super(router_1.Router);
        this.events = null;
        this.url = '';
        this.navigateSpy = this.spy('navigate');
        this.navigateByUrlSpy = this.spy('navigateByUrl');
    }
    setEvents(events) {
        this.events = events;
    }
    setRouterState(routerState) {
        this.routerState = routerState;
    }
}
exports.MockRouter = MockRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvaGVscGVycy9tb2NrLXJvdXRlLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFDQSw0Q0FBc0U7QUFDdEUsK0JBQXNDO0FBRXRDLDJDQUF3QztBQUV4QyxNQUFhLGtCQUFtQixTQUFRLHVCQUFjO0lBQ3BELFlBQVksVUFBZ0I7UUFDMUIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQUUsaUNBQ1QsVUFBVSxLQUNiLFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsS0FBSztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsSUFDRCxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBZEQsZ0RBY0M7QUFFRCxNQUFhLFVBQVcsU0FBUSxxQkFBUztJQU92QztRQUNFLEtBQUssQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUxoQixXQUFNLEdBQW1DLElBQUksQ0FBQztRQUU5QyxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBSVAsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFnQjtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFwQkQsZ0NBb0JDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL3Rlc3QvamF2YXNjcmlwdC9zcGVjL2hlbHBlcnMvbW9jay1yb3V0ZS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHkgPSBqYXNtaW5lLlNweTtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlckV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNweU9iamVjdCB9IGZyb20gJy4vc3B5b2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIE1vY2tBY3RpdmF0ZWRSb3V0ZSBleHRlbmRzIEFjdGl2YXRlZFJvdXRlIHtcbiAgY29uc3RydWN0b3IocGFyYW1ldGVycz86IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IG9mKHBhcmFtZXRlcnMpO1xuICAgIHRoaXMucGFyYW1zID0gb2YocGFyYW1ldGVycyk7XG4gICAgdGhpcy5kYXRhID0gb2Yoe1xuICAgICAgLi4ucGFyYW1ldGVycyxcbiAgICAgIHBhZ2luZ1BhcmFtczoge1xuICAgICAgICBwYWdlOiAxMCxcbiAgICAgICAgYXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgcHJlZGljYXRlOiAnaWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vY2tSb3V0ZXIgZXh0ZW5kcyBTcHlPYmplY3Qge1xuICBuYXZpZ2F0ZVNweTogU3B5O1xuICBuYXZpZ2F0ZUJ5VXJsU3B5OiBTcHk7XG4gIGV2ZW50czogT2JzZXJ2YWJsZTxSb3V0ZXJFdmVudD4gfCBudWxsID0gbnVsbDtcbiAgcm91dGVyU3RhdGU6IGFueTtcbiAgdXJsID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm91dGVyKTtcbiAgICB0aGlzLm5hdmlnYXRlU3B5ID0gdGhpcy5zcHkoJ25hdmlnYXRlJyk7XG4gICAgdGhpcy5uYXZpZ2F0ZUJ5VXJsU3B5ID0gdGhpcy5zcHkoJ25hdmlnYXRlQnlVcmwnKTtcbiAgfVxuXG4gIHNldEV2ZW50cyhldmVudHM6IE9ic2VydmFibGU8Um91dGVyRXZlbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gIH1cblxuICBzZXRSb3V0ZXJTdGF0ZShyb3V0ZXJTdGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJTdGF0ZSA9IHJvdXRlclN0YXRlO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=