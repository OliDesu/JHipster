"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let BasketDetailComponent = class BasketDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.basket = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ basket }) => (this.basket = basket));
    }
    previousState() {
        window.history.back();
    }
};
BasketDetailComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-basket-detail',
        template: require('./basket-detail.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], BasketDetailComponent);
exports.BasketDetailComponent = BasketDetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtZGV0YWlsLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFDbEQsNENBQWlEO0FBUWpELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBR2hDLFlBQXNCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZwRCxXQUFNLEdBQW1CLElBQUksQ0FBQztJQUV5QixDQUFDO0lBRXhELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNGLENBQUE7QUFaWSxxQkFBcUI7SUFKakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0Isa0JBQWEsZ0NBQWdDLENBQUE7S0FDOUMsQ0FBQzs2Q0FJc0MsdUJBQWM7R0FIekMscUJBQXFCLENBWWpDO0FBWlksc0RBQXFCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9iYXNrZXQvYmFza2V0LWRldGFpbC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSUJhc2tldCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvYmFza2V0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWJhc2tldC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFza2V0LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQmFza2V0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYmFza2V0OiBJQmFza2V0IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IGJhc2tldCB9KSA9PiAodGhpcy5iYXNrZXQgPSBiYXNrZXQpKTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=