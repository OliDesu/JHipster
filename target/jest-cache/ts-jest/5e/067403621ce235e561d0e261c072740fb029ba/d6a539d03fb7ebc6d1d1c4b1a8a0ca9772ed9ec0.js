"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const pagination_constants_1 = require("app/shared/constants/pagination.constants");
const audits_service_1 = require("./audits.service");
let AuditsComponent = class AuditsComponent {
    constructor(auditsService, activatedRoute, datePipe, router) {
        this.auditsService = auditsService;
        this.activatedRoute = activatedRoute;
        this.datePipe = datePipe;
        this.router = router;
        this.fromDate = '';
        this.itemsPerPage = pagination_constants_1.ITEMS_PER_PAGE;
        this.toDate = '';
        this.totalItems = 0;
        this.dateFormat = 'yyyy-MM-dd';
    }
    ngOnInit() {
        this.toDate = this.today();
        this.fromDate = this.previousMonth();
        this.activatedRoute.data.subscribe(data => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.ascending = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
            this.loadData();
        });
    }
    loadPage(page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }
    canLoad() {
        return this.fromDate !== '' && this.toDate !== '';
    }
    transition() {
        if (this.canLoad()) {
            this.router.navigate(['/admin/audits'], {
                queryParams: {
                    page: this.page,
                    sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc')
                }
            });
            this.loadData();
        }
    }
    previousMonth() {
        let date = new Date();
        if (date.getMonth() === 0) {
            date = new Date(date.getFullYear() - 1, 11, date.getDate());
        }
        else {
            date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        }
        return this.datePipe.transform(date, this.dateFormat);
    }
    today() {
        // Today + 1 day - needed if the current day must be included
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return this.datePipe.transform(date, this.dateFormat);
    }
    loadData() {
        this.auditsService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
            fromDate: this.fromDate,
            toDate: this.toDate
        })
            .subscribe((res) => this.onSuccess(res.body, res.headers));
    }
    sort() {
        const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    onSuccess(audits, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.audits = audits || [];
    }
};
AuditsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: require('./audits.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [audits_service_1.AuditsService,
        router_1.ActivatedRoute,
        common_1.DatePipe,
        router_1.Router])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCw0Q0FBMkM7QUFDM0MsNENBQXlEO0FBRXpELG9GQUEyRTtBQUUzRSxxREFBaUQ7QUFNakQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQWExQixZQUNVLGFBQTRCLEVBQzVCLGNBQThCLEVBQzlCLFFBQWtCLEVBQ2xCLE1BQWM7UUFIZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZnhCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFHLHFDQUFjLENBQUM7UUFLOUIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFUCxlQUFVLEdBQUcsWUFBWSxDQUFDO0lBTy9CLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNB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QVMsS0FBSyxJQUFJLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxTQUFTLENBQUMsTUFBc0IsRUFBRSxPQUFvQjtRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBO0FBaEdZLGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLGtCQUFhLHlCQUF5QixDQUFBO0tBQ3ZDLENBQUM7NkNBZXlCLDhCQUFhO1FBQ1osdUJBQWM7UUFDcEIsaUJBQVE7UUFDVixlQUFNO0dBakJiLGVBQWUsQ0FnRzNCO0FBaEdZLDBDQUFlIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJ2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzJztcbmltcG9ydCB7IEF1ZGl0IH0gZnJvbSAnLi9hdWRpdC5tb2RlbCc7XG5pbXBvcnQgeyBBdWRpdHNTZXJ2aWNlIH0gZnJvbSAnLi9hdWRpdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1hdWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdWRpdHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGl0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF1ZGl0cz86IEF1ZGl0W107XG4gIGZyb21EYXRlID0gJyc7XG4gIGl0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICBwYWdlITogbnVtYmVyO1xuICBwcmVkaWNhdGUhOiBzdHJpbmc7XG4gIHByZXZpb3VzUGFnZSE6IG51bWJlcjtcbiAgYXNjZW5kaW5nITogYm9vbGVhbjtcbiAgdG9EYXRlID0gJyc7XG4gIHRvdGFsSXRlbXMgPSAwO1xuXG4gIHByaXZhdGUgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1ZGl0c1NlcnZpY2U6IEF1ZGl0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b0RhdGUgPSB0aGlzLnRvZGF5KCk7XG4gICAgdGhpcy5mcm9tRGF0ZSA9IHRoaXMucHJldmlvdXNNb250aCgpO1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgdGhpcy5hc2NlbmRpbmcgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwYWdlICE9PSB0aGlzLnByZXZpb3VzUGFnZSkge1xuICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tRGF0ZSAhPT0gJycgJiYgdGhpcy50b0RhdGUgIT09ICcnO1xuICB9XG5cbiAgdHJhbnNpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5Mb2FkKCkpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL2F1ZGl0cyddLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMuYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJldmlvdXNNb250aCgpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZGF0ZS5nZXRNb250aCgpID09PSAwKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpIC0gMSwgMTEsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KSE7XG4gIH1cblxuICBwcml2YXRlIHRvZGF5KCk6IHN0cmluZyB7XG4gICAgLy8gVG9kYXkgKyAxIGRheSAtIG5lZWRlZCBpZiB0aGUgY3VycmVudCBkYXkgbXVzdCBiZSBpbmNsdWRlZFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCB0aGlzLmRhdGVGb3JtYXQpITtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5hdWRpdHNTZXJ2aWNlXG4gICAgICAucXVlcnkoe1xuICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgc29ydDogdGhpcy5zb3J0KCksXG4gICAgICAgIGZyb21EYXRlOiB0aGlzLmZyb21EYXRlLFxuICAgICAgICB0b0RhdGU6IHRoaXMudG9EYXRlXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8QXVkaXRbXT4pID0+IHRoaXMub25TdWNjZXNzKHJlcy5ib2R5LCByZXMuaGVhZGVycykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5hc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldO1xuICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIG9uU3VjY2VzcyhhdWRpdHM6IEF1ZGl0W10gfCBudWxsLCBoZWFkZXJzOiBIdHRwSGVhZGVycyk6IHZvaWQge1xuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcihoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpKTtcbiAgICB0aGlzLmF1ZGl0cyA9IGF1ZGl0cyB8fCBbXTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9